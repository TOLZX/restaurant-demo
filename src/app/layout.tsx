import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/config/restaurant";
import { theme } from "@/config/theme";
import type { CSSProperties } from "react";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${restaurant.name} — ${restaurant.seo.titleSuffix}`,
  description: restaurant.seo.description,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={
          {
            "--background": theme.colors.background,
            "--surface": theme.colors.surface,
            "--foreground": theme.colors.foreground,
            "--muted": theme.colors.muted,
            "--accent": theme.colors.accent,
            "--border": theme.colors.border,
          } as CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//   style={{
//     "--background": theme.colors.background,
//     "--surface": theme.colors.surface,
//     "--foreground": theme.colors.foreground,
//     "--muted": theme.colors.muted,
//     "--accent": theme.colors.accent,
//     "--border": theme.colors.border,
//   } as React.CSSProperties}
// >
//   {children}
// </body>
//     </html>
//   );
// }