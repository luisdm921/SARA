import { SectionHeader, Button } from "@/components/ui";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contacto"
          subtitle="Estamos listos para atender tus necesidades industriales"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-accent p-4 rounded-lg">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                <a
                  href="tel:8443900702"
                  className="text-blue-200 hover:text-accent transition-colors duration-300 text-lg"
                >
                  844 390 07 02
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-accent p-4 rounded-lg">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a
                  href="mailto:servicios.e.ingenieria.sara@gmail.com"
                  className="text-blue-200 hover:text-accent transition-colors duration-300 break-all"
                >
                  servicios.e.ingenieria.sara@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-accent p-4 rounded-lg">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
                <p className="text-blue-200">
                  República Mexicana
                </p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6 text-center">
              ¿Necesitas una Cotización?
            </h3>
            <p className="text-blue-100 mb-8 text-center text-lg">
              Contáctanos y te brindaremos una solución personalizada para tus
              necesidades industriales.
            </p>
            <div className="space-y-4">
              <a
                href="tel:8443900702"
                className="block w-full"
              >
                <Button
                  variant="secondary"
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <FaPhone />
                  <span>Llamar Ahora</span>
                </Button>
              </a>
              <a
                href="https://wa.me/528443900702"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button
                  variant="primary"
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </Button>
              </a>
              <a
                href="mailto:servicios.e.ingenieria.sara@gmail.com"
                className="block w-full"
              >
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  <FaEnvelope />
                  <span>Enviar Email</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
