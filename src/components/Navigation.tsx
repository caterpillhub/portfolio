
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollY = window.scrollY

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-portfolio-dark/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-xl font-bold text-portfolio-blue"
            whileHover={{ scale: 1.05 }}
          >
            K
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 transition-colors ${
                  activeSection === item.id 
                    ? 'text-portfolio-blue' 
                    : 'text-portfolio-silver hover:text-portfolio-blue'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-portfolio-blue"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
