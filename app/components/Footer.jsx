import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contacto" className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">FC</span>
              </div>
              <h3 className="text-2xl font-bold">FC EDUCACIØN</h3>
            </div>
            <p className="text-blue-200 mb-4">
              Formando campeones dentro y fuera del campo. Más que un equipo, somos una familia comprometida con la
              excelencia deportiva y los valores humanos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-blue-200 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-blue-200 hover:text-white transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#jugadores" className="text-blue-200 hover:text-white transition-colors">
                  Jugadores
                </a>
              </li>
              <li>
                <a href="#partidos" className="text-blue-200 hover:text-white transition-colors">
                  Partidos
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-blue-200">info@fceducacion.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-blue-200">+1 234 567 8900</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-blue-200">Estadio Municipal, Ciudad</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">© 2024 FC EDUCACIØN. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
