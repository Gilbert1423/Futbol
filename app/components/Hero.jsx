export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">FC EDUCACIØN</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Más que un equipo, somos una familia. Formando campeones dentro y fuera del campo.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Ver Próximos Partidos
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
            Conoce al Equipo
          </button>
        </div>
      </div>
    </section>
  )
}
