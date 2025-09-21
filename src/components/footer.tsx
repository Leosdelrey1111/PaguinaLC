import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-content2 border-t border-divider mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="text-center">
          <p className="text-foreground-600 text-sm">
            © 2025 Normateca Web |{" "}
            <Link
              to="/privacy"
              className="text-primary hover:text-primary-600 transition-colors no-underline"
            >
              Aviso de Privacidad
            </Link>
            {" "}| Contacto:{" "}
            <a
              href="mailto:oropezacristian40@gmail.com"
              className="text-primary hover:text-primary-600 transition-colors no-underline"
            >
              oropezacristian40@gmail.com
            </a>
            {" "}/ {" "}
            <a
              href="mailto:bhleonel705@gmail.com"
              className="text-primary hover:text-primary-600 transition-colors no-underline"
            >
              segundo_correo@ejemplo.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};