export default function EncargadoConvivencia() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Encargado de Convivencia Escolar
      </h1>

      {/* Definición de Convivencia Escolar */}
      <p className="text-gray-700 text-lg mb-6">
        Se define por <strong>Convivencia Escolar</strong> “la coexistencia pacífica de los miembros de la comunidad educativa, 
        que supone una interrelación positiva entre ellos y permite el adecuado cumplimiento de los objetivos educativos en 
        un clima que propicia el desarrollo integral de los estudiantes”.
      </p>

      <p className="text-gray-700 text-lg mb-6">
        La convivencia escolar se trata de la construcción de un modo de relación entre las personas de una comunidad, 
        sustentada en el respeto mutuo y en la solidaridad recíproca, expresada en la interrelación armoniosa y sin violencia 
        entre los diferentes actores y estamentos de la Comunidad Educativa.
      </p>

      <p className="text-gray-700 text-lg mb-6">
        Tiene un enfoque eminentemente formativo. Se deben enseñar y aprender una suma de conocimientos, habilidades y valores 
        que permiten poner en práctica el vivir en paz y la armonía con otros, porque es la base para el ejercicio de la ciudadanía. 
        En la escolaridad, estos aprendizajes están establecidos tanto en los Objetivos Fundamentales Transversales como en los 
        Objetivos Fundamentales Verticales.
      </p>

      <p className="text-gray-700 text-lg mb-6">
        En sí mismo, el enfoque formativo contiene una dimensión preventiva, expresada en el desarrollo de conocimientos, 
        habilidades y actitudes que permitan formar personas autónomas, capaces de tomar decisiones personales y de anticiparse 
        a las situaciones que amenazan o alteran el aprendizaje de la convivencia, cautelando en todo momento el proceso formativo 
        y las estrategias pedagógicas. En este sentido, la dimensión preventiva implica superar la noción de riesgo y no se limita 
        a informar o prohibir, sino que apunta a formar para actuar con anticipación (<strong>Mineduc</strong>).
      </p>

      {/* Funciones del Encargado */}
      <h2 className="text-3xl font-bold text-blue-600 mt-8 mb-4">
        Funciones de la Encargada de Convivencia Escolar
      </h2>

      <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
        <li>Diseñar, elaborar e implementar el <strong>Plan de Gestión de la Convivencia Escolar</strong>.</li>
        <li>Diseñar la conformación de equipos de trabajo.</li>
        <li>Informar al equipo directivo y al Consejo Escolar de los avances o dificultades en la implementación del Plan de Gestión.</li>
        <li>Ejecutar cada uno de los protocolos contenidos en el Reglamento de Convivencia Escolar.</li>
      </ul>
    </div>
  );
}
