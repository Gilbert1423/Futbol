"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Target, Heart, Trophy, Users } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-card",
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const values = [
    {
      icon: Target,
      title: "Excelencia",
      description: "Buscamos la perfección en cada entrenamiento y partido",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "El amor por el fútbol impulsa cada una de nuestras acciones",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Trophy,
      title: "Victoria",
      description: "Competimos para ganar, pero siempre con fair play",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Unidad",
      description: "Somos más que un equipo, somos una familia",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section ref={sectionRef} id="about-section" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            NUESTRA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              FILOSOFÍA
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            En FC EDUCACIØN, creemos que el fútbol es más que un deporte. Es una herramienta de transformación social y
            personal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {values.map((value, index) => (
            <div key={index} className="about-card h-full">
              <motion.div whileHover={{ y: -10, scale: 1.05 }} className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl from-yellow-400/20 to-orange-500/20"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-500 h-full flex flex-col justify-between">
                  <div>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}
                    >
                      <value.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-slate-800/80 to-blue-900/80 backdrop-blur-lg rounded-3xl p-12 border border-slate-700/50"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Nuestra Misión</h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Formar jugadores integrales que destaquen no solo por su habilidad técnica, sino por sus valores humanos.
              Creemos en el poder transformador del deporte para construir una sociedad mejor, más justa y unida.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
