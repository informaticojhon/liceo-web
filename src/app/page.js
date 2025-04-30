"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
  "/images/slide6.jpg",
];

const linksDeInteres = [
  { nombre: "Mineduc", url: "https://www.mineduc.cl", logo: "/images/logos/mineduc.jpg" },
  { nombre: "DEMRE", url: "https://demre.cl", logo: "/images/logos/demre.png" },
  { nombre: "JUNAEB", url: "https://www.junaeb.cl", logo: "/images/logos/junaeb.png" },
  { nombre: "CPEIP", url: "https://www.cpeip.cl", logo: "/images/logos/cpeip.png" },
  { nombre: "Currículum Nacional", url: "https://www.curriculumnacional.cl", logo: "/images/logos/curriculumnacional.jpg" }
];

export default function Home() {
  return (
    <div className="container mx-auto p-10">
      {/* Título */}
      <motion.h1
        className="text-4xl font-bold text-blue-600 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenidos al Liceo Melinka
      </motion.h1>

      {/* Carrusel */}
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="w-full h-[700px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Links de Interés */}
      <motion.div 
        className="mt-12 py-10 bg-white border border-gray-300 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Links de Interés
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 text-center">
          {linksDeInteres.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition duration-300 hover:bg-blue-100"
            >
              <Image 
                src={link.logo}
                alt={link.nombre}
                width={130}
                height={130}
                className="mb-2"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Contador de visitas */}
      <div className="mt-12 text-center text-sm text-gray-600">
        <p className="mb-2">Contador de visitas</p>
        <img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwww.liceomelinka.cl&count_bg=%2379C83D&title_bg=%23555555&icon=google.svg&icon_color=%23E7E7E7&title=Visitas&edge_flat=false"
          alt="Contador de visitas"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
