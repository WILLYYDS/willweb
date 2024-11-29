"use client"

import { motion } from 'framer-motion'
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
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium text-center"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

