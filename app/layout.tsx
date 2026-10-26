import type { Metadata, Viewport } from "next";
import { Alex_Brush, Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alex-brush",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
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
      className={`${geist.variable} ${alexBrush.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
