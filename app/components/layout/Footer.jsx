"use client"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
  ]

  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Equipo", href: "/equipo" },
    { label: "Partidos", href: "/partidos" },
    { label: "Noticias", href: "/noticias" },
    { label: "Contacto", href: "/contacto" },
  ]

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-slate-900 font-black text-lg">FC</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">FC EDUCACIØN</h3>
                  <p className="text-xs text-yellow-400 font-semibold">EXCELLENCE IN FOOTBALL</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Más que un club de fútbol, somos una institución que forma campeones dentro y fuera del campo. Nuestra
                pasión por el deporte se combina con valores sólidos para crear una experiencia única.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-slate-700`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Mail size={18} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>info@fceducacion.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Phone size={18} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <p>Estadio Municipal</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-gray-400 text-sm mb-4 md:mb-0"
              >
                © 2024 FC EDUCACIØN. Todos los derechos reservados.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-center text-gray-400 text-sm"
              >
                <span>Hecho con</span>
                <Heart size={16} className="text-red-500 mx-2" />
                <span>para los amantes del fútbol</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
