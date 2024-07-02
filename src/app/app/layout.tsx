import Footer from '@/components/app/Footer/Footer';
import Header from '@/components/app/Header/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'App | Vortex Bank',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-purple-black-2">
        <Header></Header>
        <main className="h-[84vh] max-md:h-[130vh]">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
