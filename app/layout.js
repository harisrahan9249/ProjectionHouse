import { Jost } from 'next/font/google'
import './globals.css'
import ScrollToTop from './components/ScrollToTop' // Make sure path is correct

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'projection house | ',
  description: 'projection house',
    icons: {
    // icon: "/glansa/GLANSA LOGO pr.png", // Or use 'favicon.ico' if you have one
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
