import type { Metadata } from "next";

import "./globals.css";

import { Roboto_Slab } from "next/font/google";
import Footer from "@/Components/Footer/Footer";
import { Nav } from "@/Components/Nav/nav";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Music DB",
  description: "New Project",
};

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={roboto.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
