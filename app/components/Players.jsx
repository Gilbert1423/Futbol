export default function Players() {
  const players = [
    {
      name: "Carlos Rodríguez",
      position: "Portero",
      number: "1",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Miguel Santos",
      position: "Defensa",
      number: "4",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Juan Pérez",
      position: "Centrocampista",
      number: "8",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Diego Martínez",
      position: "Delantero",
      number: "9",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Luis García",
      position: "Extremo",
      number: "11",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "Roberto Silva",
      position: "Defensa",
      number: "3",
      image: "/placeholder.svg?height=300&width=250",
    },
  ]

  return (
    <section id="jugadores" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Jugadores</h2>
          <p className="text-lg text-gray-600">
            Conoce a los talentosos atletas que representan los colores de FC EDUCACIØN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={player.image || "/placeholder.svg"} alt={player.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{player.name}</h3>
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                    #{player.number}
                  </span>
                </div>
                <p className="text-blue-600 font-semibold">{player.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
