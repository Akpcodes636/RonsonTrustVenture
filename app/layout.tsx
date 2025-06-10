  import { Inter, Open_Sans } from "next/font/google";
  import "./globals.css";
  import { Metadata } from "next";
  import { Toaster } from 'sonner';

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
    keywords: [
      "Manitowoc spare parts",
      "Genuine Manitowoc parts",
      "Original Manitowoc equipment parts",
      "Buy Manitowoc parts online",
      "Trusted Manitowoc parts supplier",
      "Ronson Trust Ventures",
      "Manitowoc crane replacement parts",
      "Heavy equipment parts supplier",
      "Fast shipping Manitowoc parts",
      "Authentic Manitowoc components",
      "Manitowoc parts dealer Nigeria",
      "Reliable Manitowoc parts distributor",
      "Industrial crane parts supplier",
      "Manitowoc equipment parts expert support",
      "Order Manitowoc parts online",
      "Affordable Manitowoc spare parts",
      "OEM Manitowoc parts",
      "Best Manitowoc parts seller",
      "Manitowoc crane spare parts",
      "Ronson Manitowoc parts supplier"
    ],
    icons: {
      icon: "/favicon.ico",
      shortcut: "image/favicon-32x32.png",
      apple: "image/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" suppressHydrationWarning={true}>
        <body className={`${inter.variable} ${openSans.variable} antialiased hide-scroll`}>
        <Toaster richColors position="top-center" />
          {children}
        </body>
      </html>
    );
  }