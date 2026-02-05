"use client";

import { useMemo, useState } from "react";
import VenueCard from "@/components/VenueCard";

export default function VenueFiltersClient({ venues }) {
  const [q, setQ] = useState("");
  const [state, setState] = useState("All");
  const [eventType, setEventType] = useState("All");
  const [minCapacity, setMinCapacity] = useState("");

  const states = useMemo(() => {
    const s = Array.from(new Set(venues.map((v) => v.state))).sort();
    return ["All", ...s];
  }, [venues]);

  const eventTypes = useMemo(() => {
    const t = Array.from(new Set(venues.flatMap((v) => v.tags || []))).sort();
    return ["All", ...t];
  }, [venues]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    const cap = minCapacity ? Number(minCapacity) : null;

    return venues.filter((v) => {
      const matchesQuery =
        !query ||
        v.name.toLowerCase().includes(query) ||
        v.city.toLowerCase().includes(query) ||
        v.state.toLowerCase().includes(query) ||
        (v.tags || []).some((t) => t.toLowerCase().includes(query));

      const matchesState = state === "All" || v.state === state;

      const matchesEvent =
        eventType === "All" || (v.tags || []).includes(eventType);

      const matchesCap = cap === null || (v.capacity || 0) >= cap;

      return matchesQuery && matchesState && matchesEvent && matchesCap;
    });
  }, [venues, q, state, eventType, minCapacity]);

  return (
    <>
      <div className="card" style={{ marginBottom: 14 }}>
        <div
          style={{
            display: "grid",
            gap: 10,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            alignItems: "center",
          }}
        >
          <input
            className="input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search venue, city, tag…"
          />

          <select
            className="input"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {states.map((s) => (
              <option key={s} value={s}>
                {s === "All" ? "All states" : s}
              </option>
            ))}
          </select>

          <select
            className="input"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          >
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t === "All" ? "All event types" : t}
              </option>
            ))}
          </select>

          <input
            className="input"
            type="number"
            min="0"
            value={minCapacity}
            onChange={(e) => setMinCapacity(e.target.value)}
            placeholder="Min capacity (e.g., 150)"
          />
        </div>

        <div className="fine">
          Showing <b>{filtered.length}</b> of <b>{venues.length}</b> venues
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {filtered.map((v) => (
          <VenueCard key={v.slug} v={v} />
        ))}
      </div>
    </>
  );
}
