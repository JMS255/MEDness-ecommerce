import type { Metadata } from "next";
import { Inter, Playfair_Display, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { StickyOrderCTA } from "@/components/StickyOrderCTA";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["900"],
  style: ["normal"],
});

// TODO: Update SITE_URL to your real domain before going live
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://medness.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MEDness Co. — Wear Your Calling",
  description:
    "Niche clothing brand for Filipino medical and allied health students in Zamboanga City. Represent your course identity.",
  openGraph: {
    title: "MEDness Co. — Wear Your Calling",
    description:
      "Clothing made for Filipino med and allied health students who are proud of what they're becoming.",
    url: SITE_URL,
    siteName: "MEDness Co.",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEDness Co. — Wear Your Calling",
    description:
      "Clothing made for Filipino med and allied health students who are proud of what they're becoming.",
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
      className={`${inter.variable} ${playfair.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-navy">
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <StickyOrderCTA />
          <CartDrawer />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
