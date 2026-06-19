import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MIARBITRO } from "@/data/cv";

const SITE_URL = "https://alexperezalvarez.dev";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Alex Pérez Álvarez",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/profile.jpg`,
      jobTitle: "Backend Engineer",
      description:
        "Desarrollador Backend especializado en Java, Spring Boot y arquitectura de microservicios, con 5 años en entornos enterprise.",
      knowsAbout: [
        "Java",
        "Spring Boot",
        "Microservices Architecture",
        "Backend Development",
        "REST APIs",
        "Kafka",
        "Kubernetes",
        "PostgreSQL",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sevilla",
        addressCountry: "ES",
      },
      sameAs: [
        "https://github.com/Alhxe",
        "https://www.linkedin.com/in/alex-perez-alvarez0",
        "https://miarbitro.es",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Alex Pérez Álvarez — Backend Engineer",
      inLanguage: "es",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://miarbitro.es/#app",
      name: "MiArbitro",
      url: MIARBITRO.url,
      applicationCategory: "SportsApplication",
      operatingSystem: "Android, iOS, Web",
      description: MIARBITRO.description,
      author: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexperezalvarez.dev"),
  title: "Alex Pérez Álvarez — Desarrollador Backend",
  description:
    "Desarrollador Backend especializado en Java, Spring Boot y arquitectura de microservicios. 5 años en entornos enterprise.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alex Pérez Álvarez — Desarrollador Backend",
    description:
      "Backend Engineer · Java · Spring Boot · Microservicios. 5 años en entornos enterprise.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
