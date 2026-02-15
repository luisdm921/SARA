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
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="¿Quiénes Somos?"
          subtitle="Empresa mexicana enfocada en la solución de problemas"
        />

        <div className="mb-16">
          <Card>
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos una empresa mexicana enfocada en la solución de problemas
              dentro de la industria, adaptándonos a las necesidades de los
              clientes y haciendo uso de herramienta, personal y mano de obra
              calificada.
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
          <Card className="text-center">
            <FaBullseye className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-700">
              Proporcionar servicios y productos de calidad, brindando el mejor
              servicio del mercado ofreciendo a nuestros clientes la seguridad y
              confianza de nuestro trabajo.
            </p>
          </Card>

          {/* Visión */}
          <Card className="text-center">
            <FaEye className="text-5xl text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-700">
              Expandir nuestra presencia y liderazgo en las áreas de desarrollo
              más importantes de la República Mexicana.
            </p>
          </Card>

          {/* Valores */}
          <Card className="text-center">
            <FaHeart className="text-5xl text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {values.map((value) => (
                <span
                  key={value}
                  className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium"
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
