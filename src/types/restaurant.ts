export type Restaurant = {
  name: string;
  tagline: string;
  description: string;

  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };

  location: {
    address: string;
    city: string;
    country: string;
  };

  social: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
};