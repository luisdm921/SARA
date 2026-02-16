"use client";

import { SectionHeader } from "@/components/ui";

export const Brands = () => {
  // Logos optimizados de marcas
  const brands = [
    {
      name: "BFT",
      logo: "/images/logos_marcas_optimized/BFT23002-1-USA-RGB_Logo-Unterzeile.webp",
    },
    { name: "Dixon", logo: "/images/logos_marcas_optimized/Dixon_logo.webp" },
    { name: "EXAIR", logo: "/images/logos_marcas_optimized/EXAIR_LOGO.webp" },
    { name: "Flow", logo: "/images/logos_marcas_optimized/Flow_logo.webp" },
    {
      name: "KMT Group",
      logo: "/images/logos_marcas_optimized/KMT_Group__Logo.webp",
    },
    {
      name: "Loctite",
      logo: "/images/logos_marcas_optimized/Loctite_logo.webp",
    },
    {
      name: "LyndexNikken",
      logo: "/images/logos_marcas_optimized/LyndexNikken_logo.webp",
    },
    {
      name: "Mobile",
      logo: "/images/logos_marcas_optimized/mobile-logo-png-1358.webp",
    },
    { name: "OMAX", logo: "/images/logos_marcas_optimized/omax-logo.webp" },
    { name: "Sandvik", logo: "/images/logos_marcas_optimized/Sandvik.webp" },
    {
      name: "Semyx",
      logo: "/images/logos_marcas_optimized/semyx-header-logo.webp",
    },
    {
      name: "Toolmex",
      logo: "/images/logos_marcas_optimized/TOOLMEX-LOGO.webp",
    },
  ];

  // Duplicar marcas para efecto infinito
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section
      id="marcas"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Marcas con las que Trabajamos"
          subtitle="Equipos y refacciones de las mejores marcas del mercado"
        />

        {/* Carrusel infinito superior */}
        <div className="relative mt-12 mb-8">
          {/* Degradado izquierdo */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>

          {/* Degradado derecho */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Contenedor del carrusel */}
          <div className="flex overflow-hidden">
            {/* Primera fila - animación de izquierda a derecha */}
            <div className="flex animate-scroll-left">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 mx-6 w-48 h-32 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center p-6 group"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    loading="lazy"
                    width={192}
                    height={128}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de logos para dispositivos pequeños */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 lg:hidden">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center p-6 h-32 group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                width={192}
                height={128}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto border border-blue-100">
            <p className="text-gray-700 text-lg font-medium">
              Distribuidores autorizados de las mejores marcas del mercado
              industrial
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
