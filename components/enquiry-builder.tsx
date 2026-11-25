"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/content/company";
import type { SiteCopy } from "@/content/types";

type Builder = SiteCopy["contact"]["builder"];

const field =
  "mt-2 block w-full rounded-xl border border-line-strong bg-surface px-4 text-base text-ink transition-[border-color,box-shadow] duration-150 placeholder:text-subtle-text hover:border-line-hover focus:border-accent focus:shadow-[0_0_0_3px_#c6f6dd] focus:outline-none";

/** Builds a pre-filled email. Nothing is sent or stored by the site itself. */
export function EnquiryBuilder({ builder, subject }: { builder: Builder; subject: string }) {
  const [copied, setCopied] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const labels = builder.bodyLabels;
    const lines = [
      `${labels.name}: ${value("name")}`,
      `${labels.business}: ${value("business")}`,
      `${labels.need}: ${value("need")}`,
      `${labels.language}: ${value("language")}`,
      "",
      value("message"),
    ];
    const business = value("business");
    const mailSubject = business ? `${subject} — ${business}` : subject;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(company.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${company.email}`;
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-6 shadow-e1 md:p-10">
      <h2 className="text-2xl font-medium tracking-[-0.025em]">{builder.title}</h2>
      <p className="mt-2 max-w-[56ch] text-base leading-6 text-muted">{builder.lede}</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium">
          {builder.name}
          <input name="name" autoComplete="name" className={`${field} min-h-12`} />
        </label>
        <label className="block text-sm font-medium">
          {builder.business}
          <input name="business" autoComplete="organization" className={`${field} min-h-12`} />
        </label>
        <label className="block text-sm font-medium">
          {builder.need}
          <select name="need" className={`${field} min-h-12 appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><path d=%22M4 6l4 4 4-4%22 fill=%22none%22 stroke=%22%2352525b%22 stroke-width=%221.6%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}>
            {builder.needs.map((need) => (
              <option key={need}>{need}</option>
            ))}
          </select>
        </label>
        <fieldset className="text-sm font-medium">
          <legend>{builder.language}</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {builder.languages.map((language, index) => (
              <label
                key={language}
                className="flex min-h-12 cursor-pointer items-center justify-center rounded-xl border border-line-strong px-3 text-base transition-colors hover:border-line-hover has-[:checked]:border-accent has-[:checked]:bg-[#e7fbf0] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-focus"
              >
                <input type="radio" name="language" value={language} defaultChecked={index === 0} className="sr-only" />
                {language}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="block text-sm font-medium md:col-span-2">
          {builder.message}
          <textarea
            name="message"
            rows={4}
            placeholder={builder.messagePlaceholder}
            className={`${field} resize-y py-3 leading-6`}
          />
        </label>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-action px-6 text-base font-medium text-ink transition-[background-color,transform] duration-150 hover:bg-action-hover active:scale-[0.97] active:bg-action-pressed motion-reduce:transform-none"
        >
          {builder.submit}
        </button>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-line-strong px-6 text-base font-medium transition-[border-color,transform] duration-150 hover:border-line-hover active:scale-[0.97] motion-reduce:transform-none"
        >
          <span aria-live="polite">{copied ? builder.copied : builder.copy}</span>
        </button>
      </div>
    </form>
  );
}
