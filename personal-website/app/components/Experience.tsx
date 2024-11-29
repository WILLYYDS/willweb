"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Engineer, Intern",
      company: "Gotchoo Inc",
      location: "Los Angeles, CA",
      period: "03/20/2024–06/20/2024",
      points: [
        "Developed a one-click gift-giving feature using ReactJS, HTMX, AWS",
        "Championed user privacy with an innovative SaaS-based framework",
        "Deployed AWS cloud services and integrated Stripe",
        "Optimized the online gift-giving process, boosting sales by 25%"
      ],
      skills: ["ReactJS", "AWS", "Stripe", "Node.js"]
    },
    {
      title: "Full Stack Engineer, Intern",
      company: "Vision X, LLC",
      location: "San Jose, CA",
      period: "6/30/2023–8/30/2023",
      points: [
        "Designed and implemented a full-stack web application",
        "Contributed to AI-powered content generation algorithm",
        "Created reusable ReactJS component library",
        "Implemented RESTful web services in Python"
      ],
      skills: ["Python", "ReactJS", "MySQL", "AI"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground">
                          {exp.company} | {exp.location}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">{skill}</Badge>
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

