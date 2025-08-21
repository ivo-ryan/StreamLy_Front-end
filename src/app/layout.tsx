import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.scss";



const montserrat = Montserrat({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onebitflix",
  description: "Tenha acesso aos melhores conteúdos de programação!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className} `}>
        {children}
      </body>
    </html>
  );
}
