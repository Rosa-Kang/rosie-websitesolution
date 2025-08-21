'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServiceSection from '@/components/ServiceSection'
import { services } from '@/data/services'
import Footer from '@/components/Footer'

export default function Home() {
  const router = useRouter()

  const handleInquire = () => {
    router.push('/contact')
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {services.map((service, index) => (
        <ServiceSection
          key={index}
          {...service}
          onInquire={handleInquire}
        />
      ))}
      
      <Footer />
    </main>
  )
}