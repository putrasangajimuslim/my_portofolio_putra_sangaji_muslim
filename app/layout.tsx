import './globals.css';
import Navbar from '@/app/components/Navbar';
import Container from '@/app/components/Container';
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
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-white antialiased selection:bg-white selection:text-black overflow-x-hidden">
        <Navbar />
        
        {/* Main Wrapper untuk Lebar Responsif */}
        <main className="min-h-screen">
          <Container>
            {children}
          </Container>
        </main>
      </body>
    </html>
  );
}