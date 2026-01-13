import { Zap, Gauge, Battery, Route, Weight } from "lucide-react";
import type { StaticImageData } from "next/image";

interface ProductCardProps {
  name: string;
  image: string | StaticImageData;
  price: string;
  specs: {
    motor: string;
    velocidad: string;
    bateria: string;
    autonomia?: string;
    pesoMax: string;
  };
  featured?: boolean;
}

const ProductCard = ({
  name,
  image,
  price,
  specs,
  featured = false,
}: ProductCardProps) => {
  return (
    <div
      className={`group relative bg-card rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 ${
        featured
          ? "border-primary glow-yellow"
          : "border-border hover:border-primary/50"
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground font-display font-bold text-sm px-4 py-1 rounded-full z-10">
          DESTACADO
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-64 bg-gradient-to-b from-storm-blue to-storm-navy overflow-hidden">
        <img
          src={typeof image === "string" ? image : image.src}
          alt={`Moto ${name}`}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
          {name}
        </h3>

        {/* Price */}
        <div className="mb-6">
          <p className="text-muted-foreground text-sm">Precio de contado:</p>
          <p className="font-display text-3xl font-bold text-primary">
            {price}
            <span className="text-lg text-muted-foreground ml-1">MXN</span>
          </p>
        </div>

        {/* Specs */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Zap className="w-5 h-5 text-primary flex-shrink-0" />
            <span>
              Motor:{" "}
              <span className="text-foreground font-medium">{specs.motor}</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Gauge className="w-5 h-5 text-secondary flex-shrink-0" />
            <span>
              Velocidad:{" "}
              <span className="text-foreground font-medium">
                {specs.velocidad}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Battery className="w-5 h-5 text-primary flex-shrink-0" />
            <span>
              Batería:{" "}
              <span className="text-foreground font-medium">
                {specs.bateria}
              </span>
            </span>
          </div>
          {specs.autonomia && (
            <div className="flex items-center gap-3 text-muted-foreground">
              <Route className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>
                Autonomía:{" "}
                <span className="text-foreground font-medium">
                  {specs.autonomia}
                </span>
              </span>
            </div>
          )}
          <div className="flex items-center gap-3 text-muted-foreground">
            <Weight className="w-5 h-5 text-primary flex-shrink-0" />
            <span>
              Peso máx.:{" "}
              <span className="text-foreground font-medium">
                {specs.pesoMax}
              </span>
            </span>
          </div>
        </div>

        {/* Included badge */}
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-secondary font-display font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            Incluye Cargador
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
