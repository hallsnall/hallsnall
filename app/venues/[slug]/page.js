import { getVenueBySlug } from "@/lib/venues";

export default function VenueDetailPage({ params }) {
  const venue = getVenueBySlug(params.slug);

  if (!venue) return <main className="container"><p>Venue not found.</p></main>;

  return (
    <main className="container">
      <h1>{venue.name}</h1>
      <p><strong>Location:</strong> {venue.city}, {venue.state}</p>
      <p><strong>Event Type:</strong> {venue.type}</p>
      <p><strong>Capacity:</strong> {venue.capacity}</p>
      <p style={{ marginTop: 16 }}>{venue.description}</p>

      <p><strong>Phone:</strong> {venue.phone}</p>

      <a className="btn" href={venue.website} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </main>
  );
}