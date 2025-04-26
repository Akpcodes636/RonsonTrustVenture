import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add any needed weights
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Ronson Trust Ventures",
    template: "%s | Ronson Trust Ventures"
  },
  description: "Buy Genuine Manitowoc Spare Parts from a trusted, reliable dealer. Fast shipping, guaranteed authenticity, and expert support for all your Manitowoc equipment needs.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${openSans.variable} antialiased hide-scroll`}>
        {children}
      </body>
    </html>
  );
}