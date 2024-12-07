import "@/styles/global.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";
import { DarkModeProvider } from "@/context/DarkModeContext";

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
};

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const isDarkCookie = cookieStore.get("theme");
  const isDarkMode =
    isDarkCookie === undefined || isDarkCookie.value === "dark";

  return (
    <DarkModeProvider initialDarkMode={isDarkMode}>
      <html
        lang="en"
        className={isDarkMode ? "dark" : ""}
        suppressHydrationWarning
      >
        <body className={roboto.className}>
          {children}

          <Analytics />
        </body>
      </html>
    </DarkModeProvider>
  );
}
