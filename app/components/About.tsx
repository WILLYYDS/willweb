import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Laptop, Brain, Dumbbell, Gamepad, Mountain, PenTool } from 'lucide-react'

export default function About() {
  const interests = [
    { icon: PenTool, text: "Drawing" },
    { icon: Gamepad, text: "Gaming" },
    { icon: Dumbbell, text: "Working Out" },
    { icon: Mountain, text: "Skiing" },
    { icon: Mountain, text: "Rock Climbing" },
  ]

  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Laptop className="mr-2" /> My Journey
                </h3>
                <p className="text-muted-foreground">
                  I'm a Computer Science student at the University of California, Irvine, specializing in Information. With a strong foundation in full-stack development and a passion for AI and machine learning, I'm constantly seeking new challenges and opportunities to grow in the tech industry.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Brain className="mr-2" /> Beyond Coding
                </h3>
                <p className="text-muted-foreground mb-4">
                  When I'm not immersed in code, you'll find me exploring various interests that keep me balanced and inspired.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <interest.icon className="h-8 w-8 mb-2 text-primary" />
                      <span className="text-sm">{interest.text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

