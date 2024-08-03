import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/Provider";
import { Appbar } from "@/components/Appbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job-Quest: place to find your dream job",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Appbar/>
        {children}
        </Provider>
        </body>
    </html>
  );
}
