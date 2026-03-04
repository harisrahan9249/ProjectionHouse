'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: 'ease-out-back' })

    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          data-aos="zoom-in"
          data-aos-delay="100"
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
