import VenueFiltersClient from "@/components/VenueFiltersClient";
import VenueCard from "@/components/VenueCard";

const VENUES = [
  { id: "1", name: "Grand Palace Hall", city: "Houston", type: "Wedding", capacity: 300 },
  { id: "2", name: "Skyline Ballroom", city: "Dallas", type: "Birthday", capacity: 200 },
  { id: "3", name: "Riverside Event Center", city: "Houston", type: "Corporate", capacity: 500 },
  { id: "4", name: "Garden Pavilion", city: "Atlanta", type: "Wedding", capacity: 180 },
  { id: "5", name: "Downtown Loft", city: "Chicago", type: "Baby Shower", capacity: 120 }
];

export default function VenuesPage({ searchParams }) {
  const city = searchParams?.city || "";
  const type = searchParams?.type || "";

  const cities = [...new Set(VENUES.map(v => v.city))];
  const types = [...new Set(VENUES.map(v => v.type))];

  const filtered = VENUES.filter(v => {
    return (!city || v.city === city) && (!type || v.type === type);
  });

  return (
    <main className="container">
      <h1>Venues</h1>

      <VenueFiltersClient cities={cities} types={types} />

      <div className="grid">
        {filtered.map(v => (
          <VenueCard key={v.id} venue={v} />
        ))}

        {filtered.length === 0 && (
          <p>No venues match your filters.</p>
        )}
      </div>
    </main>
  );
}
