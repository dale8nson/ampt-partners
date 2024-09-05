import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/Components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AP | Ampt Partners",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0">
      <body className='relative z-0 bg-gray-900 min-h-screen w-screen p-0 m-0'>
        <div className="flex-col relative">
          <Nav />
          <main className="relative z-[-100] flex min-h-screen w-screen p-0 flex-col m-0 items-center justify-between align-middle bg-gray-900" >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
