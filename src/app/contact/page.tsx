
'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const DynamicContactForm = dynamic(() => import('@/components/ContactForm'))

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <DynamicContactForm />
      <Footer />
    </main>
  )
}
