import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  title: "Halls’n’All — Find Event Halls & Venues Across the U.S.",
  description:
    "Halls’n’All helps you discover and compare event halls, banquet venues, and party spaces across the U.S. Join early access as we launch city by city.",
  metadataBase: new URL(`https://${site.domain}`),
  openGraph: {
    title: "Halls’n’All — Find Event Halls & Venues Across the U.S.",
    description:
      "Discover and compare event halls, banquet venues, and party spaces. Join early access.",
    url: `https://${site.domain}`,
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
