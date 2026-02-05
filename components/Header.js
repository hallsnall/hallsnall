import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container headerRow">
        <Link className="brand" href="/">
          Halls<span className="brandMark">’n’</span>All
        </Link>

        <nav className="nav">
          <Link href="/venues">Venues</Link>
          <Link href="/apply">List Your Venue</Link>
          <a className="btn btnPrimary" href="#early-access">
            Join Early Access
          </a>
        </nav>
      </div>
    </header>
  );
}
