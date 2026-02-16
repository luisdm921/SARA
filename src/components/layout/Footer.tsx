import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">SARA</h3>
            <p className="text-gray-400 mb-4">
              Servicios e Ingeniería SARA - Soluciones industriales de calidad
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="tel:8443900702"
                className="flex items-center text-gray-400 hover:text-accent transition-colors duration-300"
              >
                <FaPhone className="mr-3" />
                844 390 07 02
              </a>
              <a
                href="mailto:servicios.e.ingenieria.sara@gmail.com"
                className="flex items-center text-gray-400 hover:text-accent transition-colors duration-300"
              >
                <FaEnvelope className="mr-3" />
                servicios.e.ingenieria.sara@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/sara.industrial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com/sara_industrial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com/company/sara-industrial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Servicios e Ingeniería SARA. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
