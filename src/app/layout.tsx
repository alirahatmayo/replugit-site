import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Frame from '@/components/layout/Frame'
import { JsonLd } from '@/components/json-ld'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_SIZE } from '@/lib/metadata'

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const DEFAULT_TITLE = "Replugit - The Company Behind reCore"
const DEFAULT_DESCRIPTION =
  "Replugit builds reCore, the ITAD platform for hardware diagnostics, certified data erasure, cosmetic grading and compliance reporting. Our own refurbishing, QC, data wiping and wholesale electronics services run on it every day."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "electronics refurbishment",
    "ITAD",
    "IT asset disposition",
    "reCore",
    "data wiping",
    "wholesale electronics",
    "device grading",
    "environmental sustainability",
  ],
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, ...DEFAULT_OG_IMAGE_SIZE, alt: DEFAULT_TITLE }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WEW6WCYJ8P"
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Replugit",
            url: "https://www.replugit.com",
            email: "hello@replugit.com",
            telephone: "+1-548-503-5000",
            sameAs: ["https://linkedin.com/company/replugit", "https://recore.replugit.com"],
            brand: {
              "@type": "Brand",
              name: "reCore",
              url: "https://recore.replugit.com",
              description: "ITAD software for data wiping, hardware diagnostics and cosmetic grading",
            },
          }}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WEW6WCYJ8P');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-accent selection:text-accent-foreground`}>
        <Frame />
        <Navigation />
        <div className="pt-18">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
