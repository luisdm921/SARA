"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar el botón después de 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Mostrar tooltip automáticamente
      setTimeout(() => {
        setShowTooltip(true);
        // Ocultar tooltip después de 5 segundos
        setTimeout(() => setShowTooltip(false), 5000);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Mensaje predefinido opcional
    const message = encodeURIComponent(
      "Hola, me gustaría obtener más información sobre sus servicios industriales."
    );
    window.open(
      `https://wa.me/528443900702?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fadeInUp">
        {/* Tooltip */}
        {showTooltip && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs animate-slideInRight relative border-2 border-green-500">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Cerrar mensaje"
            >
              <FaTimes className="text-sm" />
            </button>
            <div className="flex items-start gap-3 pr-4">
              <div className="flex-shrink-0 bg-green-500 rounded-full p-2">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  ¿Necesitas ayuda?
                </p>
                <p className="text-sm text-gray-600">
                  Escríbenos por WhatsApp para información sobre nuestros
                  servicios industriales
                </p>
              </div>
            </div>
            {/* Flecha del tooltip */}
            <div className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-green-500 transform rotate-45"></div>
          </div>
        )}

        {/* Botón principal */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="group relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 md:p-5 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-pulse-slow"
          aria-label="Contactar por WhatsApp"
        >
          {/* Círculos de animación */}
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping" style={{ animationDelay: "1s" }}></span>
          
          {/* Icono */}
          <FaWhatsapp className="relative z-10 text-3xl md:text-4xl" />

          {/* Badge de notificación (opcional) */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
            1
          </span>
        </button>
      </div>

      {/* Estilos adicionales */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .fixed.bottom-6.right-6 {
            bottom: 1.5rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
};
