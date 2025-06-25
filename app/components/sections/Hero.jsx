"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { Play, Star, Award, Zap, Trophy } from "lucide-react"

export default function Hero() {
  const heroRef = useRef(null)
  const ballRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ballRef.current, {
        y: -20,
        rotation: 360,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })

      gsap.set(".particle", { opacity: 0 })
      gsap.to(".particle", {
        opacity: 1,
        y: -50, // Reducido para evitar overflow
        x: "random(-30, 30)", // Reducido para evitar overflow
        duration: "random(3, 6)",
        repeat: -1,
        stagger: 0.5,
        ease: "none",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full particle"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-teal-400 rounded-full particle"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-orange-400 rounded-full particle"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-cyan-400 rounded-full particle"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
<motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 mt-12"
        >
          <div ref={ballRef} className="w-32 h-32 mx-auto mb-8 relative">
            <div className="w-full h-full bg-gradient-to-br from-white to-gray-300 rounded-full shadow-2xl flex items-center justify-center">
              <div className="w-24 h-24 border-4 border-emerald-800 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-emerald-600 rounded-full"></div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <Star size={16} className="text-white" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight"
        >
          FC{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
            EDUCACIØN
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light"
        >
          Donde la pasión se encuentra con la excelencia. Formamos campeones dentro y fuera del campo.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center space-x-2 hover:shadow-emerald-500/25"
            onClick={() => window.open('https://www.youtube.com/results?search_query=fc+educacion+highlights', '_blank')}
          >
            <Play size={20} />
            <span>Ver Highlights</span>
          </motion.button> */}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 hover:text-emerald-950 transition-all duration-300 flex items-center space-x-2"
            onClick={() => window.location.href = '/trofeos'}
          >
            <Trophy size={20} />
            <span>Trofeos</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto mb-20"
        >
          {[
            { number: "15", label: "Trofeos", icon: Trophy },
            { number: "250+", label: "Partidos", icon: Zap },
            { number: "8", label: "Años", icon: Star },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center bg-emerald-900/30 backdrop-blur-sm rounded-2xl p-4 border border-emerald-700/50"
            >
              <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-4xl font-black text-emerald-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-950 to-transparent"></div>
    </section>
  )
}
