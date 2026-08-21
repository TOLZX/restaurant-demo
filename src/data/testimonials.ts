export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "An unforgettable dining experience. Every detail felt intentional, from the atmosphere to the final course.",
    name: "Chiamaka O.",
    location: "Lagos",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote:
      "The food was exceptional and the atmosphere was even better. LAVÉRA has quickly become one of our favorite places.",
    name: "Daniel A.",
    location: "Abuja",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote:
      "Beautiful space, thoughtful service, and genuinely memorable food. Exactly what a modern restaurant should feel like.",
    name: "Amara N.",
    location: "Port Harcourt",
    rating: 5,
  },
];