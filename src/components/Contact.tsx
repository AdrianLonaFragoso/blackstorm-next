const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contacto
          </h2>
          <p className="text-muted-foreground">
            Ponte en contacto con nosotros
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-card border border-border rounded-2xl p-8 text-center">
          <div className="space-y-1 text-foreground">
            <p className="font-medium">Afganistán 136</p>
            <p className="font-medium">Col prados de la cieneguita</p>
            <p className="font-medium">Apodaca NL</p>
          </div>
          <div className="mt-6">
            <a
              href="tel:+528186562387"
              className="text-primary font-display text-xl font-semibold hover:underline"
            >
              Cel - +52 81 8656 2387
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
