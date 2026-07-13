import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/lib/lenis-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Mitsafe | Premium Software Development & AI Automation Agency",
    template: "%s | Mitsafe",
  },
  description:
    "Mitsafe designs futuristic enterprise web platforms, custom AI automation agents, high-speed mobile apps, and robust cloud configurations.",
  metadataBase: new URL("https://mitsafe.com"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Mitsafe | Enterprise Software & AI Automation",
    description:
      "Immersive futuristic web platforms and scalable AI integrations built for high-performance operations.",
    url: "https://mitsafe.com",
    siteName: "Mitsafe",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitsafe | Enterprise Software & AI Automation",
    description:
      "Immersive futuristic web platforms and scalable AI integrations built for high-performance operations.",
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
      className="scroll-smooth"
      suppressHydrationWarning
      style={{
        ["--font-outfit" as any]: "'Outfit', system-ui, -apple-system, sans-serif",
        ["--font-space-grotesk" as any]: "'Space Grotesk', system-ui, -apple-system, sans-serif",
      }}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f=satoshi@300,400,500,700,900&f=clash-display@600,700&display=swap"
          rel="stylesheet"
        />
        {/* Inline script to prevent theme flash before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = saved || 'dark';
                  document.documentElement.className = theme === 'light' ? 'light scroll-smooth' : 'dark scroll-smooth';
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-[#00D4FF]/20 selection:text-white">
        <ThemeProvider>
          <LenisProvider>
            <div className="flex flex-col min-h-screen relative w-full">
              <ParticleBackground />
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

