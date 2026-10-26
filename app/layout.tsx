import type { Metadata, Viewport } from "next";
import { Geist, Great_Vibes, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Actionpackd — Agents & bots",
  description:
    "Actionpackd builds AI agents and bots for businesses. WhatsApp agents, reminders, shops, bookings, and more.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${greatVibes.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
