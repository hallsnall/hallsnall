"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function VenueFiltersClient({ cities = [], types = [] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [city, setCity] = useState(searchParams.get("city") || "");
  const [eventType, setEventType] = useState(searchParams.get("type") || "");

  function apply() {
    const params = new URLSearchParams(searchParams.toString());

    if (city) params.set("city", city);
    else params.delete("city");

    if (eventType) params.set("type", eventType);
    else params.delete("type");

    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  }

  function clear() {
    setCity("");
    setEventType("");
    router.push(pathname);
  }

  return (
    <div className="card" style={{ marginBottom: 24 }}>
      <h3>Filter Venues</h3>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <select className="input" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">All Cities</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select className="input" value={eventType} onChange={(e) => setEventType(e.target.value)}>
          <option value="">All Event Types</option>
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <button className="btn" type="button" onClick={apply}>Apply</button>
        <button className="btn btnGhost" type="button" onClick={clear}>Clear</button>
      </div>
    </div>
  );
}