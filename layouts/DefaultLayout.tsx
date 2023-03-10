import Head from "next/head"
import { LayoutProps } from "./Layout.types"

export const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  let now = new Date()
  const getCurrentYear = now.getFullYear()

  return (
    <>
      <Head>
        <title>Card Game</title>
        <meta name="description" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header></header>
        <main>{children}</main>
        <footer className="mt-20">
          <p className="text-gray-600 sm:text-center text-xs">
            © {getCurrentYear} Card Game
          </p>
        </footer>
      </div>
    </>
  )
}
