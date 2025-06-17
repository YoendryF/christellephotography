import '../styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'Christelle',
  description: 'Professional portfolio and business website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
