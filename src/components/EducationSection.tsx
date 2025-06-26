
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export const EducationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "University Name",
      year: "2022 - 2024",
      description: "Specialized in AI and Machine Learning with focus on web technologies"
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "College Name",
      year: "2018 - 2022",
      description: "Foundation in software engineering and web development"
    }
  ]

  const achievements = [
    "Dean's List - 4 semesters",
    "Best Project Award 2023",
    "Hackathon Winner",
    "Published Research Paper"
  ]

  return (
    <section id="education" className="min-h-screen py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-portfolio-blue mb-4">Education & Achievements</h2>
          <div className="w-24 h-1 bg-portfolio-silver mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold text-portfolio-silver mb-8">Education</h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-portfolio-silver/5 p-6 rounded-lg border border-portfolio-silver/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  whileHover={{ scale: 1.02, borderColor: '#0818A8' }}
                >
                  <h4 className="text-xl font-semibold text-portfolio-blue">{edu.degree}</h4>
                  <p className="text-portfolio-silver/80">{edu.institution}</p>
                  <p className="text-portfolio-silver/60">{edu.year}</p>
                  <p className="mt-2 text-portfolio-silver/80">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-semibold text-portfolio-silver mb-8">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full flex-shrink-0"></div>
                  <p className="text-portfolio-silver">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
