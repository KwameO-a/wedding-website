import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jesse & Katherine — October 15 & 17, 2026 | Wedding",
  description:
    "Join us in celebrating the wedding of Jesse and Katherine on October 15 & 17, 2026 in Kumasi, Ghana.",
  openGraph: {
    title: "Jesse & Katherine — Wedding",
    description:
      "Together with their families, Jesse and Katherine invite you to celebrate their wedding on October 15 & 17, 2026 in Kumasi, Ghana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${playfair.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
