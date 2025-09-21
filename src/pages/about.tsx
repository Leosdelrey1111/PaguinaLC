import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { title } from "@/components/primitives";
import { ShieldIcon, ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePdfClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Aquí irá el enlace a tu PDF cuando lo tengas listo
    window.open('/pdfs/aspectos-eticos-legales.pdf', '_blank');
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-6 py-8 md:py-10 max-w-6xl mx-auto px-4">
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
        <div className="text-center">
          <h1 className={title()}>Aspectos Éticos y Legales</h1>
        </div>

        {/* Texto de introducción */}
        <div className="bg-content2 p-6 rounded-lg border border-divider">
          <p className="text-foreground text-lg leading-relaxed text-center">
            En esta sección encontrarás los principios fundamentales que rigen el manejo ético y responsable de la información. 
            Aquí exploramos las bases conceptuales, marcos de referencia y mejores prácticas que todo profesional debe conocer 
            para garantizar un tratamiento adecuado de los datos y la información en cualquier contexto organizacional.
          </p>
        </div>

        {/* Card expandible */}
        <div className="max-w-2xl mx-auto">
          <Card 
            isPressable
            className={`transition-all duration-300 cursor-pointer hover:shadow-lg ${
              isExpanded ? 'shadow-xl' : 'hover:scale-[1.02]'
            }`}
            onClick={handleCardClick}
          >
          <CardBody className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <ShieldIcon size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-default-900">
                  Aspectos Éticos y Legales del Manejo de la Información
                </h2>
                {!isExpanded && (
                  <p className="text-default-500 mt-1">
                    Haz clic para ver más información
                  </p>
                )}
              </div>
            </div>

            {isExpanded && (
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                <p className="text-foreground">
                  Los aspectos éticos y legales del manejo de información constituyen el fundamento para una gestión responsable 
                  de datos en la era digital. Esta disciplina abarca principios como la confidencialidad, integridad, disponibilidad, 
                  consentimiento informado y transparencia.
                </p>
                
                <p className="text-foreground">
                  Incluye el análisis de dilemas éticos relacionados con la privacidad, el uso responsable de datos personales, 
                  la propiedad intelectual y los derechos digitales. También considera las implicaciones legales del tratamiento 
                  de información, las responsabilidades de los controladores de datos y las consecuencias jurídicas del mal manejo 
                  de información sensible.
                </p>
                
                <p className="text-foreground">
                  Los profesionales deben comprender tanto los aspectos normativos como los principios éticos universales para 
                  tomar decisiones informadas que protejan los derechos de las personas y cumplan con las obligaciones legales vigentes.
                </p>

                <div className="mt-6 pt-4 border-t border-default-200">
                  <Button
                    color="primary"
                    variant="flat"
                    endContent={<ExternalLinkIcon size={16} />}
                    onClick={handlePdfClick}
                    className="w-full sm:w-auto"
                  >
                    Ver más
                  </Button>
                </div>
              </div>
            )}
                      </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}