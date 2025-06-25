"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Trophy, Award, Medal, Star, Calendar } from "lucide-react"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function TrofeosPage() {
  const heroRef = useRef(null)

  const trofeos = [
    {
      id: 1,
      title: "Copa Nacional 2024",
      year: "2024",
      description: "Nuestro logro más reciente y prestigioso. Una final épica que quedará en la historia del club.",
      image: "/placeholder.svg?height=400&width=300",
      category: "Nacional",
      importance: "high",
      details: {
        opponent: "Real Madrid CF",
        score: "2-1",
        venue: "Estadio Nacional",
        attendance: "75,000",
        keyPlayers: ["Diego Martínez", "Luis García", "Juan Pérez"],
      },
    },
    {
      id: 2,
      title: "Liga Regional 2023",
      year: "2023",
      description: "Dominamos la liga regional con un fútbol espectacular y récord de puntos.",
      image: "/placeholder.svg?height=400&width=300",
      category: "Regional",
      importance: "high",
      details: {
        points: "89 puntos",
        wins: "28 victorias",
        goals: "95 goles",
        record: "Récord histórico de puntos",
      },
    },
    {
      id: 3,
      title: "Copa Juvenil 2023",
      year: "2023",
      description: "Nuestras promesas demostraron su calidad ganando el torneo más importante de su categoría.",
      image: "/placeholder.svg?height=400&width=300",
      category: "Juvenil",
      importance: "medium",
      details: {
        category: "Sub-19",
        teams: "32 equipos participantes",
        goals: "45 goles marcados",
        clean_sheets: "8 porterías a cero",
      },
    },
    {
      id: 4,
      title: "Torneo de Verano 2022",
      year: "2022",
      description: "Un torneo de preparación que nos sirvió para consolidar nuestro estilo de juego.",
      image: "/placeholder.svg?height=400&width=300",
      category: "Amistoso",
      importance: "low",
      details: {
        teams: "8 equipos",
        format: "Eliminación directa",
        venue: "Múltiples sedes",
        duration: "2 semanas",
      },
    },
    {
      id: 5,
      title: "Liga Regional 2022",
      year: "2022",
      description: "Nuestro primer gran título que marcó el inicio de una era dorada.",
      image: "/placeholder.svg?height=400&width=300",
      category: "Regional",
      importance: "high",
      details: {
        points: "82 puntos",
        wins: "25 victorias",
        goals: "78 goles",
        milestone: "Primer título oficial",
      },
    },
    {
      id: 6,
      title: "Copa Fair Play 2021",
      year: "2021",
      description: "Reconocimiento a nuestros valores deportivos y comportamiento ejemplar.",
      image: "/placeholder.svg?height=400&width=300",
      category: "Fair Play",
      importance: "medium",
      details: {
        criteria: "Comportamiento deportivo",
        cards: "Menor número de tarjetas",
        respect: "Respeto a árbitros y rivales",
        community: "Trabajo comunitario",
      },
    },
  ]

  const estadisticasTrofeos = {
    total: trofeos.length,
    nacionales: trofeos.filter((t) => t.category === "Nacional").length,
    regionales: trofeos.filter((t) => t.category === "Regional").length,
    juveniles: trofeos.filter((t) => t.category === "Juvenil").length,
    ultimoAno: trofeos.filter((t) => Number.parseInt(t.year) >= 2023).length,
  }

  const getImportanceIcon = (importance) => {
    switch (importance) {
      case "high":
        return Trophy
      case "medium":
        return Award
      case "low":
        return Medal
      default:
        return Star
    }
  }

  const getImportanceColor = (importance) => {
    switch (importance) {
      case "high":
        return "from-yellow-400 to-orange-500"
      case "medium":
        return "from-emerald-400 to-teal-500"
      case "low":
        return "from-cyan-400 to-blue-500"
      default:
        return "from-gray-400 to-gray-500"
    }
  }

  useEffect(() => {
    // Scroll to top on page load (eliminado para evitar scroll automático)
    // window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".trophy-card",
        { y: 100, opacity: 0, rotateY: 45 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trophies-grid",
            start: "top 80%",
          },
        },
      )

      // Animación de los trofeos flotantes
      gsap.to(".floating-trophy", {
        y: -20,
        rotation: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-main-gradient overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          {/* Trofeos flotantes */}
          <div className="absolute top-1/4 left-1/4 floating-trophy">
            <Trophy className="w-8 h-8 text-yellow-400/30" />
          </div>
          <div className="absolute top-1/3 right-1/3 floating-trophy">
            <Award className="w-6 h-6 text-emerald-400/30" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 floating-trophy">
            <Medal className="w-7 h-7 text-orange-400/30" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
              NUESTROS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600">
                TROFEOS
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Cada trofeo cuenta una historia de dedicación, esfuerzo y pasión por el fútbol
            </p>
          </motion.div>

          {/* Estadísticas de Trofeos */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto mb-16"
          >
            {[
              { label: "Total Trofeos", value: estadisticasTrofeos.total, icon: Trophy },
              { label: "Nacionales", value: estadisticasTrofeos.nacionales, icon: Award },
              { label: "Regionales", value: estadisticasTrofeos.regionales, icon: Medal },
              { label: "Juveniles", value: estadisticasTrofeos.juveniles, icon: Star },
              { label: "Últimos 2 Años", value: estadisticasTrofeos.ultimoAno, icon: Calendar },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/50 text-center"
              >
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 font-semibold text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trofeos Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            GALERÍA DE TROFEOS
          </motion.h2>

          <div className="trophies-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trofeos.map((trofeo, index) => {
              const IconComponent = getImportanceIcon(trofeo.importance)
              return (
                <motion.div
                  key={trofeo.id}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="trophy-card group cursor-pointer"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-emerald-900/30 backdrop-blur-lg rounded-3xl overflow-hidden border border-emerald-700/50 group-hover:border-yellow-400/50 transition-all duration-500">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={trofeo.image || "/placeholder.svg"}
                          alt={trofeo.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${getImportanceColor(trofeo.importance)} rounded-full flex items-center justify-center shadow-2xl`}
                          >
                            <IconComponent size={24} className="text-white" />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-emerald-900/80 backdrop-blur-sm rounded-lg px-3 py-1">
                            <span className="text-yellow-400 font-bold">{trofeo.year}</span>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {trofeo.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                          {trofeo.title}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">{trofeo.description}</p>

                        {/* Detalles del trofeo */}
                        <div className="space-y-2">
                          {Object.entries(trofeo.details).map(([key, value], idx) => (
                            <div key={idx} className="flex justify-between items-center text-sm">
                              <span className="text-gray-400 capitalize">{key.replace("_", " ")}:</span>
                              <span className="text-emerald-400 font-semibold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Timeline de Logros */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20"
          >
            <h3 className="text-4xl font-bold text-white text-center mb-16">LÍNEA DE TIEMPO</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Línea central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-500"></div>

                {trofeos.map((trofeo, index) => (
                  <motion.div
                    key={trofeo.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                      <div className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/50">
                        <h4 className="text-xl font-bold text-white mb-2">{trofeo.title}</h4>
                        <p className="text-gray-300 text-sm mb-3">{trofeo.description}</p>
                        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {trofeo.category}
                        </span>
                      </div>
                    </div>

                    {/* Punto central */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-4 border-emerald-950 shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    <div className={`w-5/12 ${index % 2 === 0 ? "pl-8" : "pr-8 text-right"}`}>
                      <div className="text-3xl font-black text-yellow-400">{trofeo.year}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Próximos Objetivos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 bg-gradient-to-r from-emerald-900/80 to-teal-900/80 backdrop-blur-lg rounded-3xl p-12 border border-emerald-700/50 text-center flex flex-col items-center justify-center mx-auto max-w-4xl"
          >
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Próximos Objetivos</h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Nuestro hambre de triunfo no se detiene. Este año tenemos la vista puesta en la Liga Nacional y la Copa
              Internacional. Cada entrenamiento, cada partido, cada esfuerzo nos acerca más a escribir nuevos capítulos
              gloriosos en nuestra historia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto">
              {[
                { title: "Liga Nacional 2024", status: "En progreso", progress: "2° lugar" },
                { title: "Copa Internacional", status: "Clasificados", progress: "Octavos de final" },
                { title: "Torneo Juvenil", status: "Favoritos", progress: "Semifinales" },
              ].map((objetivo, index) => (
                <div key={index} className="bg-emerald-800/30 rounded-xl p-4 flex flex-col items-center text-center">
                  <h4 className="text-white font-bold mb-2">{objetivo.title}</h4>
                  <p className="text-emerald-400 text-sm mb-1">{objetivo.status}</p>
                  <p className="text-gray-400 text-xs">{objetivo.progress}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
