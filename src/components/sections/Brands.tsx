"use client";

import { SectionHeader } from "@/components/ui";
import { FaIndustry, FaCog } from "react-icons/fa";

export const Brands = () => {
  // Basado en el PDF, aquí se pueden agregar las marcas específicas cuando se tengan los logos
  const brandCategories = [
    {
      icon: FaIndustry,
      title: "Maquinaria Industrial",
      items: ["CNC", "Dobladoras", "Prensas", "Waterjet"],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-white",
    },
    {
      icon: FaCog,
      title: "Sistemas Especializados",
      items: [
        "Tornillos de Bola",
        "Husillos",
        "Sistemas Neumáticos",
        "Sistemas Hidráulicos",
      ],
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-50 to-white",
    },
  ];

  return (
    <section
      id="marcas"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Marcas con las que Trabajamos"
          subtitle="Equipos y refacciones de las mejores marcas del mercado"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {brandCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.bgGradient} rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-blue-100`}
              >
                <div
                  className={`bg-gradient-to-br ${category.gradient} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <Icon className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 text-lg hover:text-blue-600 transition-colors duration-200"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto border border-blue-100">
            <p className="text-gray-700 text-lg font-medium">
              Contamos con las mejores marcas y modelos en equipos industriales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
