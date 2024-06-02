import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre | DEV',
  description: 'Em Desenvolvimento...',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
