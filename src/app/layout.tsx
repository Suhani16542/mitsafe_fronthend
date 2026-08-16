import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/lib/lenis-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { ThemeProvider } from "@/components/ThemeProvider";

import JsonLd from "@/components/JsonLd";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL("https://mitsafe.com"),
  title: {
    default: "Mitsafe | Premium Software Development & AI Automation Agency",
    template: "%s | Mitsafe",
  },
  description:
    "Mitsafe designs futuristic enterprise web platforms, custom AI automation agents, high-speed mobile apps, and robust cloud configurations.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/icon.png" }],
  },
  openGraph: {
    title: "Mitsafe | Enterprise Software & AI Automation",
    description:
      "Immersive futuristic web platforms and scalable AI integrations built for high-performance operations.",
    url: "https://mitsafe.com",
    siteName: "Mitsafe",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Mitsafe | Enterprise Software & AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitsafe | Enterprise Software & AI Automation",
    description:
      "Immersive futuristic web platforms and scalable AI integrations built for high-performance operations.",
    images: ["/twitter-image.png"],
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

import { ModalProvider } from "@/context/ModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      style={{
        ["--font-inter" as any]: "'Inter', sans-serif",
        ["--font-manrope" as any]: "'Inter', sans-serif",
        ["--font-outfit" as any]: "'Inter', sans-serif",
        ["--font-space-grotesk" as any]: "'Inter', sans-serif",
      }}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Inline script to enforce light theme site-wide */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  localStorage.setItem('theme', 'light');
                  document.documentElement.className = 'light scroll-smooth';
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-[#00D4FF]/20 selection:text-white">
        <JsonLd data={[generateOrganizationSchema(), generateWebSiteSchema()]} />
        <ThemeProvider>
          <ModalProvider>
            <LenisProvider>
              <div className="flex flex-col min-h-screen relative w-full max-w-[100vw] overflow-x-clip">
                <ParticleBackground />
                <Navbar />
                <main className="flex-grow w-full max-w-full overflow-x-clip">{children}</main>
                <Footer />
              </div>
            </LenisProvider>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

