import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Vortex Bank | DEV',
  description: 'Em Desenvolvimento...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-purple-black-2 flex justify-center">
        {children}
      </body>
    </html>
  );
}
