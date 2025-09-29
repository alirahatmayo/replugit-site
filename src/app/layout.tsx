import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
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
