"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, Clock, MapPin, Trophy, Target, TrendingUp } from "lucide-react"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function PartidosPage() {
  const heroRef = useRef(null)
  const [activeTab, setActiveTab] = useState("proximos")

  const proximosPartidos = [
    {
      id: 1,
      opponent: "Real Madrid CF",
      date: "2024-01-20",
      time: "16:00",
      venue: "Estadio Santiago Bernabéu",
      competition: "Liga Nacional",
      isHome: false,
      importance: "high",
      ticketsAvailable: true,
    },
    {
      id: 2,
      opponent: "FC Barcelona",
      date: "2024-01-27",
      time: "20:00",
      venue: "Estadio FC EDUCACIØN",
      competition: "Copa del Rey",
      isHome: true,
      importance: "high",
      ticketsAvailable: true,
    },
    {
      id: 3,
      opponent: "Atlético Madrid",
      date: "2024-02-03",
      time: "18:30",
      venue: "Wanda Metropolitano",
      competition: "Liga Nacional",
      isHome: false,
      importance: "medium",
      ticketsAvailable: false,
    },
    {
      id: 4,
      opponent: "Valencia CF",
      date: "2024-02-10",
      time: "17:00",
      venue: "Estadio FC EDUCACIØN",
      competition: "Liga Nacional",
      isHome: true,
      importance: "medium",
      ticketsAvailable: true,
    },
  ]

  const resultados = [
    {
      id: 1,
      opponent: "Sevilla FC",
      date: "2024-01-13",
      score: "3-1",
      venue: "Estadio FC EDUCACIØN",
      competition: "Liga Nacional",
      isHome: true,
      result: "win",
      highlights: ["Gol de Diego Martínez (15')", "Gol de Luis García (34')", "Gol de Juan Pérez (78')"],
    },
    {
      id: 2,
      opponent: "Real Sociedad",
      date: "2024-01-06",
      score: "2-2",
      venue: "Anoeta",
      competition: "Liga Nacional",
      isHome: false,
      result: "draw",
      highlights: ["Gol de Diego Martínez (23')", "Gol de Luis García (67')"],
    },
    {
      id: 3,
      opponent: "Athletic Bilbao",
      date: "2023-12-30",
      score: "1-0",
      venue: "San Mamés",
      competition: "Liga Nacional",
      isHome: false,
      result: "loss",
      highlights: ["Ocasiones claras perdidas", "Gran actuación defensiva"],
    },
    {
      id: 4,
      opponent: "Villarreal CF",
      date: "2023-12-23",
      score: "4-2",
      venue: "Estadio FC EDUCACIØN",
      competition: "Liga Nacional",
      isHome: true,
      result: "win",
      highlights: ["Hat-trick de Diego Martínez", "Asistencia de Luis García"],
    },
  ]

  const estadisticas = {
    temporada: "2023-24",
    partidos: 18,
    victorias: 12,
    empates: 4,
    derrotas: 2,
    golesFavor: 34,
    golesContra: 15,
    diferencia: 19,
    puntos: 40,
    posicion: 2,
  }

  const getResultColor = (result) => {
    switch (result) {
      case "win":
        return "bg-emerald-500/20 border-emerald-500"
      case "draw":
        return "bg-orange-500/20 border-orange-500"
      case "loss":
        return "bg-red-500/20 border-red-500"
      default:
        return "bg-gray-500/20 border-gray-500"
    }
  }

  const getImportanceColor = (importance) => {
    switch (importance) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-orange-500"
      case "low":
        return "bg-emerald-500"
      default:
        return "bg-gray-500"
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".match-card",
        { y: 100, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".matches-container",
            start: "top 80%",
          },
        },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [activeTab])

  return (
    <div className="min-h-screen bg-main-gradient overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
              PARTIDOS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Y RESULTADOS
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sigue todos nuestros encuentros, resultados y estadísticas de la temporada
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
          >
            {[
              { label: "Posición", value: `${estadisticas.posicion}°`, icon: Trophy },
              { label: "Puntos", value: estadisticas.puntos, icon: Target },
              { label: "Victorias", value: estadisticas.victorias, icon: TrendingUp },
              { label: "Goles", value: estadisticas.golesFavor, icon: Target },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/50 text-center"
              >
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-2 border border-emerald-700/50">
              {[
                { id: "proximos", label: "Próximos Partidos" },
                { id: "resultados", label: "Resultados" },
                { id: "estadisticas", label: "Estadísticas" },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-emerald-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-emerald-800/50"
                  }`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="matches-container">
            {/* Próximos Partidos */}
            {activeTab === "proximos" && (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl font-bold text-white text-center mb-12">PRÓXIMOS ENCUENTROS</h2>
                <div className="grid gap-6 max-w-4xl mx-auto">
                  {proximosPartidos.map((match, index) => (
                    <motion.div
                      key={match.id}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="match-card bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-emerald-700/50 hover:border-emerald-500/50 transition-all duration-500 flex flex-col items-center text-center"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center w-full">
                        <div className="flex-1 mb-4 lg:mb-0 flex flex-col items-center text-center">
                          <div className="flex items-center gap-4 mb-4 justify-center">
                            <div
                              className={`w-3 h-3 rounded-full ${getImportanceColor(match.importance)} animate-pulse`}
                            ></div>
                            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {match.competition}
                            </span>
                            {match.isHome && (
                              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                LOCAL
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">
                            FC EDUCACIØN {match.isHome ? "vs" : "@"} {match.opponent}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-gray-300 justify-center">
                            <div className="flex items-center gap-2">
                              <Calendar size={18} className="text-emerald-400" />
                              <span>{new Date(match.date).toLocaleDateString("es-ES")}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={18} className="text-emerald-400" />
                              <span>{match.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={18} className="text-emerald-400" />
                              <span>{match.venue}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          {/* {match.ticketsAvailable && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors"
                            >
                              Comprar Entradas
                            </motion.button>
                          )} */}
                          {/* <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-emerald-400 text-emerald-400 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-400 hover:text-emerald-950 transition-all duration-300"
                          >
                            Ver Detalles
                          </motion.button> */}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Resultados */}
            {activeTab === "resultados" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl font-bold text-white text-center mb-12">RESULTADOS RECIENTES</h2>
                <div className="grid gap-6 max-w-4xl mx-auto">
                  {resultados.map((match, index) => (
                    <motion.div
                      key={match.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1 mb-4 lg:mb-0">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {match.competition}
                            </span>
                            {match.isHome && (
                              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                LOCAL
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="text-2xl font-bold text-white">
                              FC EDUCACIØN {match.isHome ? "vs" : "@"} {match.opponent}
                            </h3>
                            <div className="text-3xl font-black text-emerald-400">{match.score}</div>
                          </div>
                          <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-emerald-400" />
                              <span>{new Date(match.date).toLocaleDateString("es-ES")}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-emerald-400" />
                              <span>{match.venue}</span>
                            </div>
                          </div>
                          {match.highlights && (
                            <div className="bg-emerald-900/30 rounded-lg p-4">
                              <h4 className="text-emerald-400 font-semibold mb-2">Momentos Destacados:</h4>
                              <ul className="text-gray-300 text-sm space-y-1">
                                {match.highlights.map((highlight, idx) => (
                                  <li key={idx}>• {highlight}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col gap-2">
                          {/* <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                          >
                            Ver Resumen
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-emerald-400 text-emerald-400 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-400 hover:text-emerald-950 transition-all duration-300"
                          >
                            Estadísticas
                          </motion.button> */}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Estadísticas */}
            {activeTab === "estadisticas" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl font-bold text-white text-center mb-12">ESTADÍSTICAS</h2>
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Estadísticas Generales */}
                    <div className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-8 border border-emerald-700/50">
                      <h3 className="text-2xl font-bold text-white mb-6">Rendimiento General</h3>
                      <div className="space-y-4">
                        {[
                          { label: "Partidos Jugados", value: estadisticas.partidos },
                          { label: "Victorias", value: estadisticas.victorias },
                          { label: "Empates", value: estadisticas.empates },
                          { label: "Derrotas", value: estadisticas.derrotas },
                          { label: "Puntos", value: estadisticas.puntos },
                          { label: "Posición en Liga", value: `${estadisticas.posicion}°` },
                        ].map((stat, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-gray-300">{stat.label}</span>
                            <span className="text-2xl font-bold text-emerald-400">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Estadísticas de Goles */}
                    <div className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-8 border border-emerald-700/50">
                      <h3 className="text-2xl font-bold text-white mb-6">Estadísticas de Gol</h3>
                      <div className="space-y-4">
                        {[
                          { label: "Goles a Favor", value: estadisticas.golesFavor },
                          { label: "Goles en Contra", value: estadisticas.golesContra },
                          { label: "Diferencia de Goles", value: `+${estadisticas.diferencia}` },
                          {
                            label: "Promedio Goles/Partido",
                            value: (estadisticas.golesFavor / estadisticas.partidos).toFixed(1),
                          },
                          {
                            label: "Goles Recibidos/Partido",
                            value: (estadisticas.golesContra / estadisticas.partidos).toFixed(1),
                          },
                        ].map((stat, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-gray-300">{stat.label}</span>
                            <span className="text-2xl font-bold text-emerald-400">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Gráfico de Rendimiento */}
                  <div className="bg-emerald-900/30 backdrop-blur-lg rounded-2xl p-8 border border-emerald-700/50">
                    <h3 className="text-2xl font-bold text-white mb-6">Rendimiento por Resultado</h3>
                    <div className="grid grid-cols-3 gap-6">
                      {[
                        {
                          label: "Victorias",
                          value: estadisticas.victorias,
                          color: "emerald",
                          percentage: ((estadisticas.victorias / estadisticas.partidos) * 100).toFixed(1),
                        },
                        {
                          label: "Empates",
                          value: estadisticas.empates,
                          color: "orange",
                          percentage: ((estadisticas.empates / estadisticas.partidos) * 100).toFixed(1),
                        },
                        {
                          label: "Derrotas",
                          value: estadisticas.derrotas,
                          color: "red",
                          percentage: ((estadisticas.derrotas / estadisticas.partidos) * 100).toFixed(1),
                        },
                      ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <div
                            className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center bg-${stat.color}-500/20 border-4 border-${stat.color}-500`}
                          >
                            <span className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</span>
                          </div>
                          <h4 className="text-white font-semibold mb-1">{stat.label}</h4>
                          <p className="text-gray-400">{stat.percentage}%</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
