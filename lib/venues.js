export const venues = [
  {
    slug: "grand-oak-banquet-hall",
    name: "Grand Oak Banquet Hall",
    city: "Houston",
    state: "TX",
    capacity: 250,
    priceFrom: 1800,
    tags: ["Wedding", "Birthday", "Corporate"],
    description:
      "Elegant banquet hall with flexible floor plan, on-site parking, and preferred vendor list.",
    phone: "(555) 123-4567",
    website: "https://example.com"
  },
  {
    slug: "skyline-event-loft",
    name: "Skyline Event Loft",
    city: "Atlanta",
    state: "GA",
    capacity: 120,
    priceFrom: 1200,
    tags: ["Party", "Bridal Shower", "Networking"],
    description:
      "Modern loft with skyline views, AV-ready setup, and weekend packages.",
    phone: "(555) 222-1111",
    website: "https://example.com"
  },
  {
    slug: "garden-courtyard-venue",
    name: "Garden Courtyard Venue",
    city: "Phoenix",
    state: "AZ",
    capacity: 180,
    priceFrom: 1500,
    tags: ["Outdoor", "Cultural Celebration", "Receptions"],
    description:
      "Indoor/outdoor courtyard with lighting options, prep kitchen, and ceremony space.",
    phone: "(555) 777-9090",
    website: "https://example.com"
  }
];

export function getVenueBySlug(slug) {
  return venues.find((v) => v.slug === slug) || null;
}
