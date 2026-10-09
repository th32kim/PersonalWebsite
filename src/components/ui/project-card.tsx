"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { GitHubIcon } from "@/components/ui/social-icons";
import { VideoDialog } from "@/components/ui/video-dialog";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio < 0.35) video.pause();
    }, { threshold: [0, 0.35] });
    observer.observe(card);
    const onVisibilityChange = () => { if (document.hidden) video.pause(); };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      video.pause();
    };
  }, []);

  async function play() {
    const video = videoRef.current;
    if (!video) return;
    setError("");
    try {
      // Attach the MP4 only after interaction; previews never fetch it on page load.
      if (!video.getAttribute("src") && project.videoUrl) video.src = project.videoUrl;
      await video.play();
    } catch (failure) {
      if (failure instanceof DOMException && failure.name === "AbortError") return;
      setError("Preview unavailable. You can still explore the project on GitHub.");
    }
  }

  function toggle() {
    if (videoRef.current?.paused) void play();
    else videoRef.current?.pause();
  }

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) void play();
  }

  return (
    <article
      ref={cardRef}
      aria-labelledby={`${project.id}-title`}
      className={`project-card ${project.featured ? "project-card-featured" : ""}`}
      onPointerEnter={(event) => {
        if (!dialogOpen && event.pointerType === "mouse" && window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) void play();
      }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") videoRef.current?.pause(); }}
      onClick={(event) => {
        if (!dialogOpen && !(event.target as HTMLElement).closest("a, button, dialog") && project.videoUrl) toggle();
      }}
    >
      {(project.image || project.videoUrl) && (
        <div className="project-card-image">
          {project.videoUrl ? (
            <>
              <video
                ref={videoRef}
                aria-label={`${project.name} demo preview`}
                muted={muted} loop playsInline preload="none"
                className="absolute inset-0 h-full w-full object-contain"
                onLoadedData={() => setReady(true)}
                onPlay={() => {
                  document.querySelectorAll<HTMLVideoElement>("#projects video").forEach((video) => { if (video !== videoRef.current) video.pause(); });
                  setPlaying(true);
                }}
                onPause={() => {
                  setPlaying(false);
                  // Future hover previews should start quietly and remain autoplay-compatible.
                  if (videoRef.current) videoRef.current.muted = true;
                  setMuted(true);
                }}
                onError={() => setError("Preview unavailable. You can still explore the project on GitHub.")}
              >
                {project.captionsUrl && <track kind="captions" src={project.captionsUrl} srcLang="en" label="English" default />}
              </video>
              {!ready && project.image && (
                <Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 1152px) 448px, (min-width: 768px) 45vw, 90vw" className="pointer-events-none object-contain" />
              )}
              <div className="absolute right-3 bottom-3 flex gap-2" onClick={(event) => event.stopPropagation()}>
              <button type="button" aria-label={`Open ${project.name} video dialog`} aria-haspopup="dialog" onClick={() => { videoRef.current?.pause(); setDialogOpen(true); }} className="flex size-11 items-center justify-center rounded-md border border-line bg-canvas text-ink shadow-panel"><Maximize2 size={18} aria-hidden="true" /></button>
              {project.hasAudio && (
                <button type="button" onClick={toggleSound} aria-label={`${muted ? "Unmute" : "Mute"} ${project.name} demo`} aria-pressed={!muted} title={muted ? "Enable audio" : "Mute audio"} className="flex size-11 items-center justify-center rounded-md border border-line bg-canvas text-ink shadow-panel">
                  {muted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
                </button>
              )}
              <button type="button" onClick={toggle} aria-label={`${playing ? "Pause" : "Play"} ${project.name} demo`} aria-pressed={playing} className="flex min-h-11 items-center gap-2 rounded-md border border-line bg-canvas px-3 text-xs font-medium text-ink shadow-panel">
                {playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
                {playing ? "Pause" : "Play demo"}
              </button>
              </div>
            </>
          ) : project.image && <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1152px) 460px, (min-width: 768px) 45vw, 90vw"
            className="object-contain"
          />}
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-medium tracking-wide text-muted">{project.category}</p>
          {project.featured && <span className="badge badge-accent">Featured</span>}
        </div>
        <h3 id={`${project.id}-title`} className="text-xl leading-7 font-semibold tracking-tight text-ink sm:text-2xl">{project.name}</h3>
        <p className="body-copy mt-3 text-sm leading-6">{project.description}</p>
        {error && <p role="status" className="mt-3 text-xs leading-5 text-muted">{error}</p>}
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <li key={technology} className="badge text-[11px]">{technology}</li>)}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary text-sm" aria-label={`View ${project.name} on GitHub (opens in a new tab)`}>
            <GitHubIcon /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary text-sm" aria-label={`View ${project.name} live demo (opens in a new tab)`}>
              Live Demo <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
      {dialogOpen && project.videoUrl && <VideoDialog id={project.id} name={project.name} description={project.description} src={project.fullVideoUrl ?? project.videoUrl} captions={project.captionsUrl} onClose={() => setDialogOpen(false)} />}
    </article>
  );
}
