"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

export default function FAQsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does an MVP take?",
      answer:
        "Depending on the complexity, most MVPs are delivered within 7-14 days. Simple landing pages can be completed in 3-7 days. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "What's included in a landing page build?",
      answer:
        "Our landing pages include responsive design, SEO optimization, contact forms, analytics setup, performance optimization, and 2 rounds of revisions. We also provide hosting recommendations and deployment assistance.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes! We offer ongoing support and maintenance packages starting at $299/month. We also provide comprehensive documentation and training for your team to manage the product independently.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We primarily use Next.js, React, TailwindCSS, Node.js, and modern web technologies. We choose the best stack for your specific needs and can work with your preferred technologies if required.",
    },
    {
      question: "Can you help with scaling after launch?",
      answer:
        "We build with scalability in mind and can help you grow your product as your user base expands. We offer scaling consultations and development services for growing businesses.",
    },
  ]

  return (
    <section id="faqs" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-cyan-400 mr-3" />
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">FAQs</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300">Got questions? We've got answers.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-700/20 transition-colors"
              >
                <span className="font-semibold text-white text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-400 transition-transform flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">{faq.answer}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
