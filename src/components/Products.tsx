import ProductCard from "./ProductCard";
import motoXjl from "@/assets/moto-xjl.jpg";
import motoF60 from "@/assets/moto-f60.jpg";
import motoGalaxy from "@/assets/moto-galaxy.jpg";
import motoT9super from "@/assets/moto-t9super.jpg";

const Products = () => {
  const products = [
    {
      name: "XJL",
      image: motoXjl,
      price: "$9,850.00",
      specs: {
        motor: "500W",
        velocidad: "40 km/h",
        bateria: "48V-20KM",
        pesoMax: "180 kg"
      }
    },
    {
      name: "F60",
      image: motoF60,
      price: "$18,950.00",
      specs: {
        motor: "600W",
        velocidad: "45 km/h",
        bateria: "60V-20AH",
        autonomia: "50-60 km",
        pesoMax: "180 kg"
      }
    },
    {
      name: "GALAXY",
      image: motoGalaxy,
      price: "$25,950.00",
      specs: {
        motor: "1200W",
        velocidad: "60 km/h",
        bateria: "72V-32AH",
        autonomia: "70-80 km",
        pesoMax: "180 kg"
      },
      featured: true
    },
    {
      name: "T9 SUPER",
      image: motoT9super,
      price: "$59,850.00",
      specs: {
        motor: "3000W",
        velocidad: "80 km/h",
        bateria: "72V-40AH",
        autonomia: "80-90 km",
        pesoMax: "180 kg"
      }
    }
  ];

  return (
    <section id="productos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-secondary text-lg mb-2">NUESTROS MODELOS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Catálogo de <span className="text-primary">Motos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encuentra la moto eléctrica perfecta para ti. Desde modelos urbanos hasta potentes scooters de alto rendimiento.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              {...product}
            />
          ))}
        </div>

        {/* Price Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            * Precios de contado en pesos mexicanos (MXN). Sujetos a cambio sin previo aviso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
