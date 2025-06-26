
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="min-h-screen py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-portfolio-blue mb-4">Contact & Collaboration</h2>
          <div className="w-24 h-1 bg-portfolio-silver mx-auto mb-6"></div>
          <p className="text-xl text-portfolio-silver/80 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-portfolio-silver mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-portfolio-silver/5 border border-portfolio-silver/20 rounded-lg text-portfolio-silver placeholder-portfolio-silver/60 focus:border-portfolio-blue focus:outline-none transition-colors"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-portfolio-silver/5 border border-portfolio-silver/20 rounded-lg text-portfolio-silver placeholder-portfolio-silver/60 focus:border-portfolio-blue focus:outline-none transition-colors"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-portfolio-silver/5 border border-portfolio-silver/20 rounded-lg text-portfolio-silver placeholder-portfolio-silver/60 focus:border-portfolio-blue focus:outline-none transition-colors resize-none"
                  required
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full py-3 bg-portfolio-blue text-white rounded-lg hover:bg-portfolio-blue/80 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-portfolio-silver mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full"></div>
                  <span className="text-portfolio-silver">email@example.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full"></div>
                  <span className="text-portfolio-silver">+1 (555) 123-4567</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full"></div>
                  <span className="text-portfolio-silver">linkedin.com/in/yourname</span>
                </motion.div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-portfolio-blue mb-4">Available For</h4>
              <div className="space-y-2">
                {['Freelance Projects', 'Full-time Opportunities', 'Consulting', 'Collaboration'].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-portfolio-silver rounded-full"></div>
                    <span className="text-portfolio-silver/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
