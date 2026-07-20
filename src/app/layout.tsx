import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raanjhana Events | Premium Event Management",
  description: "A world-class, premium event management company offering luxury, emotional, and modern event experiences including weddings, corporate events, and more.",
  keywords: "event management, luxury weddings, premium events, corporate events, Raanjhana Events, destination weddings",
  openGraph: {
    title: "Raanjhana Events | Premium Event Management",
    description: "A world-class, premium event management company offering luxury, emotional, and modern event experiences.",
    type: "website",
    locale: "en_US",
    siteName: "Raanjhana Events",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raanjhana Events | Premium Event Management",
    description: "Luxury and emotional event management services.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventOrganization",
              "name": "Raanjhana Events",
              "description": "Premium luxury event management company specializing in weddings, corporate events, and celebrations.",
              "url": "https://raanjhanaevents.example.com",
              "telephone": "+1234567890",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Luxury Avenue",
                "addressLocality": "Metropolis",
                "postalCode": "10001",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased selection:bg-primary selection:text-white`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
