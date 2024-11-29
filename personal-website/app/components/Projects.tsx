"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Projects() {
  const projects = [
    {
      title: "Researcher Project",
      organization: "University of Electronic Science and Technology of China",
      period: "05/26/2023–09/26/2023",
      description: [
        "Leveraged Python and machine vision techniques for 2TB video data",
        "Developed algorithm to address dropped frames in YOLOv8",
        "Implemented confidence-based overlay method using CUDA"
      ],
      technologies: ["Python", "YOLOv8", "CUDA", "Computer Vision"]
    },
    {
      title: "Fabflix Web Application",
      organization: "University of California, Irvine",
      period: "01/10/2024–04/30/2024",
      description: [
        "Developed full-stack movie browsing and shopping website",
        "Deployed RESTful API using AWS and Tomcat servers",
        "Engineered efficient XML parser for 40,000+ entries"
      ],
      technologies: ["Java", "MySQL", "AWS", "XML"]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.organization}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {project.period}
                    </p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {project.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">{tech}</Badge>
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

