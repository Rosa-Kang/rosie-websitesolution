'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-brown-900/10"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between md:relative md:justify-center p-4 md:p-6 w-full min-h-[60px]">
          {/* Mobile: Left side title, Desktop: Center title */}
          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <Link href="/">
              <motion.button
                className="elegant-serif text-xl md:text-2xl text-brown-900 tracking-wider cursor-pointer hover:text-brown-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Therosessom .
              </motion.button>
            </Link>
          </div>
          
          {/* Right button - always on the right */}
          <div className='md:ml-auto'>
            <Link href="/contact">
              <motion.button
                className="bg-brown-900 text-cream px-3 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-base font-semibold hover:bg-brown-800 transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}