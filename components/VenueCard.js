import Link from "next/link";

export default function VenueCard({ v }) {
  return (
    <Link className="card cardLink" href={`/venues/${v.slug}`}>
      <div className="cardTop">
        <div className="pill">Capacity {v.capacity}</div>
        <div className="pill">From ${v.priceFrom}</div>
      </div>

      <h3 className="h3">{v.name}</h3>
      <div className="muted">
        {v.city}, {v.state}
      </div>

      <div className="tagRow">
        {(v.tags || []).slice(0, 3).map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
