import type { Metadata } from "next";
import { DM_Serif_Display, IBM_Plex_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Nicholas Focke | Portfolio",
  description:
    "Portfolio de Nicholas Focke com foco em desenvolvimento backend, arquitetura de APIs e projetos web modernos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} ${ibmPlexMono.variable} ${dmSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

