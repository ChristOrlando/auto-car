import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { dmSans } from "@/font/font";

export const metadata: Metadata = {
  title: "Auto Sur Car",
  description:
    "Sécurisez vos véhicules avec nos bandes réfléchissantes de haute qualité, accessoires de sécurité routière pour les entreprises de transport.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
