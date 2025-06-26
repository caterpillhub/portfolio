
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-portfolio-silver">Hello, I'm</span>
            <br />
            <span className="text-portfolio-blue">Your Name</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-portfolio-silver/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Creative Developer & Designer crafting digital experiences with passion
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.button 
              className="px-8 py-3 bg-portfolio-blue text-white rounded-lg hover:bg-portfolio-blue/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button 
              className="px-8 py-3 border border-portfolio-silver text-portfolio-silver rounded-lg hover:bg-portfolio-silver hover:text-portfolio-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-portfolio-silver/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
