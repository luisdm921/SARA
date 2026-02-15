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
    },
    {
      icon: FaWrench,
      title: "Reparación de Equipo y Maquinaria",
      description:
        "Reparación profesional de equipo y maquinaria industrial.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "from-cyan-50 to-white",
      borderColor: "border-cyan-200",
    },
    {
      icon: FaCog,
      title: "Mantenimiento Preventivo",
      description:
        "Mantenimiento preventivo a dobladoras, prensas, waterjet y mas.",
      color: "from-slate-500 to-slate-600",
      bgColor: "from-slate-50 to-white",
      borderColor: "border-slate-200",
    },
    {
      icon: FaBolt,
      title: "Instalaciones",
      description:
        "Instalaciones neumáticas, hidráulicas y eléctricas.",
      color: "from-yellow-500 to-amber-600",
      bgColor: "from-yellow-50 to-white",
      borderColor: "border-yellow-200",
    },
    {
      icon: FaTools,
      title: "Fabricación de Tornillos de Bola",
      description:
        "Fabricación de tornillos de bola y reparación de husillos.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-white",
      borderColor: "border-indigo-200",
    },
    {
      icon: FaTint,
      title: "Mantenimiento CNC",
      description:
        "Mantenimiento preventivo y correctivo a maquinaria CNC.",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-white",
      borderColor: "border-purple-200",
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
                className={`text-center card-hover bg-gradient-to-br ${service.bgColor} ${service.borderColor} group`}
              >
                <div className={`bg-gradient-to-br ${service.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white border-0 shadow-2xl overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <pattern
                  id="services-pattern"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="1" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#services-pattern)" />
              </svg>
            </div>

            <div className="relative z-10 text-center py-8">
              <h3 className="text-3xl font-bold mb-6">
                Servicios Adicionales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <FaWrench className="mr-3 text-xl text-cyan-300" />
                  <span className="font-medium">Reparación de Husillos</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <FaCog className="mr-3 text-xl text-cyan-300" />
                  <span className="font-medium">Suministro de Refacciones</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <FaTools className="mr-3 text-xl text-cyan-300" />
                  <span className="font-medium">Reacondicionamiento de Equipos</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <FaBolt className="mr-3 text-xl text-cyan-300" />
                  <span className="font-medium">Instalaciones Industriales</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

