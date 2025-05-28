import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'Elizabeth Treimanis Events - Wedding Coordination and Planning',
  description:
    'Expert wedding and event planning and coordinating services, creating unforgettable moments for your special day.',
  publisher: 'Elizabeth Treimanis Events',
  creator: 'Joshua Grossman',
  keywords: [
    'wedding planning',
    'event coordination',
    'wedding coordinator',
    'wedding planner',
    'wedding services',
    'event planning',
    'wedding',
    'wedding events',
    'wedding coordination',
  ],

  openGraph: {
    images: [
      {
        url: '/websiteContent/image1.png',
        height: 630,
        width: 1200,
        alt: 'Bride getting ready with mother and sister',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${raleway.className} font-raleway`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
