import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/retroui/Footer";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samin Intisar Portfolio",
  description: "A retro-futuristic portfolio with cyberpunk aesthetics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${archivoBlack.variable} ${space.variable} antialiased`}>
        {/* Skip Navigation Links */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <a href="#footer" className="skip-link">
          Skip to footer
        </a>

        <div className="min-h-screen flex flex-col">
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
