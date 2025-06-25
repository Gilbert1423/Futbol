"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function EquipoPage() {
  const heroRef = useRef(null)

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".player-card",
        { y: 100, opacity: 0, rotateY: 45 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".players-grid",
            start: "top 80%",
          },
        },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const players = [
    {
      name: "Carlos Rodríguez",
      position: "Portero",
      number: "1",
      age: 28,
      nationality: "España",
      image: "/placeholder.svg?height=400&width=300",
      stats: { partidos: 45, goles: 0, asistencias: 2 },
    },
    {
      name: "Gilbert Lucas",
      position: "Defensa Central",
      number: "2",
      age: 19,
      nationality: "Venezuela",
      image: "carnet.jpg",
      stats: { partidos: 42, goles: 3, asistencias: 5 },
    },
    {
      name: "Juan Pérez",
      position: "Centrocampista",
      number: "8",
      age: 24,
      nationality: "Argentina",
      image: "/placeholder.svg?height=400&width=300",
      stats: { partidos: 40, goles: 8, asistencias: 12 },
    },
    {
      name: "Diego Martínez",
      position: "Delantero",
      number: "9",
      age: 25,
      nationality: "Colombia",
      image: "/placeholder.svg?height=400&width=300",
      stats: { partidos: 38, goles: 22, asistencias: 6 },
    },
    {
      name: "Luis García",
      position: "Extremo",
      number: "11",
      age: 23,
      nationality: "Brasil",
      image: "/placeholder.svg?height=400&width=300",
      stats: { partidos: 35, goles: 15, asistencias: 18 },
    },
    {
      name: "Roberto Silva",
      position: "Lateral Derecho",
      number: "3",
      age: 27,
      nationality: "Uruguay",
      image: "/placeholder.svg?height=400&width=300",
      stats: { partidos: 41, goles: 2, asistencias: 8 },
    },
  ]

  const staff = [
    {
      name: "Fernando López",
      role: "Entrenador Principal",
      experience: "15 años",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Ana Martínez",
      role: "Preparadora Física",
      experience: "8 años",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Dr. Carlos Ruiz",
      role: "Médico del Equipo",
      experience: "12 años",
      image: "/placeholder.svg?height=300&width=250",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-black text-white mb-6"
          >
            NUESTRO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">EQUIPO</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Conoce a los guerreros que defienden los colores de FC EDUCACIØN con pasión y dedicación
          </motion.p>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            PLANTILLA PRINCIPAL
          </motion.h2>

          <div className="players-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player, index) => (
              <div key={index} className="player-card">
                <motion.div whileHover={{ y: -10, scale: 1.02 }} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-slate-700/50 group-hover:border-yellow-400/50 transition-all duration-500">
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={player.image || "/placeholder.svg"}
                        alt={player.name}
                        style={player.name === "" ? { width: '82rem', height: '100%', maxHeight: '100%', maxWidth: '100%' } : {}}
                        className={`mx-auto ${player.name === "Gilbert Lucas" ? "bg-white rounded-xl" : "w-full h-full object-cover"} group-hover:scale-105 transition-transform duration-700`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                          <span className="text-slate-900 font-black text-lg">{player.number}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-yellow-400 text-sm font-semibold">{player.nationality}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{player.name}</h3>
                      <p className="text-yellow-400 font-semibold mb-1">{player.position}</p>
                      <p className="text-gray-400 text-sm mb-4">{player.age} años</p>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-white">{player.stats.partidos}</div>
                          <div className="text-xs text-gray-400">Partidos</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-yellow-400">{player.stats.goles}</div>
                          <div className="text-xs text-gray-400">Goles</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-400">{player.stats.asistencias}</div>
                          <div className="text-xs text-gray-400">Asistencias</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            CUERPO TÉCNICO
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-slate-700/50 group-hover:border-yellow-400/50 transition-all duration-500">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-yellow-400 font-semibold mb-1">{member.role}</p>
                      <p className="text-gray-400 text-sm">{member.experience} de experiencia</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
