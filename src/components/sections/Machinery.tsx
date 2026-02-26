"use client";

import { useState, useEffect } from "react";
import { SectionHeader, Card } from "@/components/ui";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Machinery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Array de máquinas CNC
  const machines = [
    {
      id: 1,
      image: "/images/machinery/cnc-torno-1.webp",
    },
    {
      id: 2,
      image: "/images/machinery/cnc-fresadora-1.webp",
    },
    {
      id: 3,
      image: "/images/machinery/cnc-torno-2.webp",
    },
  ];

  // Funciones de navegación
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + machines.length) % machines.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % machines.length);
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
      id="maquinaria"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Maquinaria CNC"
          subtitle="Equipos nuevos y de segundo uso de las mejores marcas"
        />

        {/* Galería moderna */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((machine, index) => (
            <div
              key={machine.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Imagen */}
              <div
                className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100 w-full aspect-square max-w-[400px] mx-auto"
              >
                <img
                  src={machine.image}
                  alt={`Maquinaria CNC ${machine.id}`}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-4"
                />

                {/* Overlay con efecto glass */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 z-10"
              onClick={() => setSelectedIndex(null)}
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Botón anterior */}
            <button
              className="absolute left-6 text-white hover:text-cyan-400 transition-colors duration-300 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            {/* Botón siguiente */}
            <button
              className="absolute right-6 text-white hover:text-cyan-400 transition-colors duration-300 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 z-10"
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
                src={machines[selectedIndex].image}
                alt={`Maquinaria CNC ${selectedIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Contador */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {selectedIndex + 1} / {machines.length}
              </div>
            </div>
          </div>
        )}

        {/* CTA para contactar */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary to-blue-700 text-white border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <pattern
                  id="machinery-pattern"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="1" fill="white" />
                </pattern>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#machinery-pattern)"
                />
              </svg>
            </div>

            <div className="relative z-10 py-8">
              <h3 className="text-3xl font-bold mb-4">
                ¿Buscas una máquina específica?
              </h3>
              <p className="text-xl mb-6 text-blue-100">
                Contamos con un amplio catálogo de maquinaria CNC nueva y de
                segundo uso
              </p>
              <a
                href="#contacto"
                className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Solicitar Cotización
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
