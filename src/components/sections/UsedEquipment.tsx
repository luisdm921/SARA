"use client";

import { useState, useEffect } from "react";
import { SectionHeader } from "@/components/ui";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const UsedEquipment = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Array de equipos seminuevos
  const equipment = [
    {
      id: 1,
      image: "/images/used-equipment/torno-seminuevo-1.webp",
    },
    {
      id: 2,
      image: "/images/used-equipment/torno-seminuevo-2.webp",
    },
    {
      id: 3,
      image: "/images/used-equipment/fresadora-seminueva-1.webp",
    },
    {
      id: 4,
      image: "/images/used-equipment/rectificadora-seminueva-1.webp",
    },
    {
      id: 5,
      image: "/images/used-equipment/dobladora-seminueva-1.webp",
    },
    {
      id: 6,
      image: "/images/used-equipment/cortadora-seminueva-1.webp",
    },
    {
      id: 7,
      image: "/images/used-equipment/prensa-hidraulica-seminueva-1.webp",
    },
    {
      id: 8,
      image: "/images/used-equipment/taladro-columna-seminuevo-1.webp",
    },
  ];

  // Funciones de navegación
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + equipment.length) % equipment.length,
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % equipment.length);
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
    <section id="equipo-seminuevo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Maquinaria de Transformación"
          subtitle="Maquinaria reacondicionada para transformación de metales"
        />

        {/* Galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Imagen */}
              <div
                className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100"
                style={{ width: "400px", height: "400px" }}
              >
                <img
                  src={item.image}
                  alt={`Equipo seminuevo ${item.id}`}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-4"
                />

                {/* Overlay con efecto glass */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                src={equipment[selectedIndex].image}
                alt={`Equipo seminuevo ${selectedIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Contador */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {selectedIndex + 1} / {equipment.length}
              </div>
            </div>
          </div>
        )}

        {/* CTA para contactar */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white border-0 shadow-2xl overflow-hidden relative rounded-2xl p-8">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <pattern
                  id="used-equipment-pattern"
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
                  fill="url(#used-equipment-pattern)"
                />
              </svg>
            </div>

            <div className="relative z-10 py-8">
              <h3 className="text-3xl font-bold mb-4">
                ¿Necesitas equipo para tu planta?
              </h3>
              <p className="text-xl mb-6 text-slate-200">
                Contamos con inventario actualizado de maquinaria
                reacondicionada certificada
              </p>
              <a
                href="#contacto"
                className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Consultar Disponibilidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
