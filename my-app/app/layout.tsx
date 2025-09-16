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
  title: "Samin Intisar - Full-Stack Developer & Data Analyst",
  description: "Experienced Full-Stack Developer and Data Analyst specializing in React, Next.js, Python, and Machine Learning. View projects including lead generation apps, AI assistants, and data analytics dashboards.",
  keywords: ["Full-Stack Developer", "Data Analyst", "React", "Next.js", "Python", "Machine Learning", "Web Development", "Data Analytics", "Portfolio"],
  authors: [{ name: "Samin Intisar" }],
  creator: "Samin Intisar",
  publisher: "Samin Intisar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://samin-intisar-portfolio-7mlij.ondigitalocean.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Samin Intisar - Full-Stack Developer & Data Analyst",
    description: "Experienced Full-Stack Developer and Data Analyst specializing in React, Next.js, Python, and Machine Learning. View projects including lead generation apps, AI assistants, and data analytics dashboards.",
    url: "https://samin-intisar-portfolio-7mlij.ondigitalocean.app",
    siteName: "Samin Intisar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samin Intisar - Full-Stack Developer & Data Analyst",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samin Intisar - Full-Stack Developer & Data Analyst",
    description: "Experienced Full-Stack Developer and Data Analyst specializing in React, Next.js, Python, and Machine Learning.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Samin Intisar",
              "jobTitle": ["Full-Stack Developer", "Data Analyst"],
              "description": "Experienced Full-Stack Developer and Data Analyst specializing in React, Next.js, Python, and Machine Learning",
              "url": "https://samin-intisar-portfolio-7mlij.ondigitalocean.app",
              "sameAs": [
                "https://github.com/samintisar",
                "https://linkedin.com/in/samin-intisar"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "Python",
                "JavaScript",
                "TypeScript",
                "Machine Learning",
                "Data Analytics",
                "Web Development",
                "Full-Stack Development"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full-Stack Developer",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "Remote"
                },
                "skills": ["React", "Next.js", "Python", "JavaScript", "TypeScript", "Node.js", "SQL"]
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Educational Institution"
              }
            })
          }}
        />
      </head>
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
