// Importa a tipagem de metadados do Next.js para configurar SEO e informações da página.
import type { Metadata } from "next";
// Importa as fontes Geist para tipografia consistente em todo o site.
import { Geist, Geist_Mono } from "next/font/google";
// Importa os estilos globais compartilhados entre todas as páginas.
import "./globals.css";

// Configura a fonte sans-serif principal com suporte a caracteres latinos.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configura a fonte monoespaçada utilizada em possíveis trechos técnicos ou códigos.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define as informações de metadados exibidas nos motores de busca e abas do navegador.
export const metadata: Metadata = {
  title: "Nicholas Focke | Portfólio",
  description:
    "Portfólio de Nicholas Focke destacando experiências e projetos em desenvolvimento web moderno.",
};

// Componente raiz que engloba toda a aplicação Next.js.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Define o idioma principal do documento como português do Brasil.
    <html lang="pt-BR">
      {/* Aplica as variáveis de fonte e suavização de texto ao corpo inteiro. */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Renderiza o conteúdo específico de cada página dentro do layout padrão. */}
        {children}
      </body>
    </html>
  );
}
