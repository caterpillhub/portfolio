
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x250/0818A8/C0C0C0?text=Project+1"
    },
    {
      title: "AI Dashboard",
      description: "Data visualization dashboard with machine learning insights",
      tech: ["Python", "React", "TensorFlow", "D3.js"],
      image: "https://via.placeholder.com/400x250/C0C0C0/0818A8?text=Project+2"
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application for productivity",
      tech: ["React Native", "Firebase", "Redux"],
      image: "https://via.placeholder.com/400x250/0818A8/C0C0C0?text=Project+3"
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-portfolio-blue mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-portfolio-silver mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-portfolio-silver/5 rounded-xl overflow-hidden border border-portfolio-silver/20 group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, borderColor: '#0818A8' }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-portfolio-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-blue mb-2">
                  {project.title}
                </h3>
                <p className="text-portfolio-silver/80 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-portfolio-blue/20 text-portfolio-silver text-sm rounded-full border border-portfolio-blue/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.button 
                  className="w-full py-2 bg-portfolio-blue text-white rounded-lg hover:bg-portfolio-blue/80 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
