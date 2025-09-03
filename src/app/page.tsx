'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import dynamic from 'next/dynamic'
import { services } from '@/data/services'
import Footer from '@/components/Footer'

const DynamicServiceSection = dynamic(() => import('@/components/ServiceSection'), { ssr: false })
const DynamicHero = dynamic(() => import('@/components/Hero'), { ssr: false })

export default function Home() {
  const router = useRouter()

  const handleInquire = () => {
    router.push('/contact')
  }

  return (
    <main className="min-h-screen">
      <Header />
      <DynamicHero />
      
      {services.map((service, index) => (
        <DynamicServiceSection
          key={index}
          {...service}
          onInquire={handleInquire}
        />
      ))}
      
      <Footer />
    </main>
  )
}