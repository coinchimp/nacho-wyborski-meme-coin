// src/app/layout.js
import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'Nacho Wyborski KRC20 Meme Coin',
  description: 'Nacho Wyborski KRC20 Meme Coin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/kaspa_logo_nacho.ico" />
        <title>Nacho Wyborski KRC20 Meme Coin</title>
        <meta name="description" content="Nacho Wyborski KRC20 Meme Coin" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}
