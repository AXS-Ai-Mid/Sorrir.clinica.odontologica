import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { CookieConsent } from "@/components/cookie-consent";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/ui";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Clínica odontológica na Zona 2 | Sorrir em Maringá",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: "Clínica odontológica na Zona 2 | Sorrir em Maringá",
    description: site.description,
    url: site.url,
    images: [
      {
        url: "/images/hero-clinica.jpg",
        width: 1200,
        height: 630,
        alt: "Sala de atendimento da Sorrir Clínica Odontológica em Maringá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica odontológica na Zona 2 | Sorrir em Maringá",
    description: site.description,
    images: ["/images/hero-clinica.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0042aa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap"
        />
        <link rel="icon" href="/images/logo-sorrir.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-white text-ink antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer services={services} />
        <FloatingWhatsApp />
        <CookieConsent />
        <Analytics />
        <JsonLd data={[localBusinessSchema(), organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
