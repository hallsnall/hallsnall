"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function VenueFiltersClient({ cities, types }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [city, setCity] = useState(searchParams.get("city") || "");
  const [type, setType] = useState(searchParams.get("type") || "");

  function applyFilters() {
    const params = new URLSearchParams();

    if (city) params.set("city", city);
    if (type) params.set("type", type);

    router.push(`${pathname}?${params.toString()}`);
  }

  function clearFilters() {
    router.push(pathname);
    setCity("");
    setType("");
  }

  return (
    <div className="card" style={{ marginBottom: 20 }}>
      <h3>Filter Venues</h3>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto auto", gap: 12 }}>
        <select className="input" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">All Cities</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All Event Types</option>
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <button className="btn" onClick={applyFilters}>Apply</button>
        <button className="btn btnGhost" onClick={clearFilters}>Clear</button>
      </div>
    </div>
  );
}
