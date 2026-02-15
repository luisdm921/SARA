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
    },
    {
      icon: FaWrench,
      title: "Reparación de Equipo y Maquinaria",
      description:
        "Reparación profesional de equipo y maquinaria industrial.",
    },
    {
      icon: FaCog,
      title: "Mantenimiento Preventivo",
      description:
        "Mantenimiento preventivo a dobladoras, prensas, waterjet y mas.",
    },
    {
      icon: FaBolt,
      title: "Instalaciones",
      description:
        "Instalaciones neumáticas, hidráulicas y eléctricas.",
    },
    {
      icon: FaTools,
      title: "Fabricación de Tornillos de Bola",
      description:
        "Fabricación de tornillos de bola y reparación de husillos.",
    },
    {
      icon: FaTint,
      title: "Mantenimiento CNC",
      description:
        "Mantenimiento preventivo y correctivo a maquinaria CNC.",
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
              <Card key={index} className="text-center group">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <div className="text-center py-8">
              <h3 className="text-3xl font-bold mb-4">
                Servicios Adicionales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-center">
                  <FaWrench className="mr-2" />
                  <span>Reparación de Husillos</span>
                </div>
                <div className="flex items-center justify-center">
                  <FaCog className="mr-2" />
                  <span>Suministro de Refacciones</span>
                </div>
                <div className="flex items-center justify-center">
                  <FaTools className="mr-2" />
                  <span>Reacondicionamiento de Equipos</span>
                </div>
                <div className="flex items-center justify-center">
                  <FaBolt className="mr-2" />
                  <span>Instalaciones Industriales</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
