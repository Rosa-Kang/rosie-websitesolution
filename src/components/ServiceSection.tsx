'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'  // Next.js Image 컴포넌트 import
import { Service } from '@/data/services'

interface ServiceSectionProps extends Service {
  onInquire: () => void
}

export default function ServiceSection({ 
  title, 
  description, 
  features, 
  price, 
  included,
  notIncluded,
  imagePosition, 
  imageAlt,
  imageSrc,  // 새로 추가
  onInquire 
}: ServiceSectionProps) {
  const [includedOpen, setIncludedOpen] = useState(false)
  const [notIncludedOpen, setNotIncludedOpen] = useState(false)

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Text Content - 이전과 동일 */}
          <motion.div 
            initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${imagePosition === 'right' ? 'lg:col-start-2' : ''}`}
          >
            {/* 이전 텍스트 콘텐츠와 동일한 내용 */}
            <div className="mb-6">
              <h3 className="elegant-serif text-3xl lg:text-4xl text-brown-900 mb-4">
                {title}
              </h3>
              <p className="text-brown-700 text-lg leading-relaxed mb-6">
                {description}
              </p>
            </div>

            <div className="mb-8">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold-500 mr-3 mt-1">•</span>
                    <span className="text-brown-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <span className="elegant-serif text-2xl text-brown-900">{price}</span>
                <button 
                  onClick={onInquire}
                  className="btn-primary"
                >
                  Inquire
                </button>
              </div>

              {/* 아코디언 섹션들 - 이전과 동일 */}
              <div className="space-y-4">
                {/* INCLUDED Accordion */}
                <div className="border-b border-brown-200">
                  <button
                    onClick={() => setIncludedOpen(!includedOpen)}
                    className="w-full flex items-center justify-between py-3 text-left hover:text-brown-600 transition-colors"
                  >
                    <span className="text-sm font-medium tracking-wider uppercase text-brown-800">
                      Included
                    </span>
                    <motion.span 
                      animate={{ rotate: includedOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-brown-600 text-lg font-light"
                    >
                      +
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {includedOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4">
                          <ul className="space-y-2">
                            {included.map((item, index) => (
                              <li key={index} className="flex items-start text-sm text-brown-700">
                                <span className="text-green-600 mr-2 mt-1">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* NOT INCLUDED Accordion */}
                <div className="border-b border-brown-200">
                  <button
                    onClick={() => setNotIncludedOpen(!notIncludedOpen)}
                    className="w-full flex items-center justify-between py-3 text-left hover:text-brown-600 transition-colors"
                  >
                    <span className="text-sm font-medium tracking-wider uppercase text-brown-800">
                      Not Included
                    </span>
                    <motion.span 
                      animate={{ rotate: notIncludedOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-brown-600 text-lg font-light"
                    >
                      +
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {notIncludedOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4">
                          <ul className="space-y-2">
                            {notIncluded.map((item, index) => (
                              <li key={index} className="flex items-start text-sm text-brown-700">
                                <span className="text-red-500 mr-2 mt-1">✕</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image - 업데이트된 부분 */}
          <motion.div 
            initial={{ opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${imagePosition === 'right' ? 'lg:col-start-1' : ''}`}
          >
            <div className="aspect-[4/5] bg-cream-dark rounded-lg overflow-hidden relative">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}