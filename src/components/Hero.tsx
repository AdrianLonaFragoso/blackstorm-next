import { Zap, Battery, Gauge } from "lucide-react";
import Image from "next/image";
import logoBlackstorm from "../../public/blacstorm-logo.svg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Lightning effect overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-electric-yellow animate-lightning blur-sm rotate-12" />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-24 bg-electric-yellow animate-lightning blur-sm -rotate-12"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/2 w-1 h-20 bg-electric-cyan animate-lightning blur-sm rotate-45"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8 relative">
            <Image
              src={logoBlackstorm}
              alt="Black Storm Logo"
              width={192}
              height={192}
              className="w-48 h-48 object-contain rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-xl -z-10 animate-pulse-glow" />
          </div>

          {/* Tagline */}
          <p className="font-display text-xl md:text-2xl text-secondary italic mb-4">
            ¡Conoce la Energía!
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
            Motos <span className="text-primary text-shadow-glow">100%</span>{" "}
            Eléctricas
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            Experimenta la movilidad del futuro con BLACK STORM. Potencia,
            eficiencia y cero emisiones en cada viaje.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#productos"
              className="bg-primary text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-lg hover:bg-primary/90 transition-all glow-yellow"
            >
              Ver Catálogo
            </a>
            <a
              href="#nosotros"
              className="border-2 border-secondary text-secondary font-display font-bold text-lg px-8 py-4 rounded-lg hover:bg-secondary/10 transition-all"
            >
              Conocer Más
            </a>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur px-6 py-3 rounded-full border border-border">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Hasta 3000W</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur px-6 py-3 rounded-full border border-border">
              <Gauge className="w-5 h-5 text-secondary" />
              <span className="text-foreground font-medium">Hasta 80 km/h</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur px-6 py-3 rounded-full border border-border">
              <Battery className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                Hasta 90 km autonomía
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
