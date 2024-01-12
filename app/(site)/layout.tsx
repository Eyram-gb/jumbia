import '../globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-50`}>
        <nav className='flex justify-between px-20 py-4 w-full border-b'>
          <h2>Jumbia</h2>
          <div className='w-1/2 rounded-full border-2 border-gray-300 py-2 flex gap-x-2 items-center pr-4'>
            <input type="text" className='w-full bg-transparent border-r-2 border-gray-300 appearance-none outline-none px-3 text-sm' placeholder='Search product...' />
            <button><img src="https://s2.svgbox.net/octicons.svg?ic=search&color=000" width="20" height="20"/></button>
          </div>
          <div>
            <button className='flex gap-x-1 items-center'>
              <img src="https://s2.svgbox.net/hero-outline.svg?ic=shopping-cart&color=000" width="32" height="32"/>
              <span>Cart</span>
            </button>
          </div>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  )
}