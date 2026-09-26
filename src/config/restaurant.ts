export const restaurant = {
  name: "LAVÉRA",

  tagline: "Modern African dining, reimagined for today.",

  description:
    "Contemporary African cuisine, thoughtful hospitality, and an atmosphere designed for memorable evenings.",

  location: {
    address: "14 Victoria Island",
    city: "Lagos, Nigeria",
  },

  contact: {
    phone: "+234 800 000 0000",
    email: "hello@lavera.com",
  },

  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },

  hours: [
    {
      days: "Monday — Thursday",
      hours: "12:00 — 22:00",
    },
    {
      days: "Friday — Saturday",
      hours: "12:00 — 23:30",
    },
    {
      days: "Sunday",
      hours: "13:00 — 21:00",
    },
  ],

  reservation: {
    phone: "+234 800 000 0000",
  },

  seo: {
  titleSuffix: "Contemporary African Dining",
  description:
    "A modern dining experience inspired by the richness and creativity of African cuisine.",
},

} as const;