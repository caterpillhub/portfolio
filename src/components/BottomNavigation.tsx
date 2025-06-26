
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, GraduationCap, Zap, FolderOpen, Mail } from 'lucide-react'

export const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail }
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
          if (scrollY >= offsetTop - 200 && scrollY < offsetTop + offsetHeight - 200) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-portfolio-dark/90 backdrop-blur-md border border-portfolio-silver/20 rounded-full px-4 py-3 shadow-2xl">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative p-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'text-portfolio-blue' 
                    : 'text-portfolio-silver/60 hover:text-portfolio-silver'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
                
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-portfolio-blue/20 rounded-full border border-portfolio-blue/40"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-portfolio-blue rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: isActive ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            )
          })}
        </div>
        
        {/* Progress indicator */}
        <div className="absolute -top-1 left-0 right-0 h-0.5 bg-portfolio-silver/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-portfolio-blue rounded-full"
            initial={{ width: '20%' }}
            animate={{ 
              width: activeSection === 'hero' ? '20%' : 
                     activeSection === 'education' ? '40%' : 
                     activeSection === 'skills' ? '60%' : 
                     activeSection === 'projects' ? '80%' : '100%'
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  )
}
