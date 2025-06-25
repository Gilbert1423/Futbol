"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-lg">FC</span>
            </div>
            <h1 className="text-2xl font-bold">FC EDUCACIØN</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-blue-300 transition-colors">
              Inicio
            </a>
            <a href="#equipo" className="hover:text-blue-300 transition-colors">
              Equipo
            </a>
            <a href="#jugadores" className="hover:text-blue-300 transition-colors">
              Jugadores
            </a>
            <a href="#partidos" className="hover:text-blue-300 transition-colors">
              Partidos
            </a>
            <a href="#contacto" className="hover:text-blue-300 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#inicio" className="hover:text-blue-300 transition-colors py-2">
                Inicio
              </a>
              <a href="#equipo" className="hover:text-blue-300 transition-colors py-2">
                Equipo
              </a>
              <a href="#jugadores" className="hover:text-blue-300 transition-colors py-2">
                Jugadores
              </a>
              <a href="#partidos" className="hover:text-blue-300 transition-colors py-2">
                Partidos
              </a>
              <a href="#contacto" className="hover:text-blue-300 transition-colors py-2">
                Contacto
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
