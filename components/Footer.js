import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footerRow">
        <div>
          <div className="footerTitle">Contact</div>
          <a className="footerLink" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>
        </div>

        <div className="muted">© {year} Halls’n’All</div>
      </div>
    </footer>
  );
}
