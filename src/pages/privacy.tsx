import { title } from "@/components/primitives";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";

export default function PrivacyPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col gap-6 py-8 md:py-10 max-w-4xl mx-auto px-4">
        {/* Botón de volver */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className={buttonStyles({
              variant: "light",
              radius: "full",
            })}
          >
            <ArrowLeftIcon size={18} />
            Volver al Inicio
          </Link>
        </div>

        {/* Título */}
        <div className="text-center mb-8">
          <h1 className={title()}>Aviso de Privacidad</h1>
        </div>

        {/* Contenido del aviso de privacidad */}
        <div className="bg-content1 p-8 rounded-lg border border-divider">
          <div className="space-y-8 text-foreground">
            
            {/* Introducción */}
            <p className="text-base leading-relaxed">
              <strong>Leonel Díaz & Cristian Oropeza</strong>, con domicilio en{" "}
              <strong>Educación Tecnológica 34, Fracc. Universidad, 37800 Dolores Hidalgo Cuna de la Independencia Nacional, Guanajuato</strong>, 
              y portal de internet <strong>http://localhost:5173/</strong>, es el responsable del uso y protección de sus datos personales, 
              y al respecto le informamos lo siguiente:
            </p>

            {/* Sección 1 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">1. Finalidades del tratamiento de datos</h2>
              <p>
                Los datos personales que recabamos, como nombre, correo electrónico e institución de procedencia, 
                serán utilizados para las siguientes finalidades:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Proveer el acceso a la Normateca Web.</li>
                <li>Identificar a los usuarios que ingresan a la plataforma.</li>
                <li>Establecer contacto para dar seguimiento a solicitudes, consultas o aclaraciones.</li>
                <li>Mantener actualizada nuestra base de datos.</li>
              </ul>
              <p>De manera adicional, sus datos podrán usarse para:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Elaboración de estadísticas internas.</li>
                <li>Mejoras en la experiencia del usuario dentro de la plataforma.</li>
              </ul>
              <p>
                En caso de que no desee que sus datos sean utilizados para fines secundarios, puede indicarlo escribiendo a cualquiera de los siguientes correos:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>oropezacristian40@gmail.com</strong></li>
                <li><strong>bhleonel705@gmail.com</strong></li>
              </ul>
            </div>

            {/* Sección 2 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">2. Datos personales recabados</h2>
              <p>Podremos solicitar:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Nombre completo: <strong>Cristian Efraín Oropeza Yepiz</strong>, <strong>Brayan Leonel Díaz Hernández</strong>.</li>
                <li>Correos electrónicos: <strong>oropezacristian40@gmail.com</strong>, <strong>bhleonel705@gmail.com</strong>.</li>
                <li>Dirección IP y datos de navegación (cookies, en caso de habilitarse).</li>
              </ul>
            </div>

            {/* Sección 3 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">3. Transferencia de datos</h2>
              <p>
                Sus datos personales no serán compartidos con terceros, salvo los casos previstos en la 
                Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
              </p>
            </div>

            {/* Sección 4 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">4. Derechos ARCO</h2>
              <p>
                Usted puede ejercer en cualquier momento sus derechos de <strong>Acceso</strong>, <strong>Rectificación</strong>, 
                <strong>Cancelación</strong> u <strong>Oposición</strong> (ARCO). Para ello, deberá enviar una solicitud a cualquiera de los correos:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>oropezacristian40@gmail.com</strong></li>
                <li><strong>bhleonel705@gmail.com</strong></li>
              </ul>
              <p>La solicitud deberá contener al menos:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Nombre completo.</li>
                <li>Medio de contacto (correo electrónico).</li>
                <li>Descripción clara de los datos sobre los que desea ejercer el derecho.</li>
              </ul>
            </div>

            {/* Sección 5 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">5. Uso de cookies</h2>
              <p>
                Este sitio puede utilizar cookies y tecnologías similares para mejorar la experiencia de navegación. 
                Usted puede deshabilitarlas en su navegador si así lo prefiere.
              </p>
            </div>

            {/* Sección 6 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">6. Modificaciones al aviso de privacidad</h2>
              <p>
                Este aviso de privacidad puede sufrir modificaciones o actualizaciones derivadas de nuevos requerimientos legales, 
                nuestras propias necesidades o cambios en nuestras prácticas. Dichas modificaciones estarán disponibles en la página web: 
                <strong> http://localhost:5173/</strong>.
              </p>
            </div>

            {/* Sección 7 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">7. Contacto</h2>
              <p>Si tiene dudas sobre este aviso de privacidad, puede comunicarse con nosotros en:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <a 
                    href="mailto:oropezacristian40@gmail.com" 
                    className="text-primary hover:text-primary-600 transition-colors no-underline"
                  >
                    <strong>oropezacristian40@gmail.com</strong>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:segundo_correo@ejemplo.com" 
                    className="text-primary hover:text-primary-600 transition-colors no-underline"
                  >
                    <strong>bhleonel705@gmail.com</strong>
                  </a>
                </li>
                <li><strong>Página web:</strong> http://localhost:5173/</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}