import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { TopBar } from '@/src/components/layout/TopBar';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans', 
  display: 'swap',
  preload: true,           // ✅ NEW
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif', 
  display: 'swap',
  preload: true,           // ✅ NEW
});

export const metadata: Metadata = {
  title: 'Darul Qurra Peshawar',
  description: "A respected Islamic institute focused on Quran education, Tajweed, and Qira'at since 1969.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* ✅ NEW: Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ✅ NEW: Preconnect to Unsplash if you use their images */}
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* ✅ NEW: DNS prefetch for faster external connections */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <TopBar />
        <Header />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

