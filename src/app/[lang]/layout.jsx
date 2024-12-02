import "@/styles/global.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

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
  return (
    <html lang="en" className="dark">
      <body className={roboto.className}>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
