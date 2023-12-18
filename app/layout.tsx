import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>A Next.js project to learn the framework</title>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
