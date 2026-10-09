"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";

const titles = ["Software Engineer", "Cloud Developer", "DevOps Engineer", "AI enthusiast", "Quality Engineer"];

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
const getServerMotionPreference = () => true;

export function AnimatedRole() {
  const [text, setText] = useState(titles[0]);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeToMotionPreference, getMotionPreference, getServerMotionPreference);

  useEffect(() => {
    if (reducedMotion || paused) return;
    let index = 0;
    let length = titles[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;
    function tick() {
      length += deleting ? -1 : 1;
      setText(titles[index].slice(0, length));
      let delay = deleting ? 45 : 85;
      if (length === 0) {
        index = (index + 1) % titles.length;
        deleting = false;
        delay = 250;
      } else if (length === titles[index].length) {
        deleting = true;
        delay = 1800;
      }
      timer = setTimeout(tick, delay);
    }
    timer = setTimeout(tick, 1800);
    return () => clearTimeout(timer);
  }, [paused, reducedMotion]);

  const staticRole = paused || reducedMotion;
  return (
    <div className="mt-4 flex min-h-11 items-center gap-1" data-role-animation>
      <span className="sr-only">{titles.join(", ")}</span>
      <span aria-hidden="true" className="inline-grid text-xl font-medium tracking-tight text-accent sm:text-2xl">
        <span className="invisible col-start-1 row-start-1">Software Engineer<span className="ml-1">|</span></span>
        <span className="col-start-1 row-start-1" data-role-text>
          {staticRole ? titles[0] : text}
          <span className={`role-cursor ml-1 inline-block font-normal ${staticRole ? "invisible" : ""}`}>|</span>
        </span>
      </span>
      {!reducedMotion && (
        <button type="button" aria-label={paused ? "Play role animation" : "Pause role animation"} onClick={() => { setText(titles[0]); setPaused(!paused); }} className="flex size-11 shrink-0 items-center justify-center rounded-md text-muted hover:bg-surface hover:text-ink">
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
        </button>
      )}
    </div>
  );
}
