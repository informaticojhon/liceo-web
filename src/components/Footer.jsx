import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Logo del Liceo */}
        <div className="mb-6 md:mb-0">
          <Image 
            src="/logo.png" // Asegúrate de que el logo esté en public/logo.png
            alt="Liceo Melinka"
            width={150} 
            height={150}
          />
        </div>

        {/* Información de Contacto */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">Contactos</h3>
          <p className="text-gray-300 mt-2">
            📍 Costanera SN, Melinka, Región de Aysén, Chile.
          </p>
          <p className="text-gray-300 mt-1">
            📞 Tel.: +56 9 4273 9810
          </p>
          <p className="text-gray-300 mt-1">
            ✉️ <a href="mailto:administracion@liceomelinka.cl" className="underline">administracion@liceomelinka.cl</a>
          </p>
        </div>

        {/* Acerca de Nosotros */}
        <div className="text-center md:text-left max-w-md">
          <h3 className="text-xl font-bold">Acerca de nosotros</h3>
          <p className="text-gray-300 mt-2">
            Como institución funciona hace más de 76 años, teniendo como fecha de fundación el año 1944, 
            ya que existe documentación del año 1946 en la cual se registran alumnos de Primer a Tercer año 
            de Educación Primaria.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
