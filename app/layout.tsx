import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { GTMScript } from '@/components/gtm-script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Incredibox Abgerny - Create Amazing Beats!',
  description: 'Create unique beats by dragging quirky characters into the mix. Join millions of players in this musical adventure!',
  keywords: ['Incredibox Abgerny', 'music game', 'beat maker', 'rhythm game', 'musical adventure'],
  openGraph: {
    title: 'Incredibox Abgerny - Create Amazing Beats!',
    description: 'Create unique beats by dragging quirky characters into the mix. Join millions of players in this musical adventure!',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Incredibox Abgerny - Create Amazing Beats!',
    description: 'Create unique beats by dragging quirky characters into the mix. Join millions of players in this musical adventure!',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <GTMScript />
      </body>
    </html>
  );
}