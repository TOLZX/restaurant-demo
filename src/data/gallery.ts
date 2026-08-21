export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  label?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85",
    alt: "Elegant restaurant dining room",
    label: "The Dining Room",
  },
  {
    id: "gallery-2",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    alt: "Restaurant interior",
    label: "The Atmosphere",
  },
  {
    id: "gallery-3",
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=85",
    alt: "Guests enjoying dinner",
    label: "The Evening",
  },
];