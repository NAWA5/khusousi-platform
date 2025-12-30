'use client';
import './styles/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Khusousi - منصة خاصة (Prototype)',
  description: 'Prototype redesign inspired by shroo7.com',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
