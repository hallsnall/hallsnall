export const VENUES = [
  {
    id: "1",
    slug: "grand-palace-hall",
    name: "Grand Palace Hall",
    city: "Houston",
    state: "TX",
    type: "Wedding",
    capacity: 300,
    description: "Elegant ballroom for weddings and formal events.",
    phone: "(555) 123-4567",
    website: "https://example.com"
  },
  {
    id: "2",
    slug: "skyline-ballroom",
    name: "Skyline Ballroom",
    city: "Dallas",
    state: "TX",
    type: "Birthday",
    capacity: 200,
    description: "Modern space with skyline views and flexible layouts.",
    phone: "(555) 222-3333",
    website: "https://example.com"
  },
  {
    id: "3",
    slug: "riverside-event-center",
    name: "Riverside Event Center",
    city: "Houston",
    state: "TX",
    type: "Corporate",
    capacity: 500,
    description: "Large venue for conferences, seminars, and mixers.",
    phone: "(555) 333-4444",
    website: "https://example.com"
  },
  {
    id: "4",
    slug: "garden-pavilion",
    name: "Garden Pavilion",
    city: "Atlanta",
    state: "GA",
    type: "Wedding",
    capacity: 180,
    description: "Indoor/outdoor vibes with garden-style ambience.",
    phone: "(555) 444-5555",
    website: "https://example.com"
  },
  {
    id: "5",
    slug: "downtown-loft",
    name: "Downtown Loft",
    city: "Chicago",
    state: "IL",
    type: "Baby Shower",
    capacity: 120,
    description: "Loft-style space perfect for intimate celebrations.",
    phone: "(555) 555-6666",
    website: "https://example.com"
  }
];

export function getVenueBySlug(slug) {
  return VENUES.find((v) => v.slug === slug) || null;
}