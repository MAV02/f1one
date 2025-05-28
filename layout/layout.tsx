// import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ONEF1 – F1 Strategy Live Tracker',
  description: 'Live Formula 1 alerts, strategy analysis, track map, and session updates.',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="icon" href="/faceicon.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className={`${inter.className} bg-black text-white`}>
        <main className="min-h-screen w-full overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
