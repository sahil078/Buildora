"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useBookingModal } from "@/lib/store"
import { Check, Star } from "lucide-react"

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { openModal } = useBookingModal()

  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for simple MVPs and landing pages",
      features: [
        "Landing page design & development",
        "Mobile responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "2 rounds of revisions",
        "7-day delivery",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Pro",
      price: "$7,999",
      description: "Ideal for full-featured MVPs",
      features: [
        "Full MVP development",
        "User authentication system",
        "Database integration",
        "Admin dashboard",
        "API development",
        "Payment integration",
        "3 rounds of revisions",
        "14-day delivery",
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Custom",
      price: "Let's talk",
      description: "Tailored solutions for complex projects",
      features: [
        "Custom development",
        "Advanced integrations",
        "Scalable architecture",
        "DevOps & deployment",
        "Ongoing support",
        "Unlimited revisions",
        "Flexible timeline",
      ],
      gradient: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
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
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your project needs and budget. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all hover:scale-105 ${
                plan.popular
                  ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 shadow-2xl shadow-purple-500/25"
                  : "bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div
                  className={`text-4xl font-bold mb-2 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                >
                  {plan.price}
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mr-3 flex-shrink-0`}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openModal}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25"
                    : `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg`
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
