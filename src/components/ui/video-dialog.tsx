"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";

type FullscreenVideo = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
};

type VideoDialogProps = {
  id: string;
  name: string;
  description: string;
  src: string;
  captions?: string;
  onClose: () => void;
};

export function VideoDialog({ id, name, description, src, captions, onClose }: VideoDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<FullscreenVideo>(null);
  const [fullscreenError, setFullscreenError] = useState("");

  async function enterFullscreen() {
    const video = videoRef.current;
    if (!video) return;
    setFullscreenError("");
    try {
      // Request fullscreen directly from the button gesture, on the video
      // rather than the dialog (dialogs cannot themselves enter fullscreen).
      if (video.requestFullscreen) await video.requestFullscreen();
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
      else setFullscreenError("Fullscreen isn't supported here. Open the video in a new tab instead.");
    } catch {
      setFullscreenError("Your browser couldn't enter fullscreen. Open the video in a new tab instead.");
    }
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.querySelector("video")?.pause();
      dialog.close();
      document.body.style.overflow = overflow;
      trigger?.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog ref={dialogRef} aria-labelledby={`${id}-dialog-title`} aria-describedby={`${id}-dialog-description`} onClose={(event) => {
      // Strict Mode closes and reopens the dialog while replaying effects.
      // That close event is queued, so ignore it if the dialog is open again.
      if (!event.currentTarget.open) onClose();
    }} className="m-auto max-h-[90svh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-xl border border-line bg-canvas p-4 text-ink shadow-panel backdrop:bg-black/80 sm:p-6">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h2 id={`${id}-dialog-title`} className="text-lg font-semibold">{name} demo</h2>
        <button type="button" aria-label="Close video" onClick={() => dialogRef.current?.close()} className="flex size-11 shrink-0 items-center justify-center rounded-md border border-line hover:text-accent"><X size={20} aria-hidden="true" /></button>
      </div>
      <video ref={videoRef} src={src} controls playsInline preload="metadata" aria-label={`${name} full demo`} className="aspect-video w-full rounded-md bg-black object-contain fullscreen:h-screen fullscreen:w-screen fullscreen:rounded-none">
        {captions && <track kind="captions" src={captions} srcLang="en" label="English" default />}
      </video>
      <div className="mt-3 flex flex-wrap items-center gap-4">
        <button type="button" onClick={() => void enterFullscreen()} className="button button-secondary">
          <Maximize2 size={16} aria-hidden="true" /> Fullscreen
        </button>
        <a href={src} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Open ${name} video in a new tab`}>Open video in new tab</a>
      </div>
      {fullscreenError && <p role="status" className="mt-3 text-sm text-muted">{fullscreenError}</p>}
      <p id={`${id}-dialog-description`} className="mt-4 text-sm leading-6 text-muted">{description}</p>
    </dialog>
  );
}
