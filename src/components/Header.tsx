const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo-blackstorm-horizontal.svg"
            alt="Blackstorm"
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#inicio"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Nosotros
          </a>
          <a
            href="#productos"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Productos
          </a>
          <a
            href="#garantia"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Garantía
          </a>
        </nav>

        <a
          href="#productos"
          className="bg-primary text-primary-foreground font-display font-semibold px-6 py-2 rounded-lg hover:bg-primary/90 transition-all glow-yellow"
        >
          Ver Motos
        </a>
      </div>
    </header>
  );
};

export default Header;
