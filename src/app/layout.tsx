import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zahra Dental Clinic & Implant Centre | Best Dental Implants in Ahmedabad | Dr. Abbas Noorani",
  description: "Dr. Mohammad Abbas Noorani - Implantologist with 14+ years experience. 11,000+ happy patients. Dental implants starting at Rs.18,000. Book appointment: +91 9277756167",
  keywords: "dental implants Ahmedabad, implant centre Gujarat, Dr. Abbas Noorani, Implantologist, Dental Implants, Zahra Dental Clinic, Ahmedabad Dentist, affordable implants",
  authors: [{ name: "Dr. Mohammad Abbas Noorani" }],
  creator: "Zahra Dental Clinic & Implant Centre",
  publisher: "Zahra Dental Clinic & Implant Centre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zahradentalclinic.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Zahra Dental Clinic & Implant Centre | Best Dental Implants in Ahmedabad",
    description: "Dr. Mohammad Abbas Noorani - Implantologist with 14+ years experience. 11,000+ happy patients. Affordable dental implants in Ahmedabad.",
    url: 'https://zahradentalclinic.com/',
    siteName: "Zahra Dental Clinic & Implant Centre",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Zahra Dental Clinic & Implant Centre",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zahra Dental Clinic & Implant Centre",
    description: "Trusted by 11,000+ patients. 600+ 5-star Google reviews. Dental implants starting at Rs.18,000 in Ahmedabad.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
