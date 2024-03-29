import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ['300' ,'400','500','600','700']
});

export const metadata: Metadata = {
  title: "Portifólio - Juliano Santos",
  description: "O meu portifólio dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
