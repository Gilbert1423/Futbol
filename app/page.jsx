"use client"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Stats from "./components/sections/Stats"
import Footer from "./components/layout/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)

    gsap.fromTo(
      ".fade-in-up",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
    )
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Footer />
    </div>
  )
}
