import Link from 'next/link';
import React from 'react';
// // Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb:20 md:mb-10 ">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your idea to life? Let's talk about your project.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="https://cal.com/md-sahil-2awgut" target='_blank'
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105"
          >
            Book a Call
          </Link>
      </div>
      </div>
    </section>
  )
}
export default ContactSection;