"use client";

import { useState } from "react";
import { SectionHeader, Button } from "@/components/ui";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Crear el cuerpo del email con todos los datos del formulario
      const emailBody = `
Nombre: ${formData.nombre}
Teléfono: ${formData.telefono}
Email: ${formData.email}

Mensaje:
${formData.mensaje}
      `.trim();

      const mailtoLink = `mailto:servicios.e.ingenieria.sara@gmail.com?subject=Contacto desde la web - ${formData.nombre}&body=${encodeURIComponent(emailBody)}`;

      // Abrir el cliente de correo del usuario
      window.location.href = mailtoLink;

      // Limpiar el formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
      });

      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Teléfono
                  </h3>
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
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Email
                  </h3>
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
                <div className="bg-green-600 p-4 rounded-xl shadow-lg">
                  <FaWhatsapp className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/528443900702"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300 text-lg font-medium"
                  >
                    844 390 07 02
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-6 text-center text-white">
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-blue-100 mb-2"
                >
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-100 mb-2"
                >
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-blue-100 mb-2"
                >
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="844 123 4567"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-blue-100 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane />
                <span>
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </span>
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <p className="text-green-400 text-center text-sm">
                  ¡Gracias! Tu mensaje se ha enviado correctamente.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center text-sm">
                  Hubo un error al enviar el mensaje. Por favor, inténtalo de
                  nuevo.
                </p>
              )}
            </form>

            {/* Alternative Contact Methods */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-blue-100 text-center text-sm mb-3">
                O contáctanos directamente:
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="tel:8443900702"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Llamar"
                >
                  <FaPhone />
                </a>
                <a
                  href="https://wa.me/528443900702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
