"use client";

import { SectionHeader, Button } from "@/components/ui";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contacto" className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900"></div>
      
      {/* Animated blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute -bottom-8 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="contact-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#contact-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contacto
          </h2>
          <p className="text-xl text-blue-200">
            Estamos listos para atender tus necesidades industriales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-500 p-4 rounded-xl shadow-lg">
                  <FaPhone className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Teléfono</h3>
                  <a
                    href="tel:8443900702"
                    className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300 text-lg font-medium"
                  >
                    844 390 07 02
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-500 p-4 rounded-xl shadow-lg">
                  <FaEnvelope className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                  <a
                    href="mailto:servicios.e.ingenieria.sara@gmail.com"
                    className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300 break-all text-sm md:text-base"
                  >
                    servicios.e.ingenieria.sara@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-500 p-4 rounded-xl shadow-lg">
                  <FaMapMarkerAlt className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Ubicación</h3>
                  <p className="text-cyan-300">
                    República Mexicana
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center border border-white/20">
            <h3 className="text-3xl font-bold mb-6 text-center text-white">
              ¿Necesitas una Cotización?
            </h3>
            <p className="text-blue-100 mb-8 text-center text-lg">
              Contáctanos y te brindaremos una solución personalizada para tus necesidades industriales.
            </p>
            <div className="space-y-4">
              <a
                href="tel:8443900702"
                className="block w-full"
              >
                <Button
                  variant="secondary"
                  className="w-full flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-xl transition-all"
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
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp</span>
                </Button>
              </a>
              <a
                href="mailto:servicios.e.ingenieria.sara@gmail.com"
                className="block w-full"
              >
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 shadow-lg hover:shadow-xl transition-all"
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

