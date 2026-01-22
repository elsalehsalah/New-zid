import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { GlassFilter } from '@/components/ui/liquid-glass';

// Codec Pro - Headers font (minimal weights)
const codecPro = localFont({
  src: [
    {
      path: '../public/fonts/Zetafonts - Codec Pro Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Zetafonts - Codec Pro Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Zetafonts - Codec Pro ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Zetafonts - Codec Pro Ultra.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-codec-pro',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

// SuisseIntl - Body font (regular only)
const suisseIntl = localFont({
  src: [
    {
      path: '../public/fonts/SuisseIntl-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-suisse',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata = {
  title: 'زد - إصدار شتاء 2026',
  description: 'اكتشف أحدث ميزات زد للتجارة الإلكترونية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${codecPro.variable} ${suisseIntl.variable}`}>
      <body className="bg-[#eeeeee] text-[#3c1c54] font-body overflow-x-hidden antialiased transition-colors duration-500">
        <ThemeProvider>
          <GlassFilter />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
