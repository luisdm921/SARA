"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaIndustry, FaChevronDown } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#marcas", label: "Marcas" },
  ];

  const productLinks = [
    { href: "#maquinaria", label: "Maquinaria CNC" },
    { href: "#equipo-seminuevo", label: "Maquinaria de Transformación" },
    { href: "#equipos-soldadura", label: "Equipos de Soldadura" },
    { href: "#mro-consumibles", label: "MRO & Consumibles" },
    { href: "#uhp-componentes", label: "Componentes UHP" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsMobileProductsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full transition-all duration-500 ${
          isOpen ? "z-[60]" : "z-50"
        } ${
          isScrolled
            ? "bg-white shadow-lg py-3"
            : "bg-gradient-to-r from-blue-900/95 to-slate-900/95 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className={`transition-all duration-300 ${
                  isScrolled ? "text-primary" : "text-cyan-400"
                }`}
              >
                <FaIndustry className="text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                    isScrolled ? "text-slate-800" : "text-white"
                  }`}
                >
                  SARA
                </span>
                <span
                  className={`text-xs transition-colors duration-300 ${
                    isScrolled ? "text-primary" : "text-cyan-300"
                  }`}
                >
                  Servicios e Ingeniería
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-slate-700 hover:bg-blue-50 hover:text-primary"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* Productos Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 ${
                    isScrolled
                      ? "text-slate-700 hover:bg-blue-50 hover:text-primary"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Productos
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                    isProductsOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {productLinks.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsProductsOpen(false)}
                      className="block px-5 py-3 text-slate-700 hover:bg-blue-50 hover:text-primary transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {navLinks.slice(3).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-slate-700 hover:bg-blue-50 hover:text-primary"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contacto"
                className={`ml-4 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  isScrolled
                    ? "bg-gradient-to-r from-primary to-blue-700 text-white hover:from-blue-700 hover:to-primary"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400"
                }`}
              >
                Contacto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-2xl relative z-[60] p-2 hover:scale-110 transition-transform"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes
                  className={`transition-colors ${
                    isScrolled ? "text-slate-700" : "text-white"
                  }`}
                />
              ) : (
                <FaBars
                  className={`transition-colors ${
                    isScrolled ? "text-slate-700" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 z-[55] transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern
              id="mobile-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#mobile-pattern)" />
          </svg>
        </div>

        {/* Animated Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div
            className="absolute -bottom-8 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Menu Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 px-4">
          {/* Navigation Links */}
          {navLinks.slice(0, 3).map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-2xl font-semibold transition-all hover:text-cyan-300 hover:scale-110"
              onClick={handleLinkClick}
              style={{
                animation: isOpen
                  ? `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Products Expandable */}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className="text-white text-2xl font-semibold transition-all hover:text-cyan-300 hover:scale-110 flex items-center gap-2"
              style={{
                animation: isOpen ? `fadeInUp 0.5s ease-out 0.3s both` : "none",
              }}
            >
              Productos
              <FaChevronDown
                className={`text-lg transition-transform duration-300 ${
                  isMobileProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Submenu Products - Mismo estilo que items principales */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
                isMobileProductsOpen ? "max-h-[600px] mt-4" : "max-h-0"
              }`}
            >
              <div className="space-y-6 flex flex-col items-center">
                {productLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white text-2xl font-semibold transition-all hover:text-cyan-300 hover:scale-110"
                    onClick={handleLinkClick}
                    style={{
                      animation: isMobileProductsOpen
                        ? `fadeInUp 0.5s ease-out ${(index + 0.4) * 0.1}s both`
                        : "none",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(3).map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-2xl font-semibold transition-all hover:text-cyan-300 hover:scale-110"
              onClick={handleLinkClick}
              style={{
                animation: isOpen
                  ? `fadeInUp 0.5s ease-out ${(index + 4) * 0.1}s both`
                  : "none",
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold text-lg transition-all hover:from-cyan-400 hover:to-blue-400 hover:scale-110 shadow-2xl"
            style={{
              animation: isOpen ? `fadeInUp 0.5s ease-out 0.6s both` : "none",
            }}
          >
            Contacto
          </a>
        </div>
      </div>
    </>
  );
};
