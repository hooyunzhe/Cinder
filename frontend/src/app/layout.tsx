import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Cinder',
  description: 'Match Made in Hell',
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
