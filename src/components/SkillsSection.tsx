
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-portfolio-blue mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-portfolio-silver mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-portfolio-silver/5 p-8 rounded-xl border border-portfolio-silver/20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              whileHover={{ scale: 1.02, borderColor: '#0818A8' }}
            >
              <h3 className="text-2xl font-semibold text-portfolio-blue mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-portfolio-silver font-medium">{skill.name}</span>
                      <span className="text-portfolio-silver/60">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-portfolio-silver/20 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-portfolio-blue to-portfolio-silver h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Creative Skill Visualization */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <h3 className="text-3xl font-semibold text-portfolio-silver mb-8">Interactive Skill Cloud</h3>
          <div className="relative h-64 flex items-center justify-center">
            {['JavaScript', 'React', 'TypeScript', 'Python', 'Node.js', 'Design', 'MongoDB'].map((skill, index) => (
              <motion.div
                key={skill}
                className="absolute bg-portfolio-blue/20 text-portfolio-silver px-4 py-2 rounded-full border border-portfolio-blue"
                style={{
                  left: `${20 + (index * 10)}%`,
                  top: `${30 + Math.sin(index) * 20}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                whileHover={{ scale: 1.2, backgroundColor: '#0818A8' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
