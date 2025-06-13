import React from "react";
import SparkleBackground from "@/components/sparkle-background"
import HeroSection from "@/components/hero-section"
import WhyUsSection from "@/components/why-us-section"
import OurWorkSection from "@/components/our-work-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQsSection from "@/components/faqs-section"
import Footer from "@/components/footer"
import ContactSection from "@/components/contactSection"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="relative bg-gray-900 min-h-screen">
      <SparkleBackground />
      <Header />
      <HeroSection />
      <WhyUsSection />
      <OurWorkSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
