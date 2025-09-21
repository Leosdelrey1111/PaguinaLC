import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { title } from "@/components/primitives";
import { 
  CogIcon, 
  ArrowLeftIcon, 
  ExternalLinkIcon, 
  ShieldIcon, 
  FileTextIcon, 
  SettingsIcon,
  TrendingUpIcon 
} from "lucide-react";
import { Link } from "react-router-dom";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";

interface StandardCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  content: string;
  pdfName: string;
}

export default function StandardsPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const standards: StandardCard[] = [
    {
      id: "iso27001",
      title: "ISO 27001",
      subtitle: "Sistema de Gestión de Seguridad de la Información",
      icon: <ShieldIcon size={32} className="text-white" />,
      color: "bg-blue-500",
      content: "ISO 27001 es el estándar internacional para sistemas de gestión de seguridad de la información (SGSI). Proporciona un marco sistemático para gestionar información sensible y mantenerla segura. Este estándar utiliza un enfoque basado en riesgos y está diseñado para ayudar a las organizaciones a establecer, implementar, mantener y mejorar continuamente un SGSI. Incluye controles de seguridad que abarcan aspectos físicos, técnicos y organizacionales. La certificación ISO 27001 demuestra el compromiso de una organización con la seguridad de la información y es ampliamente reconocida por clientes, reguladores y socios comerciales a nivel mundial.",
      pdfName: "iso-27001-guia-completa.pdf"
    },
    {
      id: "iso17799",
      title: "ISO 17799",
      subtitle: "Código de Práctica para la Gestión de Seguridad de la Información",
      icon: <FileTextIcon size={32} className="text-white" />,
      color: "bg-green-500",
      content: "ISO 17799 (ahora ISO 27002) es un código de práctica que proporciona directrices detalladas para la implementación de controles de seguridad de la información. Ofrece un conjunto comprensivo de controles de seguridad organizados en categorías como política de seguridad, organización de la seguridad, gestión de activos, control de acceso, criptografía, seguridad física y del entorno, y gestión de incidentes. Este estándar complementa a ISO 27001 proporcionando implementaciones específicas y mejores prácticas para cada control de seguridad.",
      pdfName: "iso-17799-27002-controles-seguridad.pdf"
    },
    {
      id: "cobit",
      title: "COBIT",
      subtitle: "Objetivos de control para la información y tecnologías relacionadas",
      icon: <CogIcon size={32} className="text-white" />,
      color: "bg-purple-500",
      content: "COBIT es un marco de gobierno y gestión de TI que ayuda a las organizaciones a crear valor óptimo desde TI manteniendo un equilibrio entre la realización de beneficios y la optimización de los niveles de riesgo y el uso de recursos. Proporciona un conjunto integral de herramientas que ayudan a los ejecutivos a cumplir con sus responsabilidades de gobierno y gestión de TI empresarial. COBIT 5 integra los principales estándares y frameworks de TI en un solo marco coherente. Es especialmente útil para organizaciones que buscan alinear TI con objetivos de negocio y establecer un gobierno efectivo de la información.",
      pdfName: "cobit-2019-marco-gobierno-ti.pdf"
    },
    {
      id: "nist",
      title: "NIST",
      subtitle: "Marco de Ciberseguridad",
      icon: <ShieldIcon size={32} className="text-white" />,
      color: "bg-orange-500",
      content: "El Marco de Ciberseguridad del NIST (National Institute of Standards and Technology) proporciona un enfoque flexible y repetible para gestionar y reducir el riesgo de ciberseguridad. Está organizado en cinco funciones principales: Identificar, Proteger, Detectar, Responder y Recuperar. Cada función se divide en categorías y subcategorías que proporcionan guidance específica para la gestión de riesgos de ciberseguridad. El framework es ampliamente adoptado tanto en el sector público como privado en Estados Unidos y a nivel internacional como base para programas de ciberseguridad.",
      pdfName: "nist-cybersecurity-framework.pdf"
    },
    {
      id: "itil",
      title: "ITIL",
      subtitle: "Biblioteca de Infraestructura de Tecnologías de la Información",
      icon: <SettingsIcon size={32} className="text-white" />,
      color: "bg-teal-500",
      content: "ITIL es un conjunto de mejores prácticas para la gestión de servicios de TI (ITSM) que se centra en la alineación de los servicios de TI con las necesidades del negocio. Proporciona un marco sistemático para la gestión de servicios que incluye procesos para el diseño, transición, operación y mejora continua de servicios de TI. ITIL ayuda a las organizaciones a mejorar la eficiencia, reducir costos y aumentar la satisfacción del cliente. La última versión, ITIL 4, incorpora prácticas modernas como DevOps, Agile y Lean, adaptándose a las necesidades de la transformación digital.",
      pdfName: "itil-4-gestion-servicios-ti.pdf"
    }
  ];

  const handleCardClick = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handlePdfClick = (e: React.MouseEvent, pdfName: string) => {
    e.stopPropagation();
    window.open(`/pdfs/${pdfName}`, '_blank');
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-6 py-8 md:py-10 max-w-7xl mx-auto px-4">
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
          <h1 className={title()}>Estándares Internacionales</h1>
        </div>

        {/* Texto de introducción */}
        <div className="bg-content2 p-6 rounded-lg border border-divider">
          <p className="text-foreground text-lg leading-relaxed text-center">
            Los estándares internacionales proporcionan frameworks y mejores prácticas reconocidas globalmente para la gestión 
            de la información y la ciberseguridad. Esta sección presenta los principales estándares que las organizaciones adoptan 
            para establecer controles efectivos, gestionar riesgos y asegurar la calidad en el manejo de información.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {standards.map((standard) => (
            <Card
              key={standard.id}
              isPressable
              className={`transition-all duration-300 cursor-pointer hover:shadow-lg h-fit ${
                expandedCard === standard.id ? 'shadow-xl' : 'hover:scale-[1.02]'
              }`}
              onClick={() => handleCardClick(standard.id)}
            >
              <CardBody className="p-6 h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className={`${standard.color} p-4 rounded-full`}>
                    {standard.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-default-900 mb-1">
                      {standard.title}
                    </h2>
                    <p className="text-default-600 text-sm mb-2">
                      {standard.subtitle}
                    </p>
                    {expandedCard !== standard.id && (
                      <p className="text-default-500 text-xs">
                        Haz clic para ver más información
                      </p>
                    )}
                  </div>

                  {expandedCard === standard.id && (
                    <div className="space-y-4 max-h-80 overflow-y-auto pr-2 w-full">
                      <p className="text-foreground text-sm leading-relaxed text-left">
                        {standard.content}
                      </p>

                      <div className="pt-4 border-t border-default-200">
                        <Button
                          color="primary"
                          variant="flat"
                          endContent={<ExternalLinkIcon size={16} />}
                          onClick={(e) => handlePdfClick(e, standard.pdfName)}
                          className="w-full"
                          size="sm"
                        >
                          Ver más
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}