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
  return <body className="bg-purple-black-2 flex justify-center">{children}</body>;
}
