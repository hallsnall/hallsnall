"use client";

import { useState } from "react";
import VenueCard from "./VenueCard";

const venues = [
  { id: 1, name: "Grand Palace Hall", city: "Houston", type: "Wedding", capacity: 300 },
  { id: 2, name: "Skyline Ballroom", city: "Dallas", type: "Birthday", capacity: 200 },
  { id: 3, name: "Riverside Event Center", city: "Houston", type: "Corporate", capacity: 500 },
  { id: 4, name: "Garden Pavilion", city: "Atlanta", type: "Wedding", capacity: 180 },
  { id: 5, name: "Downtown Loft", city: "Chicago", type: "Baby Shower", capacity: 120 }
];

export default function VenueFiltersClient() {
  const [city, setCity] = useState("All");
  const [eventType, setEventType] = useState("All");

  const filteredVenues = venues.filter((venue) => {
    return (
      (city === "All" || venue.city === city) &&
      (eventType === "All" || venue.type === eventType)
    );
  });

  return (
    <div>
      {/* FILTER BAR */}
      <div className="card" style={{ marginBottom: "24px" }}>
        <h3>Filter Venues</h3>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="All">All Cities</option>
            <option value="Houston">Houston</option>
            <option value="Dallas">Dallas</option>
            <option value="Atlanta">Atlanta</option>
            <option value="Chicago">Chicago</option>
          </select>

          <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
            <option value="All">All Event Types</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
            <option value="Baby Shower">Baby Shower</option>
          </select>

          <button
            className="btn"
            onClick={() => {
              setCity("All");
              setEventType("All");
            }}
          >
            Clear
          </button>
        </div>
      </div>

      {/* RESULTS */}
      {filteredVenues.length === 0 && (
        <p>No venues match your filters.</p>
      )}

      {filteredVenues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
}
