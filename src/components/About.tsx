import { Leaf, Zap, Shield, Truck } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "100% Eléctrico",
      description: "Motores eléctricos de alta eficiencia sin emisiones contaminantes"
    },
    {
      icon: Leaf,
      title: "Eco-Amigable",
      description: "Contribuye al medio ambiente con movilidad sustentable"
    },
    {
      icon: Shield,
      title: "Garantía Incluida",
      description: "Respaldo de hasta 6 meses en componentes principales"
    },
    {
      icon: Truck,
      title: "Cargador Incluido",
      description: "Todas nuestras motos incluyen cargador de batería"
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-secondary text-lg mb-2">SOBRE NOSOTROS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            La Energía del <span className="text-primary">Futuro</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            BLACK STORM E-MOTION es tu aliado en movilidad eléctrica. Ofrecemos motos 100% eléctricas 
            diseñadas para la ciudad moderna, combinando potencia, eficiencia y responsabilidad ambiental.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-background p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">4</p>
            <p className="text-muted-foreground">Modelos Disponibles</p>
          </div>
          <div>
            <p className="font-display text-4xl md:text-5xl font-bold text-secondary mb-2">80</p>
            <p className="text-muted-foreground">km/h Velocidad Máx.</p>
          </div>
          <div>
            <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">90</p>
            <p className="text-muted-foreground">km de Autonomía</p>
          </div>
          <div>
            <p className="font-display text-4xl md:text-5xl font-bold text-secondary mb-2">0</p>
            <p className="text-muted-foreground">Emisiones</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
