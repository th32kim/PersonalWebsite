"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const anchorTarget = useRef<string | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const root = document.documentElement;
    const updateHeight = () => root.style.setProperty("--header-height", `${header.getBoundingClientRect().height}px`);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--header-height");
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    function update() {
      // Preserve an explicitly selected anchor when the page end limits scrolling.
      if (anchorTarget.current !== null) {
        setActive(anchorTarget.current);
        return;
      }
      let current = "";
      const headerHeight = headerRef.current?.offsetHeight ?? 76;
      for (const { href } of navigation) {
        const section = document.querySelector(href);
        if (section && section.getBoundingClientRect().top <= headerHeight + 100) current = href;
      }
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "#contact";
      setActive(current);
    }
    function schedule() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }
    function onHashChange() {
      anchorTarget.current = navigation.some(({ href }) => href === window.location.hash) ? window.location.hash : "";
      schedule();
    }
    function onManualScroll() {
      anchorTarget.current = null;
      schedule();
    }
    function onScrollKey(event: KeyboardEvent) {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) onManualScroll();
    }
    if (window.location.hash) onHashChange();
    else schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onManualScroll);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("wheel", onManualScroll, { passive: true });
    window.addEventListener("touchstart", onManualScroll, { passive: true });
    window.addEventListener("keydown", onScrollKey);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onManualScroll);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("wheel", onManualScroll);
      window.removeEventListener("touchstart", onManualScroll);
      window.removeEventListener("keydown", onScrollKey);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 768px)");
    function onResize() {
      if (desktop.matches) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-line bg-canvas">
      <nav aria-label="Main navigation" className="page-container relative flex min-h-18 items-center justify-between gap-2 py-3 sm:gap-4">
        <a href="#home" onClick={() => { anchorTarget.current = ""; setActive(""); setOpen(false); }} aria-label="Tae Hong (Richard) Kim — home" className="inline-flex min-h-11 items-center text-base font-semibold tracking-tight">Richard Kim<span aria-hidden="true" className="ml-0.5 text-accent">.</span></a>
        <div className="ml-auto flex items-center gap-2 sm:gap-3 md:gap-4">
        <ul id="portfolio-navigation" className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col border-b border-line bg-canvas px-6 py-3 shadow-panel sm:px-10 md:static md:flex md:flex-row md:gap-4 lg:gap-7 md:border-0 md:p-0 md:shadow-none`}>
          {navigation.map(({ label, href }) => (
            <li key={href}>
              <a href={href} aria-current={active === href ? "location" : undefined} onClick={() => { anchorTarget.current = href; setActive(href); setOpen(false); }} className={`nav-link w-fit ${active === href ? "border-accent text-accent" : ""}`}>{label}</a>
            </li>
          ))}
          <li className="md:hidden"><a href="https://github.com/th32kim" target="_blank" rel="noopener noreferrer" className="nav-link md:hidden" onClick={() => setOpen(false)}>GitHub<span className="sr-only"> (opens in a new tab)</span></a></li>
          <li className="md:hidden"><a href="https://www.linkedin.com/in/richard-kim-10ba1319b" target="_blank" rel="noopener noreferrer" className="nav-link md:hidden" onClick={() => setOpen(false)}>LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></li>
        </ul>
        <div className="hidden items-center gap-1 md:flex">
          <a href="https://github.com/th32kim" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="flex size-11 items-center justify-center rounded-md text-muted hover:bg-surface hover:text-accent"><GitHubIcon /></a>
          <a href="https://www.linkedin.com/in/richard-kim-10ba1319b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="flex size-11 items-center justify-center rounded-md text-muted hover:bg-surface hover:text-accent"><LinkedInIcon /></a>
        </div>
        <a href="/documents/TResume.pdf" target="_blank" rel="noopener noreferrer" className="button button-secondary shrink-0 px-3 text-xs" aria-label="View resume (PDF, opens in a new tab)"><FileText size={15} aria-hidden="true" />Resume</a>
        <button ref={toggleRef} type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="portfolio-navigation" onClick={() => setOpen(!open)} className="flex size-11 shrink-0 items-center justify-center rounded-md border border-line text-ink hover:bg-surface md:hidden">
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        </div>
      </nav>
    </header>
  );
}
