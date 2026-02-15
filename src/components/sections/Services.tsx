"use client";

import { SectionHeader, Card } from "@/components/ui";
import {
  FaWrench,
  FaCog,
  FaHammer,
  FaBolt,
  FaTint,
  FaTools,
} from "react-icons/fa";

export const Services = () => {
  const services = [
    {
      icon: FaHammer,
      title: "Herrería y Pailería",
      description:
        "Servicios especializados en herrería y pailería industrial.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-white",
      borderColor: "border-blue-200",
      image: "/images/Herreria-y-Paileria.jpg",
    },
    {
      icon: FaWrench,
      title: "Reparación de Equipo y Maquinaria",
      description: "Reparación profesional de equipo y maquinaria industrial.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "from-cyan-50 to-white",
      borderColor: "border-cyan-200",
      image: "/images/Reparacion-Equipo-Maquinaria.jpg",
    },
    {
      icon: FaCog,
      title: "Mantenimiento Preventivo",
      description:
        "Mantenimiento preventivo a dobladoras, prensas, waterjet y mas.",
      color: "from-slate-500 to-slate-600",
      bgColor: "from-slate-50 to-white",
      borderColor: "border-slate-200",
      image: "/images/Mantenimiento-Preventivo-Dobladoras.jpg",
    },
    {
      icon: FaBolt,
      title: "Instalaciones",
      description: "Instalaciones neumáticas, hidráulicas y eléctricas.",
      color: "from-yellow-500 to-amber-600",
      bgColor: "from-yellow-50 to-white",
      borderColor: "border-yellow-200",
      image: "/images/Instalacione-Neumaticas.jpg",
    },
    {
      icon: FaTools,
      title: "Fabricación de Tornillos de Bola",
      description: "Fabricación de tornillos de bola y reparación de husillos.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-white",
      borderColor: "border-indigo-200",
      image: "/images/Fabricacion-Tornillos.jpg",
    },
    {
      icon: FaTint,
      title: "Mantenimiento CNC",
      description: "Mantenimiento preventivo y correctivo a maquinaria CNC.",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-white",
      borderColor: "border-purple-200",
      image: "/images/Mantenimineto-Correctivo-Preventivo-Maquinarias.jpg",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nuestros Servicios"
          subtitle="Soluciones integrales para la industria"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`overflow-hidden card-hover bg-gradient-to-br ${service.bgColor} ${service.borderColor} group`}
              >
                {/* Imagen del servicio */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6 text-center">
                  <div
                    className={`bg-gradient-to-br ${service.color} text-white w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
