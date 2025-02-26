import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'Elizabeth Treimanis Events - Wedding and Event Planning',
  description:
    'Expert wedding and event planning services by Elizabeth Treimanis. Creating unforgettable moments for your special day.',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${raleway.variable} font-sans`}>{children}</body>
    </html>
  );
}
