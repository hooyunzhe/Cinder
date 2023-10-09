import type { Metadata } from 'next';
import { MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: '42KL Wildcard Hackathon',
  description: 'The worst possible UX design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body style={{ margin: '0px', overflow: 'hidden' }}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
