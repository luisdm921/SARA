import { SectionHeader } from "@/components/ui";

export const Brands = () => {
  // Basado en el PDF, aquí se pueden agregar las marcas específicas cuando se tengan los logos
  const brandCategories = [
    {
      title: "Maquinaria Industrial",
      items: ["CNC", "Dobladoras", "Prensas", "Waterjet"],
    },
    {
      title: "Sistemas Especializados",
      items: ["Tornillos de Bola", "Husillos", "Sistemas Neumáticos", "Sistemas Hidráulicos"],
    },
  ];

  return (
    <section id="marcas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Marcas con las que Trabajamos"
          subtitle="Equipos y refacciones de las mejores marcas del mercado"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {brandCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-700 text-lg"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Contamos con las mejores marcas y modelos en equipos industriales
          </p>
        </div>
      </div>
    </section>
  );
};
