"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Buildora
            </h3>
            <p className="text-gray-400 mt-2">Building the future, one MVP at a time.</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800/50"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} Buildora. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ for innovators worldwide</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
