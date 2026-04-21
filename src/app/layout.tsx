import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zahra Dental Clinic & Implant Centre | Best Dental Implants in Ahmedabad | Dr. Abbas Noorani",
  description: "Dr. Mohammad Abbas Noorani - Certified Implantologist with 14+ years experience. 1,800+ dental implants, 11,000+ patients. Globally trusted across 15+ countries. Implants from ₹18,000 (Root) to ₹40,000 (Straumann). Book: (+91) 9638787144",
  keywords: "dental implants Ahmedabad, implant centre Gujarat, Dr. Abbas Noorani, Certified Implantologist, Dental Implants, Zahra Dental Clinic, Ahmedabad Dentist, affordable implants, dental tourism India, basal implants, smile design veneers",
  authors: [{ name: "Dr. Mohammad Abbas Noorani" }],
  creator: "Zahra Dental Clinic & Implant Centre",
  publisher: "Zahra Dental Clinic & Implant Centre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ezahradental.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Zahra Dental Clinic & Implant Centre | Best Dental Implants in Ahmedabad",
    description: "Dr. Mohammad Abbas Noorani - Certified Implantologist with 14+ years experience. 1,800+ implants, 11,000+ patients. Globally trusted dental implants in Ahmedabad — Root from ₹18,000, Straumann from ₹40,000.",
    url: 'https://ezahradental.com/',
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
    description: "Trusted by 11,000+ patients from 15+ countries. 1,800+ implants placed. Root implants from ₹18,000, Straumann from ₹40,000 in Ahmedabad by Certified Implantologist.",
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
