"use client";

import { useState } from "react";
import { brief, site } from "@/lib/content";

// Builds an email from a few choices. There is no server: the button opens the
// visitor's own mail app with the brief filled in.
export function Brief() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);

  const toggle = (item: string) =>
    setNeeds((current) => (current.includes(item) ? current.filter((v) => v !== item) : [...current, item]));

  const body = [
    `Hi ${site.name},`,
    "",
    `I'm looking for help with: ${needs.length ? needs.join(", ") : "(not chosen yet)"}`,
    `Timeline: ${timeline || "(not chosen yet)"}`,
    "",
    details || "(A few lines about the project)",
    "",
    name ? `Thanks,\n${name}` : "Thanks,",
  ].join("\n");

  const subject = `Project enquiry${name ? ` from ${name}` : ""}`;
  const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-12">
      <fieldset>
        <legend className="text-lg font-semibold tracking-tight">01 — What do you need?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {brief.needs.map((item) => (
            <button
              key={item}
              type="button"
              className="chip"
              aria-pressed={needs.includes(item)}
              onClick={() => toggle(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-lg font-semibold tracking-tight">02 — When do you need it?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {brief.timelines.map((item) => (
            <button
              key={item}
              type="button"
              className="chip"
              aria-pressed={timeline === item}
              onClick={() => setTimeline(timeline === item ? "" : item)}
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <p className="text-lg font-semibold tracking-tight">03 — Tell us about it</p>
        <label className="sr-only" htmlFor="brief-name">
          Your name
        </label>
        <input
          id="brief-name"
          className="input mt-3"
          placeholder="Your name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="sr-only" htmlFor="brief-details">
          Project details
        </label>
        <textarea
          id="brief-details"
          className="input mt-2 min-h-32 resize-y"
          placeholder="What are you making, and what should it do?"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <a href={href} className="btn btn-ink !py-5 !text-base max-sm:w-full sm:!px-7">
          Open in your mail app <span className="arrow">↗</span>
        </a>
        <button type="button" className="btn btn-line !py-5 max-sm:w-full" onClick={copy}>
          {copied ? "Copied" : "Copy the brief"}
        </button>
        <p className="w-full text-sm text-muted" aria-live="polite">
          Nothing is sent from this page. The button opens an email to {site.email} with your brief filled in.
        </p>
      </div>
    </div>
  );
}
