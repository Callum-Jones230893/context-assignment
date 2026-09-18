import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/Header"
import { UserContextProvider } from "@/context/UserContext"
import Image from "next/image"
import { AlignmentContextProvider } from "@/context/AlignmentContext"
import Footer from "@/components/Footer"

const planeswalker = localFont({
  src: [
    {
      path: "../../public/fonts/planewalker-font/Planewalker-38m6.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/planewalker-font/PlanewalkerBold-xZj5.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: '--font-planeswalker',
})


export const metadata: Metadata = {
  title: "My context assignment",
  description: "Demonstrating the use of context",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${planeswalker.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-(family-name:--font-planeswalker) text-custom-shadow">
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Image
            src="/images/backgroundimgb.jpg"
            alt="Background"
            fill
            priority
          />
        </div>
        <UserContextProvider>
          <AlignmentContextProvider>
            <Header />
            <div className="flex flex-col flex-1">
              {children}
            </div>
            <Footer />
          </AlignmentContextProvider>
        </UserContextProvider>
      </body>
    </html>
  )
}
