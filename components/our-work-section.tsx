"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

export default function OurWorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      title: "FinTech MVP",
      description:
        "A modern financial dashboard with real-time analytics, secure transactions, and AI-powered insights.",
      image: "/Fintech.png",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with inventory management, payment processing, and advanced analytics.",
      image: "/ChotuCart.png",
      tags: ["Next.js", "TypeScript", "Zustand" , "TailwindCSS" , "Vercel"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "SaaS Landing Page",
      description: "High-converting landing page with A/B testing that increased sign-ups by 300% in 30 days.",
      image: "/Saas-Platform.png",
      tags: ["Next.js", "Framer Motion", "SEO", "vercel"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Healthcare App",
      description: "Patient management system with appointment scheduling, telemedicine, and HIPAA compliance.",
      image: "/Healthcare.png",
      tags: ["Next.js", "Firebase", "TailwindCSS", "Auth0"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="our-work" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped startups and companies launch successful products that scale.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                ></div>
                <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-[-15px] top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700/80 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-[-16px] top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700/80 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex"
                animate={{ x: -currentIndex * 100 + "%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {projects.map((project, index) => (
                  <div key={project.title} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`}></div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-cyan-400 to-purple-400"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
