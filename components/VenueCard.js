export default function VenueCard({ venue }) {
  return (
    <div className="card">
      <h3>{venue.name}</h3>

      <p><strong>City:</strong> {venue.city}</p>
      <p><strong>Event Type:</strong> {venue.type}</p>
      <p><strong>Capacity:</strong> {venue.capacity}</p>

      <a className="btn" href="/apply">
        Request Info
      </a>
    </div>
  );
}
