import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function RootLayout({ children }) {
  const metadata = {
    title: 'Nacho the 𐤊at KRC20 Meme Coin',
    description: 'Nacho the 𐤊at KRC20 Meme Coin',
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <div className="top-bar">
          <div className="logo-container">
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <Image src="/kaspa_logo_nacho.png" alt="Nacho the 𐤊at Logo" width={40} height={40} />
            </Link>
          </div>
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
  );
}
