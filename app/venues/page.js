import { venues } from "@/lib/venues";
import VenueFiltersClient from "@/components/VenueFiltersClient";

export const metadata = {
  title: "Browse Venues — Halls’n’All",
};

export default function VenuesPage() {
  return (
    <div className="container">
      <div className="sectionTitle">
        <h1 className="h1" style={{ fontSize: 28, margin: 0 }}>
          Browse Venues
        </h1>
        <div className="muted">Search and filter sample listings</div>
      </div>

      <VenueFiltersClient venues={venues} />
    </div>
  );
}
