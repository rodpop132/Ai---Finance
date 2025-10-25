import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight"
});

export const metadata: Metadata = {
  title: "+1.000 Receitas de Amor",
  description:
    "Rituais, desafios e conversas profundas para reacender o relacionamento em até 10 minutos por dia."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={clsx(
          "gradient-bg min-h-screen bg-background text-text",
          inter.variable,
          interTight.variable,
          "font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
