import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aastha Hospital | Advanced Medical Excellence",
  description: "Experience world-class medical care with state-of-the-art technology and a team of dedicated specialists putting your health first.",
  keywords: "hospital, medical center, healthcare, cardiology, neurology, orthopedics, best hospital",
  openGraph: {
    title: "Aastha Hospital | Advanced Medical Excellence",
    description: "Experience world-class medical care with state-of-the-art technology and a team of dedicated specialists putting your health first.",
    type: "website",
    locale: "en_US",
    siteName: "Aastha Hospital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aastha Hospital | Advanced Medical Excellence",
    description: "World-class medical care and dedicated specialists.",
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
              "@type": "Hospital",
              "name": "Aastha Hospital",
              "image": "https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=2000&auto=format&fit=crop",
              "@id": "",
              "url": "https://aasthahospital.example.com",
              "telephone": "+1234567890",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Health Avenue, Medical District",
                "addressLocality": "New York",
                "postalCode": "10001",
                "addressCountry": "US"
              },
              "department": [
                {
                  "@type": "MedicalOrganization",
                  "name": "Cardiology",
                  "telephone": "+1234567890"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased selection:bg-primary selection:text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
