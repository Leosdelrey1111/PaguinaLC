import { useState } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { title } from "@/components/primitives";
import { 
  CogIcon, 
  ArrowLeftIcon, 
  ExternalLinkIcon, 
  ShieldIcon, 
  FileTextIcon, 
  SettingsIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  AwardIcon,
  GlobeIcon,
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
  keyFeatures: string[];
  category: string;
  year: string;
}

export default function StandardsPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const standards: StandardCard[] = [
    {
      id: "iso27001",
      title: "ISO 27001",
      subtitle: "Sistema de Gestión de Seguridad de la Información",
      icon: <ShieldIcon size={28} className="text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      category: "Seguridad",
      year: "2022",
      content: "ISO 27001 es el estándar internacional para sistemas de gestión de seguridad de la información (SGSI). Proporciona un marco sistemático para gestionar información sensible y mantenerla segura mediante un enfoque basado en riesgos. Está diseñado para ayudar a las organizaciones a establecer, implementar, mantener y mejorar continuamente un SGSI con controles que abarcan aspectos físicos, técnicos y organizacionales.",
      keyFeatures: [
        "Enfoque basado en riesgos",
        "Certificación internacional reconocida",
        "Marco de mejora continua",
        "Controles de seguridad integrales"
      ],
      pdfName: "ISO2700.pdf"
    },
    {
      id: "iso17799",
      title: "ISO 17799/27002", 
      subtitle: "Código de Práctica para la Gestión de Seguridad",
      icon: <FileTextIcon size={28} className="text-white" />,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      category: "Controles",
      year: "2022",
      content: "ISO 17799 (ahora ISO 27002) es un código de práctica que proporciona directrices detalladas para la implementación de controles de seguridad de la información. Ofrece un conjunto comprensivo de controles organizados en categorías como política de seguridad, gestión de activos, control de acceso y criptografía, complementando perfectamente a ISO 27001.",
      keyFeatures: [
        "Controles de seguridad específicos",
        "Mejores prácticas probadas",
        "Complementa a ISO 27001",
        "Guías de implementación detalladas"
      ],
      pdfName: "ISO17799.pdf"
    },
    {
      id: "cobit",
      title: "COBIT 2019",
      subtitle: "Objetivos de Control para TI y Tecnologías Relacionadas",
      icon: <CogIcon size={28} className="text-white" />,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      category: "Gobierno TI",
      year: "2019",
      content: "COBIT es un marco de gobierno y gestión de TI que ayuda a las organizaciones a crear valor óptimo desde TI manteniendo un equilibrio entre beneficios y riesgos. Proporciona herramientas para ejecutivos que buscan cumplir con sus responsabilidades de gobierno empresarial de TI, integrando los principales estándares y frameworks en un solo marco coherente.",
      keyFeatures: [
        "Alineación de TI con negocio",
        "Gestión de riesgos integrada",
        "Marco de gobierno empresarial",
        "Métricas y KPIs definidos"
      ],
      pdfName: "CobiT4_Espanol.pdf"
    },
    {
      id: "nist",
      title: "NIST Framework",
      subtitle: "Marco de Ciberseguridad",
      icon: <ShieldIcon size={28} className="text-white" />,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      category: "Ciberseguridad",
      year: "2024",
      content: "El Marco de Ciberseguridad del NIST proporciona un enfoque flexible y repetible para gestionar y reducir el riesgo de ciberseguridad. Organizado en cinco funciones principales: Identificar, Proteger, Detectar, Responder y Recuperar, cada una con categorías específicas para la gestión de riesgos. Es ampliamente adoptado tanto en el sector público como privado.",
      keyFeatures: [
        "5 funciones principales",
        "Enfoque basado en riesgos",
        "Ampliamente adoptado",
        "Framework flexible y escalable"
      ],
      pdfName: "NIST.CSWP.29.spa.pdf"
    },
    {
      id: "itil",
      title: "ITIL 4",
      subtitle: "Biblioteca de Infraestructura de TI",
      icon: <SettingsIcon size={28} className="text-white" />,
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      category: "Servicios TI",
      year: "2019",
      content: "ITIL es un conjunto de mejores prácticas para la gestión de servicios de TI que se centra en la alineación de los servicios con las necesidades del negocio. ITIL 4 incorpora prácticas modernas como DevOps, Agile y Lean, adaptándose a las necesidades de la transformación digital con procesos para el diseño, transición, operación y mejora continua.",
      keyFeatures: [
        "Gestión de servicios moderna",
        "Integración DevOps/Agile",
        "Mejora continua de servicios",
        "Enfoque en valor de negocio"
      ],
      pdfName: "manual ITIL.pdf"
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
            color="secondary"
            startContent={<GlobeIcon size={14} />}
            size="sm"
          >
            Estándares Globales
          </Chip>
        </div>

        {/* Título principal */}
        <div className="text-center space-y-3">
          <h1 className={`${title()} text-4xl md:text-5xl bg-gradient-to-r from-secondary to-purple-600 bg-clip-text text-transparent`}>
            Estándares Internacionales
          </h1>
          <p className="text-default-500 text-lg max-w-3xl mx-auto">
            Frameworks y mejores prácticas reconocidas globalmente para la gestión de información y ciberseguridad
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">{standards.length}</div>
            <div className="text-sm text-default-500">Estándares</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">5</div>
            <div className="text-sm text-default-500">Categorías</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">Global</div>
            <div className="text-sm text-default-500">Alcance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning">2024</div>
            <div className="text-sm text-default-500">Actualizado</div>
          </div>
        </div>

        {/* Introducción */}
        <Card className="max-w-5xl mx-auto bg-gradient-to-br from-default-50 via-content1 to-secondary-50 border-1 border-default-200">
          <CardBody className="p-8">
            <div className="flex items-start gap-6">
              <div className="bg-secondary/10 p-4 rounded-xl flex-shrink-0">
                <AwardIcon size={32} className="text-secondary" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-default-900">
                  Marcos de Referencia Internacional
                </h2>
                <p className="text-default-600 leading-relaxed text-lg">
                  Los estándares internacionales proporcionan frameworks y mejores prácticas reconocidas 
                  globalmente para la gestión de la información y la ciberseguridad. Esta sección presenta 
                  los principales estándares que las organizaciones adoptan para establecer controles 
                  efectivos, gestionar riesgos y asegurar la calidad en el manejo de información.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Grid de estándares */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {standards.map((standard) => (
            <Card
              key={standard.id}
              isPressable
              className={`transition-all duration-500 cursor-pointer bg-content1 border-1 h-fit ${
                expandedCard === standard.id 
                  ? "shadow-2xl border-secondary/20 bg-gradient-to-br from-content1 to-secondary/5" 
                  : "hover:shadow-lg border-default-200 hover:border-secondary/30 hover:scale-[1.01]"
              }`}
              onClick={() => handleCardClick(standard.id)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start gap-4 w-full">
                  <div className={`${standard.color} p-3 rounded-xl flex-shrink-0`}>
                    {standard.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Chip 
                            size="sm" 
                            variant="flat" 
                            color="secondary"
                          >
                            {standard.category}
                          </Chip>
                          <Chip 
                            size="sm" 
                            variant="flat" 
                            color="default"
                          >
                            {standard.year}
                          </Chip>
                        </div>
                        <h2 className="text-lg font-bold text-default-900 leading-tight">
                          {standard.title}
                        </h2>
                        <p className="text-sm text-default-600 mt-1">
                          {standard.subtitle}
                        </p>
                      </div>
                      <div className="text-secondary flex-shrink-0">
                        {expandedCard === standard.id ? (
                          <ChevronUpIcon size={20} />
                        ) : (
                          <ChevronDownIcon size={20} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {expandedCard === standard.id && (
                <CardBody className="pt-2">
                  <Divider className="mb-6" />
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-md font-semibold text-default-800 mb-3 flex items-center gap-2">
                        <BookOpenIcon size={16} className="text-secondary" />
                        Descripción del Framework
                      </h3>
                      <p className="text-default-600 leading-relaxed text-sm">
                        {standard.content}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-md font-semibold text-default-800 mb-3 flex items-center gap-2">
                        <TrendingUpIcon size={16} className="text-secondary" />
                        Características Clave
                      </h3>
                      <div className="grid gap-2">
                        {standard.keyFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-default-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-center pt-2">
                      <Button
                        color="secondary"
                        variant="shadow"
                        size="lg"
                        endContent={<ExternalLinkIcon size={18} />}
                        onClick={(e) => handlePdfClick(e, standard.pdfName)}
                        className="font-semibold"
                      >
                        Consultar Estándar
                      </Button>
                    </div>
                  </div>
                </CardBody>
              )}
            </Card>
          ))}
        </div>

        {/* Footer informativo */}
        <div className="text-center pt-8">
          <p className="text-default-400 text-sm">
            Estándares internacionales - Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}