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
  title: "Samin Intisar - AI Engineer",
  description: "AI Engineer specializing in RAG pipelines, LangGraph agents, and production LLM applications. View projects including SolomindLM, voice agents, and applied machine learning.",
  keywords: ["AI Engineer", "LangChain", "LangGraph", "RAG", "Python", "TypeScript", "Machine Learning", "LLM", "Portfolio"],
  authors: [{ name: "Samin Intisar" }],
  creator: "Samin Intisar",
  publisher: "Samin Intisar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://samintisar.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Samin Intisar - AI Engineer",
    description: "AI Engineer specializing in RAG pipelines, LangGraph agents, and production LLM applications. View projects including SolomindLM, voice agents, and applied machine learning.",
    url: "https://samintisar.vercel.app",
    siteName: "Samin Intisar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samin Intisar - AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samin Intisar - AI Engineer",
    description: "AI Engineer specializing in RAG pipelines, LangGraph agents, and production LLM applications.",
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
              "jobTitle": ["AI Engineer"],
              "description": "AI Engineer specializing in RAG pipelines, LangGraph agents, and production LLM applications",
              "url": "https://samintisar.vercel.app",
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
                "RAG",
                "LangGraph",
                "LangChain",
                "LLM Applications"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "AI Engineer",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "Remote"
                },
                "skills": ["Python", "TypeScript", "LangChain", "LangGraph", "RAG", "PyTorch", "Convex"]
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
