import { useState } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { title } from "@/components/primitives";
import {
  ScaleIcon,
  ArrowLeftIcon,
  ExternalLinkIcon,
  ShieldCheckIcon,
  CopyrightIcon,
  AlertTriangleIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  GavelIcon,
  UserCheckIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";

interface LawCard {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ReactNode;
  color: string;
  content: string;
  pdfName: string;
  keyPoints: string[];
  category: string;
}

export default function LawsPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const laws: LawCard[] = [
    {
      id: "lgpdp",
      title: "Ley General de Protección de Datos Personales",
      shortTitle: "LGPDPPSO",
      icon: <ShieldCheckIcon size={28} className="text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      category: "Protección de Datos",
      content:
        "La Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados establece las bases, principios y procedimientos para garantizar el derecho que tiene toda persona a la protección de sus datos personales. Esta ley regula el tratamiento legítimo, controlado e informado de datos personales, garantiza la privacidad y el derecho a la autodeterminación informativa de las personas.",
      keyPoints: [
        "Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)",
        "Obligaciones de avisos de privacidad",
        "Medidas de seguridad técnicas y administrativas",
        "Sanciones por incumplimiento",
      ],
      pdfName: "LGPDPPSO.pdf", // Updated to match actual file
    },
    {
      id: "lpi",
      title: "Ley de Propiedad Industrial",
      shortTitle: "LPI",
      icon: <CopyrightIcon size={28} className="text-white" />,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      category: "Propiedad Intelectual",
      content:
        "La Ley de Propiedad Industrial protege la innovación mediante el establecimiento de un sistema de patentes, marcas, diseños industriales y otros derechos de propiedad intelectual industrial. Regula la protección de invenciones, modelos de utilidad, diseños industriales, esquemas de trazado de circuitos integrados, marcas, avisos comerciales y nombres comerciales.",
      keyPoints: [
        "Registro de patentes y marcas",
        "Protección de diseños industriales",
        "Procedimientos de oposición",
        "Violaciones y sanciones aplicables",
      ],
      pdfName: "Propiedad_Industrial.pdf", // Updated to match actual file
    },
    {
      id: "lfda",
      title: "Ley Federal de Derechos de Autor",
      shortTitle: "LFDA",
      icon: <BookOpenIcon size={28} className="text-white" />,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      category: "Derechos de Autor",
      content:
        "La Ley Federal del Derecho de Autor protege las obras literarias y artísticas, así como los derechos de los autores, artistas intérpretes o ejecutantes, editores, productores y organismos de radiodifusión. Regula los derechos morales y patrimoniales de los autores, establece las limitaciones y excepciones al derecho de autor.",
      keyPoints: [
        "Derechos morales y patrimoniales",
        "Registro de obras",
        "Limitaciones y excepciones",
        "Protección de software y multimedia",
      ],
      pdfName: "LFDA.pdf", // Updated to match actual file
    },
    {
      id: "cpf",
      title: "Código Penal Federal",
      shortTitle: "CPF - Delitos Informáticos",
      icon: <AlertTriangleIcon size={28} className="text-white" />,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      category: "Delitos Informáticos",
      content:
        "El Código Penal Federal tipifica diversos delitos relacionados con el manejo indebido de información, incluyendo delitos informáticos, violación de secretos, revelación de secretos y acceso ilícito a sistemas informáticos. Establece las sanciones penales para conductas como el acceso no autorizado a sistemas.",
      keyPoints: [
        "Acceso ilícito a sistemas informáticos",
        "Interceptación de comunicaciones",
        "Daño a datos y sistemas",
        "Fraude informático y sanciones",
      ],
      pdfName: "CodigoPenasl.pdf", // Updated to match actual file (note: there's a typo in the filename "Penasl")
    },
  ];

  const handleCardClick = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handlePdfClick = (e: React.MouseEvent, pdfName: string) => {
    e.stopPropagation();
    // Added error handling for PDF opening
    try {
      window.open(`/pdfs/${pdfName}`, "_blank");
    } catch (error) {
      console.error("Error opening PDF:", error);
      alert("Error al abrir el documento PDF");
    }
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
              size: "sm",
            })}
          >
            <ArrowLeftIcon size={16} />
            Volver al Inicio
          </Link>
          <Chip
            variant="flat"
            color="success"
            startContent={<GavelIcon size={14} />}
            size="sm"
          >
            Marco Legal Mexicano
          </Chip>
        </div>

        {/* Título principal */}
        <div className="text-center space-y-3">
          <h1
            className={`${title()} text-4xl md:text-5xl bg-gradient-to-r from-success to-success-600 bg-clip-text text-transparent`}
          >
            Leyes Mexicanas
          </h1>
          <p className="text-default-500 text-lg max-w-3xl mx-auto">
            Marco legal nacional que regula el manejo, protección y uso de la
            información
          </p>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-success">{laws.length}</div>
            <div className="text-sm text-default-500">Leyes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">4</div>
            <div className="text-sm text-default-500">Categorías</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">2025</div>
            <div className="text-sm text-default-500">Actualizado</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning">PDF</div>
            <div className="text-sm text-default-500">Disponible</div>
          </div>
        </div>

        {/* Introducción */}
        <Card className="max-w-5xl mx-auto bg-gradient-to-br from-default-50 via-content1 to-success-50 border-1 border-default-200">
          <CardBody className="p-8">
            <div className="flex items-start gap-6">
              <div className="bg-success/10 p-4 rounded-xl flex-shrink-0">
                <ScaleIcon size={32} className="text-success" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-default-900">
                  Marco Jurídico Nacional
                </h2>
                <p className="text-default-600 leading-relaxed text-lg">
                  Esta sección contiene el marco legal mexicano que regula el
                  manejo, protección y uso de la información. Encuentra las
                  principales leyes que todo profesional debe conocer para
                  asegurar el cumplimiento normativo en materia de datos
                  personales, propiedad intelectual y aspectos penales
                  relacionados con el manejo de información.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Grid de leyes */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {laws.map((law) => (
            <Card
              key={law.id}
              isPressable
              className={`transition-all duration-500 cursor-pointer bg-content1 border-1 h-fit ${
                expandedCard === law.id
                  ? "shadow-2xl border-success/20 bg-gradient-to-br from-content1 to-success/5"
                  : "hover:shadow-lg border-default-200 hover:border-success/30 hover:scale-[1.01]"
              }`}
              onClick={() => handleCardClick(law.id)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start gap-4 w-full">
                  <div className={`${law.color} p-3 rounded-xl flex-shrink-0`}>
                    {law.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <Chip
                          size="sm"
                          variant="flat"
                          color="success"
                          className="mb-2"
                        >
                          {law.category}
                        </Chip>
                        <h2 className="text-lg font-bold text-default-900 leading-tight">
                          {law.shortTitle}
                        </h2>
                        <p className="text-sm text-default-600 mt-1">
                          {law.title}
                        </p>
                      </div>
                      <div className="text-success flex-shrink-0">
                        {expandedCard === law.id ? (
                          <ChevronUpIcon size={20} />
                        ) : (
                          <ChevronDownIcon size={20} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              {expandedCard === law.id && (
                <CardBody className="pt-2">
                  <Divider className="mb-6" />
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-md font-semibold text-default-800 mb-3 flex items-center gap-2">
                        <UserCheckIcon size={16} className="text-success" />
                        Descripción General
                      </h3>
                      <p className="text-default-600 leading-relaxed text-sm">
                        {law.content}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-md font-semibold text-default-800 mb-3">
                        Aspectos Clave
                      </h3>
                      <div className="grid gap-2">
                        {law.keyPoints.map((point, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-default-600">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center pt-2">
                      <Button
                        color="success"
                        variant="shadow"
                        size="lg"
                        endContent={<ExternalLinkIcon size={18} />}
                        onClick={(e) => handlePdfClick(e, law.pdfName)}
                        className="font-semibold"
                      >
                        Consultar Documento
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
            Normativas vigentes - Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES")}
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
