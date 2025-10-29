import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AnimatedBackground from '@/components/layout/AnimatedBackground'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Replugit - Grade A Refurbished Electronics",
  description: "Transform Grade C electronics into Grade A revenue with complete tracking, quality assurance, and environmental impact reporting.",
  keywords: "electronics refurbishment, Grade A quality, environmental sustainability, device tracking, quality assurance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WEW6WCYJ8P"
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
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {/* Global animated background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <AnimatedBackground />
        </div>
        
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
