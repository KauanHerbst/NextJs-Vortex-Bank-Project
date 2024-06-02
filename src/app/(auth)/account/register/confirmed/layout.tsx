import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register Confirmed | DEV',
  description: 'Em desenvolvimento',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
