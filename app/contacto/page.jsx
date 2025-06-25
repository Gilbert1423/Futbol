"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Calendar } from "lucide-react"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function ContactoPage() {
  const heroRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "info@fceducacion.com",
      description: "Respuesta en 24 horas",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "+1 (555) 123-4567",
      description: "Lun - Vie: 9:00 - 18:00",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Estadio FC EDUCACIØN",
      description: "Av. Deportiva 123, Ciudad",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Clock,
      title: "Horarios",
      info: "Lun - Dom",
      description: "Entrenamientos: 16:00 - 20:00",
      color: "from-blue-500 to-indigo-500",
    },
  ]

  const departments = [
    { value: "general", label: "Consulta General" },
    { value: "prensa", label: "Prensa y Medios" },
    { value: "sponsors", label: "Patrocinios" },
    { value: "academy", label: "Academia Juvenil" },
    { value: "tickets", label: "Entradas y Eventos" },
    { value: "technical", label: "Cuerpo Técnico" },
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("¡Mensaje enviado correctamente! Te contactaremos pronto.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      type: "general",
    })
    setIsSubmitting(false)
  }

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-card",
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 80%",
          },
        },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-emerald-900 to-emerald-950 overflow-x-hidden">
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
              CONTACTA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                CON NOSOTROS
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con FC EDUCACIØN para cualquier consulta
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="contact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div key={index} whileHover={{ y: -10, scale: 1.05 }} className="contact-card group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-emerald-900/30 backdrop-blur-lg rounded-3xl p-8 border border-emerald-700/50 group-hover:border-emerald-500/50 transition-all duration-500 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                    >
                      <info.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-emerald-400 font-semibold mb-2">{info.info}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="flex flex-col items-center justify-center w-full gap-12 min-h-[60vh] py-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-emerald-900/30 backdrop-blur-lg rounded-3xl p-12 border border-emerald-700/50 w-full max-w-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Nuestra Ubicación</h3>
              <div className="aspect-video bg-emerald-800/50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">Estadio FC EDUCACIØN</p>
                  <p className="text-gray-400">Av. Deportiva 123, Ciudad</p>
                  <p className="text-emerald-400 text-sm mt-2">Mapa interactivo próximamente</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-emerald-900/30 backdrop-blur-lg rounded-3xl p-12 border border-emerald-700/50 w-full max-w-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Contacto Rápido</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Llamada Directa</p>
                    <p className="text-emerald-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Directo</p>
                    <p className="text-emerald-400">info@fceducacion.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Horario de Atención</p>
                    <p className="text-emerald-400">Lun - Vie: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-emerald-900/30 backdrop-blur-lg rounded-3xl p-12 border border-emerald-700/50 w-full max-w-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-2">¿Cómo puedo unirme al club?</h4>
                  <p className="text-gray-300 text-sm">
                    Contáctanos para información sobre pruebas y academia juvenil.
                  </p>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-2">¿Dónde compro entradas?</h4>
                  <p className="text-gray-300 text-sm">Las entradas están disponibles en nuestro estadio y online.</p>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-2">¿Ofrecen visitas al estadio?</h4>
                  <p className="text-gray-300 text-sm">Sí, organizamos tours guiados los fines de semana.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
