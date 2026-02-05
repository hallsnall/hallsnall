import Link from "next/link";
import EarlyAccessForm from "@/components/EarlyAccessForm";

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="h1">Find & Compare Event Halls Across the U.S.</h1>
        <p className="muted">
          Browse venues by city, capacity, and event type. Connect with halls and book with confidence.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
          <Link className="btn btnPrimary" href="/venues">Browse Venues</Link>
          <Link className="btn" href="/apply">List Your Venue</Link>
        </div>
      </section>

      <div className="grid2">
        <div className="card">
          <div className="sectionTitle">
            <h2 className="h2" style={{ margin: 0 }}>How Halls’n’All works</h2>
          </div>

          <div className="kpis">
            <div className="kpi">
              <div className="pill">1) Discover</div>
              <div style={{ marginTop: 8 }} className="muted">
                Browse venues by state, city, capacity, and event type.
              </div>
            </div>
            <div className="kpi">
              <div className="pill">2) Compare</div>
              <div style={{ marginTop: 8 }} className="muted">
                See key details clearly: amenities, policies, photos, and contact options.
              </div>
            </div>
            <div className="kpi">
              <div className="pill">3) Connect</div>
              <div style={{ marginTop: 8 }} className="muted">
                Send an inquiry or request a quote. Vendors receive qualified leads.
              </div>
            </div>
          </div>

          <div className="kpi" style={{ marginTop: 10 }}>
            <div className="pill">4) Book smarter</div>
            <div style={{ marginTop: 8 }} className="muted">
              Reduce back-and-forth and help you book confidently.
            </div>
          </div>
        </div>

        <EarlyAccessForm />
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <div className="muted" style={{ fontWeight: 800, marginBottom: 8 }}>
          SEO keywords
        </div>
        <div className="muted" style={{ fontSize: 13 }}>
          Event halls in the United States • banquet venues • party halls • wedding venues • corporate event spaces • venue directory • halls for rent • event space marketplace
        </div>
      </div>
    </div>
  );
}
