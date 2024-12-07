import "@/styles/global.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";
import { DarkModeProvider } from "@/context/DarkModeContext";

export const metadata = {
  title: "Mark-kus",
  description:
    "My personal portfolio, directory of projects, hall of fame, where you can get to know me and my history.",
  keywords: ["portfolio", "full-stack", "front-end", "back-end", "developer"],

  creator: "Mark-kus",
  generator: "Next.js",
};

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const isDarkCookie = cookieStore.get("theme")
  const isDarkMode = isDarkCookie === undefined || isDarkCookie.value === "dark";

  return (
    <DarkModeProvider initialDarkMode={isDarkMode}>
      <html lang="en" className={isDarkMode ? "dark" : ""} suppressHydrationWarning>
        <body className={roboto.className}>
          {children}

          <Analytics />
        </body>
      </html>
    </DarkModeProvider>
  );
}
