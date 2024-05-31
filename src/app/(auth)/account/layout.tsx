import ToggleTheme from '@/components/app/ToggleTheme/ToggleTheme';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account | DEV',
  description: 'Em desenvolvimento',
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
