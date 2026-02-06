import VenueFiltersClient from "@/components/VenueFiltersClient";
import VenueCard from "@/components/VenueCard";
import { VENUES } from "@/lib/venues";

export default function VenuesPage({ searchParams }) {
  const city = searchParams?.city || "";
  const type = searchParams?.type || "";

  const cities = [...new Set(VENUES.map((v) => v.city))];
  const types = [...new Set(VENUES.map((v) => v.type || v.tags?.[0]).filter(Boolean))];

  const filtered = VENUES.filter((v) => {
    const vType = v.type || v.tags?.[0];
    return (!city || v.city === city) && (!type || vType === type);
  });

  return (
    <main className="container">
      <h1>Venues</h1>

      {/* Only pass plain data. NO functions. */}
      <VenueFiltersClient cities={cities} types={types} />

      <div className="grid">
        {filtered.map((v) => (
          <VenueCard key={v.id} venue={v} />
        ))}

        {filtered.length === 0 && <p>No venues match your filters.</p>}
      </div>
    </main>
  );
}