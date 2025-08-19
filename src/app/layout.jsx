import "@/styles/global.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cookies } from "next/headers";
import { DarkModeProvider } from "@/context/DarkModeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
  metadataBase: new URL("https://mark-kus.com"),
  openGraph: {
    title,
    description,
    url: "https://mark-kus.com",
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
};

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
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
      <html lang={validLang} className={isDarkMode ? "dark" : ""}>
        <body className={roboto.className}>
          <main className="flex min-h-screen flex-col justify-between bg-orange-200 text-gray-900 transition-colors duration-500 dark:bg-gray-900 dark:text-white">
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
