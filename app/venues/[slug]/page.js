import Link from "next/link";
import { getVenueBySlug } from "@/lib/venues";

export default function VenueDetailPage({ params }) {
  const venue = getVenueBySlug(params.slug);

  if (!venue) {
    return (
      <div className="container">
        <div className="card" style={{ marginTop: 20 }}>
          <h1 className="h2">Venue not found</h1>
          <Link className="btn btnPrimary" href="/venues">Back to Venues</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card" style={{ marginTop: 18 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          <Link href="/venues" className="footerLink">← Back to venues</Link>
        </div>

        <h1 className="h1" style={{ fontSize: 30 }}>{venue.name}</h1>
        <div className="muted">{venue.city}, {venue.state}</div>

        <div className="tagRow">
          <span className="pill">Capacity {venue.capacity}</span>
          <span className="pill">From ${venue.priceFrom}</span>
          {(venue.tags || []).map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        <p className="muted" style={{ marginTop: 14 }}>{venue.description}</p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <a
            className="btn btnPrimary"
            href={`mailto:info@hallsnalls.com?subject=Inquiry%20for%20${encodeURIComponent(
              venue.name
            )}`}
          >
            Email Inquiry
          </a>
          <a className="btn" href={venue.website} target="_blank" rel="noreferrer">
            Visit Website
          </a>
          <div className="btn" style={{ cursor: "default" }}>
            {venue.phone}
          </div>
        </div>
      </div>
    </div>
  );
}
