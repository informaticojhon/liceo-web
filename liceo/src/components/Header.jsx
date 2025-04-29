"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi"; // Iconos de menú y cerrar

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isMenuTransparent, setIsMenuTransparent] = useState(false);
  const menuRef = useRef(null);

  // Detectar scroll para cambiar la transparencia del menú
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsMenuTransparent(footerTop <= windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const menuItems = [
    { name: "Inicio", link: "/" }, // Solo este redirige
    { 
      name: "Nuestro Liceo", 
      submenu: [
        { name: "Docentes", link: "/liceo/docentes" },
        { name: "Historia", link: "/liceo/historia" },
        { name: "Misión", link: "/liceo/mision" },
        { name: "Organigrama", link: "/liceo/organigrama" },
        { name: "Reglamento", link: "/liceo/reglamento" }
      ] 
    },
    { 
      name: "Estudiantes", 
      submenu: [
        { name: "Centro de Alumnos", link: "/estudiantes/centro-alumnos" },
        { name: "Cursos", link: "/estudiantes/cursos" },
        { name: "PACE", link: "/estudiantes/pace" }
      ] 
    },
    { 
      name: "Convivencia Escolar", 
      submenu: [
        { name: "Encargado de Convivencia", link: "/convivencia/encargado" },
        { name: "Reglamento de Convivencia", link: "/convivencia/reglamento" }
      ] 
    }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-500 ${
        isMenuTransparent ? "bg-transparent backdrop-blur-lg shadow-none" : "bg-white shadow-md"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        
        {/* LOGO */}
        <Link href="/" passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 flex-shrink-0 cursor-pointer"
          >
            <Image 
              src="/logo.png" 
              alt="Liceo Melinka" 
              width={180}  
              height={100} 
              priority
              className="w-auto h-auto max-w-[110px] md:max-w-[100px]"
            />
          </motion.div>
        </Link>

        {/* BOTÓN MENÚ HAMBURGUESA PARA MÓVILES */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
            {isMenuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </button>
        </div>

        {/* MENÚ EN ESCRITORIO */}
        <nav ref={menuRef} className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {item.submenu ? (
                <button
                  onClick={() => toggleMenu(index)}
                  className="text-black font-medium hover:text-blue-600 transition-colors px-3 py-2 block"
                >
                  {item.name}
                </button>
              ) : (
                <Link href={item.link} passHref>
                  <button className="text-black font-medium hover:text-blue-600 transition-colors px-3 py-2 block">
                    {item.name}
                  </button>
                </Link>
              )}
              
              {/* SUBMENÚ */}
              {openMenu === index && item.submenu && (
                <motion.div 
                  className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <Link 
                      key={subIndex} 
                      href={subItem.link} 
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </nav>

        {/* MENÚ EN MÓVILES */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 flex flex-col p-5 md:hidden"
            >
              <button onClick={() => setIsMenuOpen(false)} className="self-end mb-4">
                <HiX size={32} />
              </button>
              
              {menuItems.map((item, index) => (
                <div key={index} className="mb-4">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleMenu(index)}
                        className="text-black font-medium hover:text-blue-600 transition-colors w-full text-left"
                      >
                        {item.name}
                      </button>
                      {openMenu === index && (
                        <div className="mt-2 space-y-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link key={subIndex} href={subItem.link} className="block px-4 text-gray-700 hover:bg-gray-100">
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.link} className="block text-black font-medium hover:text-blue-600">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
