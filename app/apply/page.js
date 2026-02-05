import { site } from "@/lib/site";

export const metadata = {
  title: "List Your Venue — Halls’n’All"
};

export default function ApplyPage() {
  return (
    <div className="container">
      <div className="card" style={{ marginTop: 18 }}>
        <h1 className="h1" style={{ fontSize: 28, marginBottom: 8 }}>List Your Venue</h1>
        <p className="muted" style={{ marginTop: 0 }}>
          Vendor onboarding (simple starter form). We’ll upgrade this to a full dashboard later.
        </p>

        <form className="formRow" method="POST" action={site.formspreeAction}>
          <input type="hidden" name="_subject" value="New Vendor Application - Halls’n’All" />
          <input type="hidden" name="type" value="vendor_apply" />
          <input type="hidden" name="_redirect" value="https://hallsnall.com/thanks" />

          <input className="input" name="name" placeholder="Your name" required />
          <input className="input" name="venueName" placeholder="Venue name" required />
          <input className="input" name="city" placeholder="City" required />
          <input className="input" name="state" placeholder="State (e.g., TX)" required />
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" name="phone" placeholder="Phone (optional)" />

          <button className="btn btnPrimary" type="submit">Submit Application</button>
        </form>

        <div className="fine">
          Questions? Email{" "}
          <a className="footerLink" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </div>
      </div>
    </div>
  );
}
