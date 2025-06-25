"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
  const sectionRef = useRef(null)
  const [counters, setCounters] = useState([0, 0, 0, 0])

  const stats = [
    { number: 15, label: "Trofeos Ganados", suffix: "" },
    { number: 250, label: "Partidos Jugados", suffix: "+" },
    { number: 89, label: "Porcentaje de Victorias", suffix: "%" },
    { number: 8, label: "Años de Historia", suffix: "" },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          stats.forEach((stat, index) => {
            gsap.to(
              {},
              {
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                  const progress = this.progress()
                  setCounters((prev) => {
                    const newCounters = [...prev]
                    newCounters[index] = Math.floor(stat.number * progress)
                    return newCounters
                  })
                },
              },
            )
          })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            NUESTROS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              NÚMEROS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Las estadísticas que reflejan nuestro compromiso con la excelencia
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center group"
            >
              <div className="relative flex flex-col items-center justify-center min-h-56 h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-800/30 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 group-hover:border-yellow-400/50 transition-all duration-500 flex flex-col items-center justify-center min-h-56 h-56">
                  <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500 mb-4">
                    {counters[index]}
                    {stat.suffix}
                  </div>
                  <div className="text-lg font-semibold text-gray-300 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Logros Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2016", achievement: "Fundación del Club", color: "from-blue-500 to-cyan-500" },
              { year: "2019", achievement: "Primer Campeonato Regional", color: "from-yellow-500 to-orange-500" },
              { year: "2024", achievement: "Copa Nacional", color: "from-green-500 to-emerald-500" },
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl`}
                >
                  <span className="text-white font-bold text-lg">{item.year}</span>
                </div>
                <h4 className="text-white font-semibold text-lg">{item.achievement}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
