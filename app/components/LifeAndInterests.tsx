"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function LifeAndInterests() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1471732869219_.pic.jpg-Qf56qNLNWxXV9QMPysSUfnC87KEoes.jpeg",
      alt: "Rock climbing at an indoor climbing gym",
      category: "Rock Climbing"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1451732869214_.pic_hd.jpg-Nqr9JnaT4mmqPugvIP095teUs8S1I8.jpeg",
      alt: "Rock climbing on a challenging route",
      category: "Rock Climbing"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1461732869218_.pic_hd.jpg-erGbemdBBlXUeAowccbodKhJGh18CI.jpeg",
      alt: "Enjoying the beach waves",
      category: "Beach"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1441732869204_.pic.jpg-QNumcgqRGCOAxas1tigz5qymmu6bkN.jpeg",
      alt: "Swimming in the pool",
      category: "Swimming"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1421732869201_.pic_hd.jpg-wOgbJTc7ZLWD1D1wy9WixGo49g7BX3.jpeg",
      alt: "With my pet guinea pig",
      category: "Pets"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1411732869199_.pic_hd.jpg-Q8Nnpi5t1s8NmTEfURO1GfUvgzxwYU.jpeg",
      alt: "Working out at the gym",
      category: "Fitness"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1401732869180_.pic.jpg-ra6zahKl34STtrqRY9996s1EEuvNDM.jpeg",
      alt: "Golfing at sunset",
      category: "Golf"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1391732869179_.pic.jpg-kEbmeHFd6voQj24ueO4fM6zDnCY5uv.jpeg",
      alt: "Playing golf on the course",
      category: "Golf"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1481732869410_.pic.jpg-DprMLbysQ5GuLaKKws4BWBJgc9CrQ6.jpeg",
      alt: "Hiking in snowy conditions",
      category: "Hiking"
    },
  ]

  const shuffledImages = [...images].sort(() => Math.random() - 0.5)

  return (
    <section id="life" className="py-20 bg-background">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Life & Interests
        </motion.h2>
        <div className={`grid gap-6 ${
          isMobile 
            ? 'grid-cols-1' 
            : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }`}>
          {shuffledImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <CardContent className="p-0 relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">
                      {image.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={selectedImage}
                alt="Selected image"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

