"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Jiayun Wang
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full Stack Engineer & Computer Science Student
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button variant="default" asChild>
                <a href="mailto:willwang240@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/WILLYYDS" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/jiayunwang/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto md:w-96 md:h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1361732868456_.pic_hd.jpg-4HYZGHGqaIkykd6dnn7hgOjjDi2AEO.jpeg"
                alt="Jiayun Wang"
                fill
                className="object-cover rounded-full border-4 border-primary/20"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

