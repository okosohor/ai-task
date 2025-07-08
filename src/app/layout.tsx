import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const geistInter = Inter({
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'AI Text Paraphraser by JustDone',
  description: 'Transform your writing from good to great with our Paraphraser tool.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={` ${geistInter.className} antialiased px-[164px] min-h-screen py-8 flex justify-center items-center mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
