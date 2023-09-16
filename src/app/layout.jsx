import '@/styles/global.css'
import { Roboto } from 'next/font/google'

export const metadata = {
  title: "Mark-kus",
  description: "My personal portfolio, directory of projects, hall of fame, where you can get to know me and my history.",
  keywords: ["portfolio", "full-stack", "front-end", "back-end", "developer"],

  openGraph: {
    title: "Mark-kus",
    description: "My personal portfolio, directory of projects, hall of fame, where you can get to know me and my history.",
    images: [
      {
        url: "https://media.licdn.com/dms/image/D4E16AQFqH5W9rs1tAA/profile-displaybackgroundimage-shrink_350_1400/0/1675456435876?e=1696464000&v=beta&t=zijO_Cq5oWyxsFM8LX-z1xiyi2uKArQh8lBJcXmgb4A",
        width: 1400,
        height: 350
      }
    ],
    url: "https://mark-kus.vercel.app",
    type: "website",
  },

  creator: "Mark-kus",
  generator: "Next.js"
}

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
