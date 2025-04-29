"use client";

import { useState } from "react";

export default function Cursos() {
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const cursos = [
    { nivel: "Educación Parvularia", lista: [
      { nombre: "Pre-Kinder", profesor: "Prof. Denisia Villacen" },
      { nombre: "Kinder", profesor: "Prof. Myriam Martinez" }
    ]},
    { nivel: "Educación Básica", lista: [
      { nombre: "Primero Básico", profesor: "Prof. Yessyka Mardones" },
      { nombre: "Segundo Básico", profesor: "Prof. Virginia Zuñiga" },
      { nombre: "Tercero Básico", profesor: "Prof. Katherine Martínez" },
      { nombre: "Cuarto Básico", profesor: "Prof. Jocelyn Argandoña" },
      { nombre: "Quinto Básico", profesor: "Prof. Daniela Sanchez" },
      { nombre: "Sexto Básico", profesor: "Prof. --" },
      { nombre: "Séptimo Básico", profesor: "Prof. Anita Bello" },
      { nombre: "Octavo Básico", profesor: "Prof. Kurt Mella" }
    ]},
    { nivel: "Educación Media", lista: [
      { nombre: "Primero Medio", profesor: "Prof. --" },
      { nombre: "Segundo Medio", profesor: "Prof. Katerin Lagos" },
      { nombre: "Tercero Medio", profesor: "Prof. Alisson Molina" },
      { nombre: "Cuarto Medio", profesor: "Prof. Juan Vera" }
    ]}
  ];

  const abrirModal = (curso) => {
    setCursoSeleccionado(curso);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setCursoSeleccionado(null);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Niveles educacionales en nuestro establecimiento
      </h1>

      <p className="text-gray-700 text-lg text-center mb-8">
        En el Liceo de Melinka ofrecemos una educación integral desde la primera infancia hasta la enseñanza media, 
        brindando a nuestros estudiantes un entorno de aprendizaje enriquecedor y orientado al desarrollo de sus 
        habilidades académicas, artísticas y sociales. 
        
        Haz clic en un curso para ver el nombre de su profesor jefe.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cursos.map((seccion, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">{seccion.nivel}</h2>
            <ul className="space-y-2">
              {seccion.lista.map((curso, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => abrirModal(curso)}
                    className="text-lg text-black font-medium hover:text-blue-600 transition-colors"
                  >
                    {curso.nombre}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Modal para mostrar el profesor jefe */}
      {modalVisible && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={cerrarModal} // Cierra el modal al hacer clic fuera
        >
          <div 
            className="bg-white p-6 rounded-lg shadow-lg w-80 text-center"
            onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-4">{cursoSeleccionado.nombre}</h3>
            <p className="text-lg text-gray-700 mb-4">
              Profesor Jefe: <strong>{cursoSeleccionado.profesor}</strong>
            </p>
            <button 
              onClick={cerrarModal} 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
