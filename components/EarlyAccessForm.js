"use client";

import { site } from "@/lib/site";
import { useState } from "react";

export default function EarlyAccessForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting

  return (
    <div className="card" id="early-access">
      <h2 className="h2">Join Early Access</h2>
      <p className="muted">
        Get notified as we launch city by city. Be first to access new venues.
      </p>

      <form
        className="formRow"
        method="POST"
        action={site.formspreeAction}
        onSubmit={() => setStatus("submitting")}
      >
        {/* Honeypot anti-spam */}
        <input
          type="text"
          name="_gotcha"
          tabIndex="-1"
          autoComplete="off"
          className="honeypot"
        />

        <input type="hidden" name="source" value="hallsnall.com landing" />
        <input
          type="hidden"
          name="_subject"
          value="New Early Access Signup - Halls’n’All"
        />
        {/* Redirect to your site after submit */}
        <input
          type="hidden"
          name="_redirect"
          value="https://hallsnall.vercel.app/thanks"
        />

        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email address"
          required
        />

        <input
          className="input"
          type="text"
          name="city"
          placeholder="City (e.g., Dallas)"
          required
        />

        <select className="input" name="eventType" required defaultValue="">
          <option value="" disabled>
            Event type…
          </option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Corporate</option>
          <option>Baby Shower</option>
          <option>Bridal Shower</option>
          <option>Graduation</option>
          <option>Church / Religious</option>
          <option>Cultural Celebration</option>
          <option>Party</option>
          <option>Other</option>
        </select>

        <button
          className="btn btnPrimary"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting…" : "Join Early Access — Free"}
        </button>
      </form>

      <div className="fine">
        Prefer email? Contact us at{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </div>
    </div>
  );
}
