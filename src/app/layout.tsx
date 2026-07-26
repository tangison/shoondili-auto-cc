import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
    default: 'Shoondili Auto CC | Vehicle Sourcing & Sales, Walvis Bay, Namibia',
    template: '%s | Shoondili Auto CC',
  },
  description: 'Vehicle sourcing and sales from Walvis Bay, Namibia. Japanese imports, local inventory, and finance guidance. Shoondili Auto CC finds the vehicle you need.',
  keywords: ['Shoondili Auto', 'vehicles Namibia', 'Japanese imports', 'Walvis Bay cars', 'car sales Namibia', 'vehicle sourcing', 'finance guidance'],
  authors: [{ name: 'Shoondili Auto CC' }],
  icons: {
    icon: '/brand/favicon.svg',
  },
  openGraph: {
    title: 'Shoondili Auto CC | Vehicle Sourcing & Sales',
    description: 'Vehicle sourcing and sales from Walvis Bay, Namibia. Japanese imports, local inventory, and finance guidance.',
    url: 'https://shoondili.com',
    siteName: 'Shoondili Auto CC',
    type: 'website',
    locale: 'en_NA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shoondili Auto CC | Vehicle Sourcing & Sales',
    description: 'Vehicle sourcing and sales from Walvis Bay, Namibia.',
  },
  metadataBase: new URL('https://shoondili.com'),
  alternates: {
    canonical: 'https://shoondili.com',
  },
};

function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoDealer'],
    name: 'Shoondili Auto CC',
    description: 'Vehicle sourcing and sales from Walvis Bay, Namibia. Japanese imports, local inventory, and finance guidance.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased bg-background text-foreground`}
        style={{ backgroundColor: '#090909', color: '#F7F7F4' }}
      >
        <JsonLd />
        <div className="min-h-screen flex flex-col relative">
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
