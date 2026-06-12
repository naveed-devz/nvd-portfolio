"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      projectType: String(formData.get("projectType") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const raw = await response.text();
      let data: { error?: string; success?: boolean } = {};

      if (raw) {
        try {
          data = JSON.parse(raw) as { error?: string; success?: boolean };
        } catch {
          data = {};
        }
      }

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong while sending the message.");
      }

      form.reset();
      setStatus("success");
      setMessage("Message sent successfully. I will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send the message right now.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label className="contact-field">
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" required />
        </label>

        <label className="contact-field">
          <span>Email</span>
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>

        <label className="contact-field">
          <span>Company</span>
          <input name="company" type="text" placeholder="Company or brand" />
        </label>

        <label className="contact-field">
          <span>Project type</span>
          <input
            name="projectType"
            type="text"
            placeholder="Full-time role, freelance, SaaS, tracking app..."
          />
        </label>
      </div>

      <label className="contact-field contact-field-full">
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me what you're building or the kind of role you're hiring for."
          required
        />
      </label>

      <div className="contact-form-actions">
        <button className="button-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send inquiry"}
        </button>
        <a
          className="button-secondary"
          href="https://www.linkedin.com/in/sh-naveed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      {message ? (
        <p
          className={`contact-feedback contact-feedback-${status}`}
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
