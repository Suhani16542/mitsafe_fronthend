import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/lib/lenis-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModalProvider } from "@/context/ModalContext";
import JsonLd from "@/components/JsonLd";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/jsonld";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mitsafe.com"),
  title: {
    default: "Mitsafe | Premium Software Development & AI Automation Agency",
    template: "%s | Mitsafe",
  },
  description:
    "Mitsafe designs futuristic enterprise web platforms, custom AI automation agents, high-speed mobile apps, and robust cloud configurations.",
  verification: {
    google: "pbTZ9uLufR3LNaQ5CiNjfX0PBQHZaTGMXjQkJuecIqg",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      style={{
        ["--font-inter" as any]: "var(--font-inter), 'Inter', sans-serif",
        ["--font-manrope" as any]: "var(--font-inter), 'Inter', sans-serif",
        ["--font-outfit" as any]: "var(--font-inter), 'Inter', sans-serif",
        ["--font-space-grotesk" as any]: "var(--font-inter), 'Inter', sans-serif",
      }}
    >
      <head>
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
      <body className={`${inter.className} bg-background text-foreground font-sans antialiased selection:bg-[#00D4FF]/20 selection:text-white`}>
        <GoogleAnalytics />
        <JsonLd data={[generateOrganizationSchema(), generateWebSiteSchema()]} />
        <ThemeProvider>
          <ModalProvider>
            <LenisProvider>
              <div className="flex flex-col min-h-screen relative w-full max-w-[100vw]">
                <ParticleBackground />
                <Navbar />
                <main className="flex-grow w-full max-w-full">{children}</main>
                <Footer />
              </div>
            </LenisProvider>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
