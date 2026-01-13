import logoBlackstorm from "../../public/blacstorm-logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-storm-dark border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src={logoBlackstorm}
              alt="Blackstorm"
              width={200}
              height={100}
              className="h-24 w-auto rounded"
              priority
            />
            <span className="text-muted-foreground font-display ml-2">
              E-MOTION
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#inicio"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#productos"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Productos
            </a>
            <a
              href="#garantia"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Garantía
            </a>
          </nav>
          <div className="text-muted-foreground text-sm text-center md:text-left">
            <p>Afganistán 136</p>
            <p>Col prados de la cieneguita</p>
            <p>Apodaca NL</p>
            <p>Cel - +52 81 8656 2387</p>
          </div>
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © 2025 BLACK STORM E-MOTION. Todos los derechos reservados.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            Motos 100% eléctricas · Cero emisiones · Movilidad sustentable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
