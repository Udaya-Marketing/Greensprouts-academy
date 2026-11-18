import type { Metadata } from "next";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("https://greensproutsacademy.com"),
  title: {
    default: "Green Sprouts Academy – Seed to Success | Online Courses Across India",
    template: "%s | Green Sprouts Academy",
  },
  description:
    "Grow Your Future with Us. Seed to Success. 100% online live training in Hydroponics, Aquaponics, Mushroom Cultivation, Microgreens & Saffron. Starting at just ₹999. Certificate included.",
  keywords: [
    "Seed to Success",
    "Hydroponics training India",
    "Microgreens business course",
    "Mushroom cultivation online training",
    "Aquaponics India",
    "Indoor saffron CEA farming",
    "Urban agriculture training",
    "Agripreneurship courses India",
    "Green Sprouts Academy",
    "Soilless farming India",
  ],
  authors: [{ name: "Green Sprouts Academy Agronomist Team" }],
  creator: "Green Sprouts Academy",
  publisher: "Green Sprouts Academy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://greensproutsacademy.com",
    title: "Green Sprouts Academy – Seed to Success",
    description:
      "Grow Your Future with Us. Expert-led training in Hydroponics, Aquaponics, Mushroom Cultivation, Microgreens, Saffron & more. Starting at ₹999.",
    siteName: "Green Sprouts Academy",
    images: [
      {
        url: "/assets/logo-cropped.png",
        width: 825,
        height: 450,
        alt: "Green Sprouts Academy – Seed to Success Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Sprouts Academy – Seed to Success",
    description:
      "Expert-led live training in Hydroponics, Aquaponics, Mushrooms, Microgreens & Saffron. Starting at ₹999.",
    images: ["/assets/logo-cropped.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.subline,
    url: "https://greensproutsacademy.com",
    logo: "https://greensproutsacademy.com/assets/logo-cropped.png",
    priceRange: "₹999 - ₹4999",
    sameAs: [
      SITE_CONFIG.contact.socials.instagram,
      SITE_CONFIG.contact.socials.youtube,
      SITE_CONFIG.contact.socials.linkedin,
    ],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "999",
      highPrice: "4999",
      priceCurrency: "INR",
      offerCount: "5",
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* DNS + connection preconnects for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload Google Fonts stylesheet early to eliminate render-blocking */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=Schibsted+Grotesk:wght@400;500;600&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=Schibsted+Grotesk:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Preload hero poster — largest above-fold image, fetch early */}
        <link
          rel="preload"
          href="/assets/hero-poster.jpg"
          as="image"
          type="image/jpeg"
        />

        {/* Preload local display font so headings render without FOUT */}
        <link
          rel="preload"
          href="/assets/fonts/Stumblebum-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
