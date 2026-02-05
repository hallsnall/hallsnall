import Link from "next/link";

export const metadata = {
  title: "Thanks — Halls’n’All"
};

export default function ThanksPage() {
  return (
    <div className="container">
      <div className="card" style={{ marginTop: 20 }}>
        <h1 className="h1" style={{ fontSize: 28, marginBottom: 8 }}>You’re in ✅</h1>
        <p className="muted" style={{ marginTop: 0 }}>
          Thanks for joining early access. We’ll email you when we launch in your city.
        </p>
        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link className="btn btnPrimary" href="/">Back to Home</Link>
          <Link className="btn" href="/venues">Browse Venues</Link>
        </div>
      </div>
    </div>
  );
}
