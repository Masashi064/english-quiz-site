import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/context/AuthContext';
import { ThemeProvider } from '@/context/ThemeContext';
import SiteHeader from '@/app/components/SiteHeader';
import Footer from '@/app/components/Footer';
import RouteChangeTracker from '@/app/components/RouteChangeTracker';

// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4VQMLEWL7N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4VQMLEWL7N');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}>
        <ThemeProvider>
          <AuthProvider>
            <RouteChangeTracker />
            <SiteHeader />
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SABACAN",
  description: "Learn English through fun quizzes — new content added daily on SABACAN!",
  icons: {
    icon: '/favicon-v2.ico',
  }
};

