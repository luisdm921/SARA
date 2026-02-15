import { Button } from "@/components/ui";
import { FaTools, FaCogs, FaIndustry } from "react-icons/fa";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <FaTools className="text-6xl text-accent animate-bounce" />
            <FaCogs className="text-6xl text-accent animate-spin-slow" />
            <FaIndustry className="text-6xl text-accent animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Servicios e Ingeniería <span className="text-accent">SARA</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Soluciones industriales de calidad. Mantenimiento preventivo,
            correctivo y reacondicionamiento de equipos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#servicios">
              <Button variant="secondary" className="w-full sm:w-auto">
                Ver Servicios
              </Button>
            </a>
            <a href="#contacto">
              <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                Contactar
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
