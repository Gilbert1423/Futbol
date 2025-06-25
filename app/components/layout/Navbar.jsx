"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Users, Calendar, Trophy, Phone } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/equipo", label: "Equipo", icon: Users },
    { href: "/partidos", label: "Partidos", icon: Calendar },
    { href: "/trofeos", label: "Trofeos", icon: Trophy },
    { href: "/contacto", label: "Contacto", icon: Phone },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-emerald-950/95 backdrop-blur-lg shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-emerald-950 font-black text-lg">FC</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">FC EDUCACIØN</h1>
              <p className="text-xs text-emerald-400 font-semibold">EXCELLENCE IN FOOTBALL</p>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors group"
                  >
                    <item.icon size={18} />
                    <span className="font-semibold">{item.label}</span>
                    <div className="w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-emerald-950/98 backdrop-blur-lg"
          >
            <div className="container mx-auto px-6 py-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-4"
                >
                  <Link href={item.href}>
                    <div className="flex items-center space-x-3 text-white hover:text-emerald-400 transition-colors p-3 rounded-lg hover:bg-emerald-900/50">
                      <item.icon size={20} />
                      <span className="font-semibold">{item.label}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
