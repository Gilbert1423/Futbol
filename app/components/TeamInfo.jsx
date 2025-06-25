import { Trophy, Users, Target, Heart } from "lucide-react"

export default function TeamInfo() {
  const stats = [
    { icon: Trophy, label: "Campeonatos", value: "3" },
    { icon: Users, label: "Jugadores", value: "25" },
    { icon: Target, label: "Goles Temporada", value: "47" },
    { icon: Heart, label: "Años de Historia", value: "8" },
  ]

  return (
    <section id="equipo" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FC EDUCACIØN es más que un club de fútbol. Somos una institución comprometida con la formación integral de
            nuestros jugadores y la comunidad.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={32} />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
          <p className="text-gray-600 mb-6">
            En FC EDUCACIØN creemos que el fútbol es una herramienta poderosa para la EDUCACIØN y el desarrollo
            personal. Nuestro objetivo es formar no solo grandes futbolistas, sino también grandes personas que
            contribuyan positivamente a la sociedad.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-blue-900 mb-2">Excelencia Deportiva</h4>
              <p className="text-sm text-gray-600">Entrenamiento de alto nivel para alcanzar el máximo potencial</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-blue-900 mb-2">Valores Sólidos</h4>
              <p className="text-sm text-gray-600">
                Respeto, disciplina y trabajo en equipo como pilares fundamentales
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-blue-900 mb-2">Compromiso Social</h4>
              <p className="text-sm text-gray-600">Contribución activa al desarrollo de nuestra comunidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
