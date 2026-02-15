"use client";

import { SectionHeader, Card } from "@/components/ui";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

export const About = () => {
  const values = [
    "Ética",
    "Servicio",
    "Calidad",
    "Excelencia",
    "Honestidad",
    "Disciplina",
    "Respeto",
  ];

  return (
    <section
      id="nosotros"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="¿Quiénes Somos?"
          subtitle="Empresa mexicana enfocada en la solución de problemas"
        />

        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Imagen */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <img
              src="/images/AboutUS.jpg"
              alt="Servicios e Ingeniería SARA"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Texto */}
          <Card className="card-hover bg-gradient-to-br from-white to-blue-50/50 border-blue-100 h-full flex flex-col justify-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Empresa mexicana enfocada en la solución de problemas dentro de la
              industria adaptándonos a las necesidades de los clientes y
              haciendo uso de herramienta, personal y mano de obra calificada.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Ofrecemos servicio de mantenimiento preventivo, correctivo y
              reacondicionamiento de equipos, así como también suministro de
              refacciones; contamos con las mejores marcas y modelos en equipos.
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Misión */}
          <Card className="text-center card-hover bg-gradient-to-br from-blue-50 to-white border-blue-200 group">
            <div className="bg-gradient-to-br from-primary to-blue-700 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FaBullseye className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Proporcionar servicios y productos de calidad, brindando el mejor
              servicio del mercado ofreciendo a nuestros clientes la seguridad y
              confianza de nuestro trabajo.
            </p>
          </Card>

          {/* Visión */}
          <Card className="text-center card-hover bg-gradient-to-br from-cyan-50 to-white border-cyan-200 group">
            <div className="bg-gradient-to-br from-secondary to-cyan-700 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FaEye className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              Expandir nuestra presencia y liderazgo en las áreas de desarrollo
              más importantes de la República Mexicana.
            </p>
          </Card>

          {/* Valores */}
          <Card className="text-center card-hover bg-gradient-to-br from-slate-50 to-white border-slate-200 group">
            <div className="bg-gradient-to-br from-accent to-slate-700 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <FaHeart className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {values.map((value) => (
                <span
                  key={value}
                  className="bg-gradient-to-r from-blue-100 to-cyan-100 text-primary px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-200 shadow-sm"
                >
                  {value}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
