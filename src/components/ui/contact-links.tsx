"use client";

import { useState } from "react";
import { Check, Copy, Mail, X } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";

const email = "th32kim@uwaterloo.ca";

export function ContactLinks() {
  const [showEmail, setShowEmail] = useState(false);
  const [status, setStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email address copied.");
    } catch {
      setStatus("Select the address above to copy it manually.");
    }
  }

  return (
    <div className="flex w-full flex-col items-center text-center">
      <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-8 pt-3 md:grid-cols-3 md:pt-5" aria-label="Contact information">
        <li className="min-w-0">
          <a href={`mailto:${email}`} onClick={() => setShowEmail(true)} className="contact-method group">
            <span className="contact-icon"><Mail size={26} strokeWidth={1.5} aria-hidden="true" /></span>
            <span className="mt-4 text-base font-semibold text-ink">Email</span>
            <span className="contact-detail">{email}</span>
            <span className="sr-only"> (opens your email app)</span>
          </a>
        </li>
        <li className="min-w-0">
          <a href="https://www.linkedin.com/in/richard-kim-10ba1319b" target="_blank" rel="noopener noreferrer" className="contact-method group">
            <span className="contact-icon"><LinkedInIcon width={26} height={26} /></span>
            <span className="mt-4 text-base font-semibold text-ink">LinkedIn</span>
            <span className="contact-detail">linkedin.com/in/richard-kim-10ba1319b</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li className="min-w-0">
          <a href="https://github.com/th32kim" target="_blank" rel="noopener noreferrer" className="contact-method group">
            <span className="contact-icon"><GitHubIcon width={26} height={26} /></span>
            <span className="mt-4 text-base font-semibold text-ink">GitHub</span>
            <span className="contact-detail">github.com/th32kim</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
      {showEmail && (
        <div role="region" aria-label="Email fallback" className="mt-5 w-full max-w-md rounded-lg border border-line bg-surface p-4 text-left">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-medium break-all text-ink select-all">{email}</p>
              <p className="mt-2 text-xs leading-5 text-muted">No email window opened? Copy my address into your preferred email app.</p>
            </div>
            <button type="button" onClick={() => setShowEmail(false)} aria-label="Close email options" className="-mt-2 -mr-2 flex size-11 shrink-0 items-center justify-center rounded-md text-muted hover:text-ink"><X size={16} aria-hidden="true" /></button>
          </div>
          <button type="button" onClick={copyEmail} className="button button-secondary mt-3 hover:border-accent hover:text-accent">{status === "Email address copied." ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}Copy email address</button>
          <p role="status" className="mt-2 text-xs leading-5 text-accent">{status}</p>
        </div>
      )}
    </div>
  );
}
