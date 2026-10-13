import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marco Tignanelli — Analista y desarrollador de soluciones orientadas al negocio",
    template: "%s | Marco Tignanelli",
  },
  description: "Ingeniero en Sistemas (UTN) y Full Stack Developer con experiencia en EPAM Systems, Vates Software. Especializado en Python/FastAPI, React/Next.js, arquitecturas serverless y automatización con IA.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Python",
    "FastAPI",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Cloudflare",
    "Supabase",
    "TDD",
    "Clean Architecture",
  ],
  authors: [{ name: "Marco Tignanelli" }],
  creator: "Marco Tignanelli",
  publisher: "Marco Tignanelli",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mark-kus.com",
    siteName: "Marco Tignanelli — Portfolio",
    title: "Marco Tignanelli — Analista y desarrollador de soluciones orientadas al negocio",
    description: "Ingeniero en Sistemas (UTN) y Full Stack Developer. Construyo soluciones end-to-end con foco en impacto de negocio.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marco Tignanelli — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Tignanelli — Portfolio",
    description: "Ingeniero en Sistemas (UTN) y Full Stack Developer. Python/FastAPI + React/Next.js.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "TODO: añadir código de verificación de Google Search Console",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}