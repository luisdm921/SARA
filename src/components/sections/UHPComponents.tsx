"use client";

import { useState, useEffect } from "react";
import { SectionHeader } from "@/components/ui";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";

export const UHPComponents = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Array de componentes UHP
  const components = [
    {
      id: 1,
      image: "/images/uhp/componentes-uhp-bomba-intensificadora-1.webp",
    },
    {
      id: 2,
      image: "/images/uhp/sellos-alta-presion-1.webp",
    },
    {
      id: 3,
      image: "/images/uhp/cartuchos-presion-succion-1.webp",
    },
    {
      id: 4,
      image: "/images/uhp/tubos-enfoque-orificios-1.webp",
    },
    {
      id: 5,
      image: "/images/uhp/valvulas-cabezal-uhp-1.webp",
    },
    {
      id: 6,
      image: "/images/uhp/consumibles-waterjet-1.webp",
    },
    {
      id: 7,
      image: "/images/uhp/refacciones-uhp-industriales-1.webp",
    },
    {
      id: 8,
      image: "/images/uhp/componentes-hidraulicos-uhp-1.webp",
    },
  ];

  // Lista de productos/servicios ofrecidos
  const offerings = [
    "Componentes hidráulicos y de ultra alta presión",
    "Elementos de sellado para bombas intensificadoras",
    "Cartuchos de presión y succión",
    "Tubos de enfoque y orificios de precisión",
    "Válvulas y componentes internos de cabezal",
    "Consumibles críticos para mantenimiento preventivo y correctivo",
    "Refacciones para sistemas UHP industriales",
  ];

  // Funciones de navegación
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + components.length) % components.length,
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % components.length);
    }
  };

  // Soporte para teclas del teclado
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedIndex]);

  return (
    <section
      id="uhp-componentes"
      className="py-20 bg-gradient-to-br from-sky-50 to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Componentes UHP"
          subtitle="Componentes especializados para sistemas de corte por agua (Waterjet) y equipos de ultra alta presión"
        />

        {/* Intro descriptiva */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg text-center leading-relaxed mb-8">
            En Servicios e Ingeniería Sara suministramos componentes
            especializados para sistemas de corte por agua y equipos de ultra
            alta presión, enfocados en la industria metal-mecánica de Saltillo y
            su zona industrial.
          </p>

          {/* Lista de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm border border-sky-100"
              >
                <FaCheckCircle className="text-sky-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-center mt-8 text-sm leading-relaxed max-w-3xl mx-auto">
            Trabajamos con especificaciones técnicas compatibles con las
            principales marcas del mercado, garantizando confiabilidad
            operativa, precisión de corte y reducción de tiempos muertos.
          </p>
        </div>

        {/* Galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Imagen */}
              <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-gray-100 w-full aspect-square max-w-[400px] mx-auto">
                <img
                  src={item.image}
                  alt={`Componente UHP ${item.id}`}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-4"
                />

                {/* Overlay con efecto glass */}
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Botón cerrar */}
            <button
              className="absolute top-6 right-6 text-white hover:text-sky-400 transition-colors duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 z-10"
              onClick={() => setSelectedIndex(null)}
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Botón anterior */}
            <button
              className="absolute left-6 text-white hover:text-sky-400 transition-colors duration-300 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            {/* Botón siguiente */}
            <button
              className="absolute right-6 text-white hover:text-sky-400 transition-colors duration-300 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <FaChevronRight className="text-2xl" />
            </button>

            {/* Imagen */}
            <div className="relative max-w-6xl max-h-[90vh] animate-slideUp">
              <img
                src={components[selectedIndex].image}
                alt={`Componente UHP ${selectedIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Contador */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {selectedIndex + 1} / {components.length}
              </div>
            </div>
          </div>
        )}

        {/* CTA para contactar */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-sky-600 to-cyan-600 text-white border-0 shadow-2xl overflow-hidden relative rounded-2xl p-8">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <pattern
                  id="uhp-pattern"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="1" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#uhp-pattern)" />
              </svg>
            </div>

            <div className="relative z-10 py-8">
              <h3 className="text-3xl font-bold mb-4">
                ¿Necesitas componentes UHP para tu operación?
              </h3>
              <p className="text-xl mb-4 text-sky-100">
                Brindamos asesoría técnica para correcta selección,
                compatibilidad y optimización del rendimiento de sus equipos
              </p>
              <p className="text-base mb-6 text-sky-200">
                Atendemos requerimientos de mantenimiento industrial, compras
                MRO y paros programados con tiempos de respuesta ágiles en la
                región Sureste de Coahuila
              </p>
              <a
                href="#contacto"
                className="inline-block bg-white text-sky-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
