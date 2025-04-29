export default function MisionVision() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Misión y Visión</h1>

      {/* Misión */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Misión</h2>
        <p className="text-gray-700 text-lg">
          “Nuestra misión es brindar una educación integral y de calidad, basada en el
          respeto por la diversidad y la inclusión de todos los estudiantes. Fortaleciendo
          el desarrollo de habilidades y reforzando valores que fomenten la sana
          convivencia.”
        </p>
      </div>

      {/* Visión */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Visión</h2>
        <p className="text-gray-700 text-lg">
          “Ser una comunidad educativa centrada en la formación integral e inclusiva de
          los estudiantes, que fomente valores de identidad local y potencie las
          habilidades académicas, artístico-culturales, deportivas y de vida saludable.
          Mediante procesos pedagógicos que respeten la individualidad y promuevan la
          autonomía.”
        </p>
      </div>
    </div>
  );
}
