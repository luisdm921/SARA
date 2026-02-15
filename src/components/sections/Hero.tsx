"use client";

import { Button } from "@/components/ui";
import { FaTools, FaCogs, FaIndustry, FaCheckCircle } from "react-icons/fa";

export const Hero = () => {
  const benefits = [
    "Mano de obra calificada",
    "Equipos de las mejores marcas",
    "Soluciones personalizadas",
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-slate-900/95"></div>

        {/* Animated blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div
            className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold">
              🏭 Soluciones Industriales de Calidad
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Servicios e Ingeniería
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              SARA
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Empresa mexicana enfocada en la solución de problemas dentro de la
            industria adaptándonos a las necesidades de los clientes.
          </p>

          {/* Benefits */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <FaCheckCircle className="text-cyan-300" />
                <span className="text-white text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="#servicios">
              <Button
                variant="secondary"
                className="w-full sm:w-auto text-lg px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white"
              >
                Ver Servicios
              </Button>
            </a>
            <a href="#contacto">
              <Button
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all"
              >
                Contactar
              </Button>
            </a>
          </div>

          {/* Floating Icons */}
          <div className="mt-16 flex justify-center space-x-12 opacity-50">
            <FaTools className="text-5xl text-white animate-float" />
            <FaCogs
              className="text-5xl text-white animate-float"
              style={{ animationDelay: "1s" }}
            />
            <FaIndustry
              className="text-5xl text-white animate-float"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
