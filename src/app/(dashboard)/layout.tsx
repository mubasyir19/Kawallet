import type { Metadata } from 'next';
import '../globals.css';
import Sidebar from '@/components/organism/Sidebar';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Kawallet',
  description: 'Dashboard for tracking investment',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex min-h-screen p-6`}>
        <Sidebar />
        <div className='flex flex-1 mt-5 flex-col pl-10'>
          <main className='flex-1'>{children}</main>
        </div>
      </body>
    </html>
  );
}
