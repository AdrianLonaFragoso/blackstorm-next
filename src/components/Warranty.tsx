import { Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const Warranty = () => {
  const warrantyItems = [
    { part: "Motor", period: "6 meses", description: "Error del eje, tapa agrietada, error de rodamiento" },
    { part: "Controlador", period: "3 meses", description: "Fallo de funcionamiento" },
    { part: "Cargador", period: "3 meses", description: "Fallo de funcionamiento" },
    { part: "Batería", period: "2 meses", description: "Rendimiento inferior al 60%" },
    { part: "Cables", period: "6 meses", description: "Cortocircuito, circuito abierto" },
    { part: "Estructura", period: "6 meses", description: "Soldadura, fractura, distorsión" },
    { part: "Suspensión", period: "3 meses", description: "Fuga de aceite, deformación" },
    { part: "Frenos", period: "3 meses", description: "Grietas, daños, mal funcionamiento" },
  ];

  const exclusions = [
    "Piezas de desgaste y consumibles (bombilla LED, espejos, tornillos, etc.)",
    "Daños por uso anormal, desmontaje o modificación no autorizada",
    "Daños por impacto, sobrecarga o almacenamiento inadecuado",
    "Auto-montaje con accesorios no estándar"
  ];

  return (
    <section id="garantia" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-secondary text-lg mb-2">RESPALDO BLACK STORM</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Manual de <span className="text-primary">Garantía</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            En BLACK STORM E-MOTION respaldamos nuestros productos con una garantía integral en componentes principales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Warranty Coverage */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="font-display text-2xl font-bold text-foreground">Cobertura de Garantía</h3>
            </div>
            
            <div className="space-y-4">
              {warrantyItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-background p-4 rounded-lg border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-display font-semibold text-foreground">{item.part}</span>
                      <span className="bg-primary/20 text-primary font-display text-sm px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h3 className="font-display text-2xl font-bold text-foreground">Exclusiones</h3>
            </div>
            
            <div className="bg-background p-6 rounded-xl border border-border mb-6">
              <p className="text-muted-foreground mb-4">
                Los siguientes casos no están cubiertos por la garantía:
              </p>
              <div className="space-y-3">
                {exclusions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-primary/10 border border-primary/30 p-6 rounded-xl">
              <p className="font-display font-semibold text-foreground mb-2">
                Importante
              </p>
              <p className="text-muted-foreground text-sm">
                No se hacen cambios físicos de equipos. Se brindará el servicio de garantía si el caso 
                lo requiere y entra de acuerdo a las políticas antes mencionadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Warranty;
