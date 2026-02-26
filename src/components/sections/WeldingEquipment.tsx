"use client";

import { useState, useEffect } from "react";
import { SectionHeader } from "@/components/ui";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const WeldingEquipment = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Array de equipos de soldadura
  const equipment = [
    {
      id: 1,
      image: "/images/welding-equipment/soldadora-mig-2.webp",
    },
    {
      id: 2,
      image: "/images/welding-equipment/soldadora-tig-1.webp",
    },
    {
      id: 3,
      image: "/images/welding-equipment/soldadora-tig-2.webp",
    },
    {
      id: 4,
      image: "/images/welding-equipment/soldadora-arco-1.webp",
    },
    {
      id: 5,
      image: "/images/welding-equipment/soldadora-multiproceso-1.webp",
    },
    {
      id: 6,
      image: "/images/welding-equipment/soldadora-orbital-1.webp",
    },
    {
      id: 7,
      image: "/images/welding-equipment/soldadora-resistencia-1.webp",
    },
    {
      id: 8,
      image: "/images/welding-equipment/soldadora-laser-1.webp",
    },
    {
      id: 9,
      image: "/images/welding-equipment/plasma-cutter-1.webp",
    },
    {
      id: 10,
      image: "/images/welding-equipment/generador-soldadura-1.webp",
    },
    {
      id: 11,
      image: "/images/welding-equipment/extractor-humos-soldadura-1.webp",
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
    <section
      id="equipos-soldadura"
      className="py-20 bg-gradient-to-br from-orange-50 to-red-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Equipos de Soldadura"
          subtitle="Distribuidor autorizado de maquinaria y consumibles para soldadura industrial"
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
              <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-gray-100 w-full aspect-square max-w-[400px] mx-auto">
                <img
                  src={item.image}
                  alt={`Equipo de soldadura ${item.id}`}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-4"
                />

                {/* Overlay con efecto glass */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              className="absolute top-6 right-6 text-white hover:text-orange-400 transition-colors duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 z-10"
              onClick={() => setSelectedIndex(null)}
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Botón anterior */}
            <button
              className="absolute left-6 text-white hover:text-orange-400 transition-colors duration-300 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            {/* Botón siguiente */}
            <button
              className="absolute right-6 text-white hover:text-orange-400 transition-colors duration-300 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 z-10"
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
                alt={`Equipo de soldadura ${selectedIndex + 1}`}
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
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 shadow-2xl overflow-hidden relative rounded-2xl p-8">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <pattern
                  id="welding-pattern"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="1" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#welding-pattern)" />
              </svg>
            </div>

            <div className="relative z-10 py-8">
              <h3 className="text-3xl font-bold mb-4">
                ¿Buscas equipo de soldadura profesional?
              </h3>
              <p className="text-xl mb-6 text-orange-100">
                Somos distribuidores autorizados de las mejores marcas de
                soldadura
              </p>
              <a
                href="#contacto"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
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
