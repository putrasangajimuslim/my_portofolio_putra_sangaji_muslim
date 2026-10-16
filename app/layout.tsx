import './globals.css';
import React from 'react';

export const metadata = {
  title: 'My Portofolio Putra Sangaji Muslim',
  description: 'Portofolio interaktif Putra Sangaji Muslim',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth bg-[#0a0a0a]">
      <body className="bg-[#0a0a0a] text-white antialiased selection:bg-white selection:text-black overflow-x-hidden m-0 p-0">
        <main className="min-h-screen bg-[#0a0a0a] w-full m-0 p-0">
          {children}
        </main>
      </body>
    </html>
  );
}