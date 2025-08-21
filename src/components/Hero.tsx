'use client'

import { motion } from 'framer-motion'

const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(" ");

  // Ultra-smooth container variants with slower timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Much slower stagger for smoother flow
        delayChildren: 0.5, // Longer initial delay for anticipation
      },
    },
  };

  // Silky-smooth word variants with extended duration
  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 60, // Slightly more movement for smoother effect
      scale: 0.7, // More pronounced scale for smoother transition
      filter: "blur(12px)", // Stronger blur for smoother focus transition
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2, // Much slower duration for smoothness
        ease: [0.25, 0.1, 0.25, 1], // Ultra-smooth cubic-bezier
        staggerChildren: 0.04, // Slower character reveal
      },
    },
  };

  // Buttery-smooth character variants with gentle spring
  const charVariants = {
    hidden: { 
      opacity: 0,
      y: 30, // More vertical movement
      rotateX: -90, // 3D rotation effect
      scale: 0.2, // More scale change for smoother transition
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8, // Much slower character animation
        ease: [0.34, 1.56, 0.64, 1], // Gentle, smooth easing
        type: "spring",
        stiffness: 60, // Lower stiffness for smoother spring
        damping: 20, // Higher damping for less bounce
      },
    },
  };

  return (
    <motion.div
      style={{ 
        display: "inline-block", 
        textAlign: "center",
        perspective: "1000px", // Enable 3D transforms
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={wordVariants}
          style={{ 
            display: "inline-block", 
            whiteSpace: "nowrap", 
            marginRight: "0.5em",
            transformOrigin: "center bottom", // Better transform origin
          }}
          whileHover={{
            scale: 1.02, // More subtle hover effect
            transition: { duration: 0.4, ease: "easeOut" } // Slower hover transition
          }}
        >
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              variants={charVariants}
              key={charIndex}
              style={{ 
                display: "inline-block",
                transformOrigin: "center bottom",
              }}
              whileHover={{
                y: -1, // More subtle character lift on hover
                transition: { duration: 0.3, ease: "easeOut" } // Slower character hover
              }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Enhanced Hero component with background animations
export default function Hero() {
  // Ultra-smooth background animation variants
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2, // Much slower fade-in
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Ultra-smooth animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.03 }}
        transition={{ duration: 3.5, ease: "easeOut" }} // Much slower background animation
        style={{
          background: "radial-gradient(circle at 30% 70%, rgba(139, 111, 78, 0.1) 0%, transparent 50%)",
        }}
      />
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }} // Slower, smoother transition
          >
            <h1 className="elegant-serif text-4xl lg:text-6xl text-brown-900 leading-tight mb-8">
              <AnimatedText text="We create strategically built websites for your brands who are ready to flourish." />
            </h1>
          </motion.div>
          
          {/* Ultra-smooth additional animated elements */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1, // Slower duration
              delay: 4, // Much later delay for smoother sequence
              type: "spring",
              stiffness: 80, // Lower stiffness for smoother spring
              damping: 25 // Higher damping for less bounce
            }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-brown-300 to-brown-600 rounded-full" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}