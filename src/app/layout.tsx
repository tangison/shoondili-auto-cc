import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ThemeProvider } from "@/components/theme-provider";
import { GrainOverlay } from "@/components/grain-overlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: 'Shoondili Auto CC | Japanese Vehicle Sourcing & Import Service, Walvis Bay, Namibia',
    template: '%s | Shoondili Auto CC',
  },
  description: 'Japanese vehicle sourcing and import service from Walvis Bay, Namibia. Shoondili searches, sources, ships, and assists with clearance and registration. Written quotation before commitment.',
  keywords: ['Shoondili Auto', 'vehicles Namibia', 'Japanese imports', 'Walvis Bay cars', 'vehicle sourcing Namibia', 'Japanese vehicle sourcing', 'car import Namibia', 'order car from Japan', 'vehicle sourcing service'],
  authors: [{ name: 'Shoondili Auto CC' }],
  icons: {
    icon: '/brand/favicon.svg',
  },
  openGraph: {
    title: 'Shoondili Auto CC | Japanese Vehicle Sourcing',
    description: 'Japanese vehicle sourcing and import service from Walvis Bay, Namibia. Order a vehicle from Japan. Written quotation before commitment.',
    url: 'https://shoondili.com',
    siteName: 'Shoondili Auto CC',
    type: 'website',
    locale: 'en_NA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shoondili Auto CC | Japanese Vehicle Sourcing',
    description: 'Japanese vehicle sourcing and import service from Walvis Bay, Namibia.',
  },
  metadataBase: new URL('https://shoondili.com'),
  alternates: {
    canonical: 'https://shoondili.com',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0B0E0E' },
    { media: '(prefers-color-scheme: light)', color: '#F1EDE4' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness'],
    name: 'Shoondili Auto CC',
    description: 'Japanese vehicle sourcing and import service from Walvis Bay, Namibia. We search, source, ship, and assist with clearance and registration.',
    telephone: '081 248 6557',
    email: 'shoondiliconsultant7@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Walvis Bay',
      addressCountry: 'NA',
    },
    url: 'https://shoondili.com',
    areaServed: {
      '@type': 'Country',
      name: 'Namibia',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}

/* ─── Theme flash prevention script ─── */
function ThemeScript() {
  const script = `
    (function() {
      try {
        var theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.style.backgroundColor = '#0B0E0E';
          document.documentElement.style.color = '#F4F0E7';
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
          document.documentElement.style.backgroundColor = '#F1EDE4';
          document.documentElement.style.color = '#151919';
        }
      } catch(e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased`}
      >
        <ThemeProvider>
          <JsonLd />
          <a href="#main-content" className="skip-to-content">Skip to main content</a>
          <GrainOverlay />
          <div className="min-h-screen flex flex-col relative bg-background text-foreground">
            <Header />
            {/* Spacer for fixed header */}
            <div style={{ height: '88px' }} className="hidden lg:block" />
            <div style={{ height: '72px' }} className="lg:hidden" />
            <main id="main-content" className="flex-1 relative z-10" tabIndex={-1}>{children}</main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
