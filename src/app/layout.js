// src/app/layout.js
import './globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'Nacho the 𐤊at KRC20 Meme Coin',
  description: 'Nacho the 𐤊at KRC20 Meme Coin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nacho the 𐤊at KRC20 Meme Coin</title>
        <meta name="description" content="Nacho the 𐤊at KRC20 Meme Coin" />
      </head>
      <body>
        <div className="top-bar">
          <Image src="/kaspa_logo_nacho.png" alt="Nacho the 𐤊at Logo" width={40} height={40} />
          <div className="icon-container">
            <a href="https://discord.gg/f3pUgRFx" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/discord.png" alt="Discord" width={30} height={30} />
            </a>
            <a href="https://t.me/nachothecat" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/telegram.png" alt="Telegram" width={30} height={30} />
            </a>
            <a href="https://x.com/NachoWyborski" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/twitter.png" alt="X" width={30} height={30} />
            </a>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
