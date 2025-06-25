import { Calendar, MapPin, Clock } from "lucide-react"

export default function Matches() {
  const matches = [
    {
      opponent: "Deportivo Central",
      date: "15 Enero 2024",
      time: "16:00",
      location: "Estadio Municipal",
      type: "Local",
    },
    {
      opponent: "Club Atlético Norte",
      date: "22 Enero 2024",
      time: "18:30",
      location: "Campo Norte",
      type: "Visitante",
    },
    {
      opponent: "Real Juventud",
      date: "29 Enero 2024",
      time: "15:00",
      location: "Estadio Municipal",
      type: "Local",
    },
  ]

  return (
    <section id="partidos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Próximos Partidos</h2>
          <p className="text-lg text-gray-600">No te pierdas nuestros próximos encuentros y ven a apoyar al equipo</p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {matches.map((match, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">FC EDUCACIØN vs {match.opponent}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>{match.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} />
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{match.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      match.type === "Local" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {match.type}
                  </span>
                  <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
