import ToggleTheme from '@/components/app/ToggleTheme/ToggleTheme';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | DEV',
  description: 'Em Desenvolvimento...',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="bg-purple-black-2 flex justify-center">
      <ToggleTheme></ToggleTheme>
      {children}
    </body>
  );
}
