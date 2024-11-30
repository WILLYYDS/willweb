"use client"

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "Javascript", "HTML", "CSS"]
    },
    {
      title: "Databases and Tools",
      skills: ["MySQL", "MongoDB", "PyTorch", "Numpy", "OpenCV", "Git", "Docker", "Redis", "Kubernetes", "GPT API", "Midjourney", "AWS"]
    },
    {
      title: "Frameworks",
      skills: ["Django", "PyTorch", "TensorFlow", "OpenCV", "CUDA", "Spring Boot", "ReactJS", "YOLO", "RAFT"]
    },
    {
      title: "Interests",
      skills: ["Drawing", "Watching Anime", "Gaming", "Working Out", "Skiing", "Rock Climbing"]
    }
  ]

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Interests
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8" ref={ref}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                    variants={{
                      visible: { transition: { staggerChildren: 0.1 } }
                    }}
                  >
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium text-center cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

