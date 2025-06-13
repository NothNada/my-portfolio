import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Rubens | Desenvolvedor Full Stack',
  description: 'Rubens, desenvolvedor especializado em aplicações web modernas com React, Next.js, e tecnologias de ponta.',
  keywords: 'portfólio, desenvolvedor web, front-end, back-end, full stack, React, Next.js, programador',
  authors: [{ name: 'Rubens', url: 'https://rubens-fullstack.vercel.app/' }],
  openGraph: {
    title: 'Rubens | Desenvolvedor Full Stack',
    description: 'Confira meus projetos, experiências e stack atual de desenvolvimento.',
    url: 'https://rubens-fullstack.vercel.app/',
    siteName: 'Portfolio | Rubens',
    images: [
      {
        url: 'https://rubens-fullstack.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Imagem do portfólio de Rubens',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rubens | Desenvolvedor Full Stack',
    description: 'Veja meu portfólio com projetos e tecnologias modernas.',
    images: ['https://rubens-fullstack.vercel.app//og-image.png'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
