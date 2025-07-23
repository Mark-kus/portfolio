import "@/styles/global.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cookies } from "next/headers";
import { DarkModeProvider } from "@/context/DarkModeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/portfolio/Footer";
import { getDictionary, validateLanguage } from "@/lib/language";

const title = "Mark-kus | Portfolio";
const description =
  "Explore my projects, experience, and achievements. Welcome to my personal portfolio!";

export const metadata = {
  title,
  description,
  keywords: ["portfolio", "full-stack", "front-end", "back-end", "developer"],
  creator: "Mark-kus",
  generator: "Next.js",
  metadataBase: new URL("https://mark-kus.vercel.app"),
  openGraph: {
    title,
    description,
    url: "https://mark-kus.vercel.app",
    siteName: "Mark-kus",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mark-kus Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    images: ["/preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap", // Improve font loading performance
  preload: true,
});

export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const isDarkCookie = cookieStore.get("theme");
  const isDarkMode =
    isDarkCookie === undefined || isDarkCookie.value === "dark";

  // Ensure we only use supported languages
  const validLang = validateLanguage(lang);
  const dictionary = await getDictionary(validLang);

  return (
    <DarkModeProvider initialDarkMode={isDarkMode}>
      <html
        lang={validLang}
        className={isDarkMode ? "dark" : ""}
        suppressHydrationWarning
      >
        <head>
          {/* Preload critical resources */}
          <link rel="preload" href="/preview.jpg" as="image" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          
          {/* Optimize viewport for mobile */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
          
          {/* Theme color for mobile browsers */}
          <meta name="theme-color" content="#d97706" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#1e3a8a" media="(prefers-color-scheme: dark)" />
        </head>
        <body className={roboto.className}>
          <main className="bg-orange-200 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col justify-between transition-colors duration-500 min-h-screen">
            <Navigation lang={validLang} dictionary={dictionary.navigation} />

            {children}
          </main>

          <Footer dictionary={dictionary.footer} />
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </DarkModeProvider>
  );
}
