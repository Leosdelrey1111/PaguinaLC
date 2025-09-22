import { useState } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { title } from "@/components/primitives";
import { 
  ShieldIcon, 
  ArrowLeftIcon, 
  ExternalLinkIcon,
  BookOpenIcon,
  ScaleIcon,
  EyeIcon,
  LockIcon,
  FileTextIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "lucide-react";
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
    window.open("/pdfs/aspectos-eticos-legales.pdf", "_blank");
  };

  const principles = [
    { icon: LockIcon, label: "Confidencialidad", color: "primary" },
    { icon: ShieldIcon, label: "Integridad", color: "success" },
    { icon: EyeIcon, label: "Transparencia", color: "secondary" },
    { icon: ScaleIcon, label: "Legalidad", color: "warning" }
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-8 py-8 md:py-12 max-w-7xl mx-auto px-4">
        {/* Header con navegación */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            to="/"
            className={buttonStyles({
              variant: "light",
              radius: "full",
              size: "sm"
            })}
          >
            <ArrowLeftIcon size={16} />
            Volver al Inicio
          </Link>
          <Chip 
            variant="flat" 
            color="primary"
            startContent={<BookOpenIcon size={14} />}
            size="sm"
          >
            Normoteca Digital
          </Chip>
        </div>

        {/* Título principal */}
        <div className="text-center space-y-3">
          <h1 className={`${title()} text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`}>
            Aspectos Éticos y Legales
          </h1>
          <p className="text-default-500 text-lg max-w-2xl mx-auto">
            Principios fundamentales para el manejo responsable de la información
          </p>
        </div>

        {/* Cards de principios */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <Card 
              key={index} 
              className="bg-content1/50 backdrop-blur-sm border-1 border-default-200 hover:border-primary/30 transition-all duration-300"
            >
              <CardBody className="p-4 text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-${principle.color}/10 flex items-center justify-center`}>
                  <principle.icon size={24} className={`text-${principle.color}`} />
                </div>
                <p className="text-sm font-medium text-default-700">
                  {principle.label}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Introducción con mejor diseño */}
        <Card className="max-w-5xl mx-auto bg-gradient-to-br from-default-50 via-content1 to-default-100 border-1 border-default-200">
          <CardBody className="p-8">
            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-xl flex-shrink-0">
                <FileTextIcon size={32} className="text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-default-900">
                  Marco Conceptual
                </h2>
                <p className="text-default-600 leading-relaxed text-lg">
                  En esta sección encontrarás los principios fundamentales que rigen
                  el manejo ético y responsable de la información. Exploramos las
                  bases conceptuales, marcos de referencia y mejores prácticas que
                  todo profesional debe conocer para garantizar un tratamiento
                  adecuado de los datos en cualquier contexto organizacional.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Card expandible principal */}
        <div className="max-w-4xl mx-auto">
          <Card
            isPressable
            className={`transition-all duration-500 cursor-pointer bg-content1 border-1 ${
              isExpanded 
                ? "shadow-2xl border-primary/20 bg-gradient-to-br from-content1 to-primary/5" 
                : "hover:shadow-lg border-default-200 hover:border-primary/30 hover:scale-[1.01]"
            }`}
            onClick={handleCardClick}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl">
                    <ShieldIcon size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-default-900">
                      Aspectos Éticos y Legales del Manejo de la Información
                    </h2>
                    <p className="text-default-500 text-sm mt-1">
                      Fundamentos para una gestión responsable
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  {isExpanded ? (
                    <ChevronUpIcon size={20} />
                  ) : (
                    <ChevronDownIcon size={20} />
                  )}
                </div>
              </div>
            </CardHeader>
            
            {isExpanded && (
              <CardBody className="pt-2">
                <Divider className="mb-6" />
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-default-800 flex items-center gap-2">
                        <ScaleIcon size={18} className="text-primary" />
                        Fundamentos Éticos
                      </h3>
                      <p className="text-default-600 leading-relaxed">
                        Los aspectos éticos del manejo de información constituyen el fundamento 
                        para una gestión responsable de datos en la era digital. Esta disciplina 
                        abarca principios como la confidencialidad, integridad, disponibilidad, 
                        consentimiento informado y transparencia.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-default-800 flex items-center gap-2">
                        <BookOpenIcon size={18} className="text-secondary" />
                        Marco Legal
                      </h3>
                      <p className="text-default-600 leading-relaxed">
                        Incluye el análisis de dilemas éticos relacionados con la privacidad, 
                        el uso responsable de datos personales, la propiedad intelectual y los 
                        derechos digitales en el contexto jurídico actual.
                      </p>
                    </div>
                  </div>
                  
                  <Divider />
                  
                  <div className="bg-default-50 p-6 rounded-xl border-l-4 border-primary">
                    <h3 className="text-lg font-semibold text-default-800 mb-3">
                      Responsabilidad Profesional
                    </h3>
                    <p className="text-default-600 leading-relaxed">
                      Los profesionales deben comprender tanto los aspectos normativos como 
                      los principios éticos universales para tomar decisiones informadas que 
                      protejan los derechos de las personas y cumplan con las obligaciones 
                      legales vigentes.
                    </p>
                  </div>
                  
                  <div className="flex justify-center pt-4">
                    <Button
                      color="primary"
                      variant="shadow"
                      size="lg"
                      endContent={<ExternalLinkIcon size={18} />}
                      onClick={handlePdfClick}
                      className="font-semibold"
                    >
                      Consultar Documento Completo
                    </Button>
                  </div>
                </div>
              </CardBody>
            )}
          </Card>
        </div>

        {/* Footer informativo */}
        <div className="text-center pt-8">
          <p className="text-default-400 text-sm">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}