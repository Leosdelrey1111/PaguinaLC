import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { title } from "@/components/primitives";
import { ScaleIcon, ArrowLeftIcon, ExternalLinkIcon, ShieldCheckIcon, CopyrightIcon, AlertTriangleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";

interface LawCard {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  content: string;
  pdfName: string;
}

export default function LawsPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const laws: LawCard[] = [
    {
      id: "lgpdp",
      title: "Ley General de Protección de Datos Personales",
      icon: <ShieldCheckIcon size={32} className="text-white" />,
      color: "bg-blue-500",
      content: "La Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados (LGPDPPSO) establece las bases, principios y procedimientos para garantizar el derecho que tiene toda persona a la protección de sus datos personales en posesión de particulares. Esta ley regula el tratamiento legítimo, controlado e informado de datos personales, garantiza la privacidad y el derecho a la autodeterminación informativa de las personas. Establece obligaciones específicas para los responsables y encargados del tratamiento, incluyendo medidas de seguridad, avisos de privacidad y procedimientos para el ejercicio de derechos ARCO (Acceso, Rectificación, Cancelación y Oposición). Su aplicación es fundamental para organizaciones que manejan datos personales de ciudadanos mexicanos.",
      pdfName: "ley-proteccion-datos-personales.pdf"
    },
    {
      id: "lpi",
      title: "Ley de Propiedad Industrial",
      icon: <CopyrightIcon size={32} className="text-white" />,
      color: "bg-green-500",
      content: "La Ley de Propiedad Industrial protege la innovación mediante el establecimiento de un sistema de patentes, marcas, diseños industriales y otros derechos de propiedad intelectual industrial. Esta normativa regula la protección de invenciones, modelos de utilidad, diseños industriales, esquemas de trazado de circuitos integrados, marcas, avisos comerciales y nombres comerciales. Establece los procedimientos para el registro, protección y defensa de estos derechos, así como las sanciones por violaciones. Es esencial para empresas que desarrollan tecnología, productos innovadores o que requieren proteger su identidad comercial en el mercado mexicano.",
      pdfName: "ley-propiedad-industrial.pdf"
    },
    {
      id: "lfda",
      title: "Ley Federal de Derechos de Autor",
      icon: <CopyrightIcon size={32} className="text-white" />,
      color: "bg-purple-500",
      content: "La Ley Federal del Derecho de Autor protege las obras literarias y artísticas, así como los derechos de los autores, artistas intérpretes o ejecutantes, editores, productores y organismos de radiodifusión. Regula los derechos morales y patrimoniales de los autores, establece las limitaciones y excepciones al derecho de autor, y define los procedimientos para el registro y protección de obras. También aborda temas como las obras derivadas, colaborativas y por encargo. Esta ley es fundamental para profesionales que crean, distribuyen o utilizan contenido protegido por derechos de autor, incluyendo software, documentos, multimedia y cualquier creación intelectual.",
      pdfName: "ley-federal-derechos-autor.pdf"
    },
    {
      id: "cpf",
      title: "Código Penal Federal",
      icon: <AlertTriangleIcon size={32} className="text-white" />,
      color: "bg-red-500",
      content: "El Código Penal Federal tipifica diversos delitos relacionados con el manejo indebido de información, incluyendo delitos informáticos, violación de secretos, revelación de secretos y acceso ilícito a sistemas informáticos. Establece las sanciones penales para conductas como el acceso no autorizado a sistemas, interceptación de comunicaciones privadas, daño a datos o sistemas informáticos, y uso indebido de información confidencial. También regula aspectos relacionados con el fraude informático y los delitos contra la propiedad intelectual. Es crucial para comprender las consecuencias penales del mal manejo de información y para implementar controles que prevengan la comisión de delitos informáticos.",
      pdfName: "codigo-penal-federal-delitos-informaticos.pdf"
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
          <h1 className={title()}>Leyes Mexicanas</h1>
        </div>

        {/* Texto de introducción */}
        <div className="bg-content2 p-6 rounded-lg border border-divider">
          <p className="text-foreground text-lg leading-relaxed text-center">
            Esta sección contiene el marco legal mexicano que regula el manejo, protección y uso de la información. 
            Aquí encontrarás las principales leyes que todo profesional debe conocer para asegurar el cumplimiento 
            normativo en materia de datos personales, propiedad intelectual y aspectos penales relacionados con el manejo de información.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {laws.map((law) => (
            <Card
              key={law.id}
              isPressable
              className={`transition-all duration-300 cursor-pointer hover:shadow-lg h-fit ${
                expandedCard === law.id ? 'shadow-xl' : 'hover:scale-[1.02]'
              }`}
              onClick={() => handleCardClick(law.id)}
            >
              <CardBody className="p-6 h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className={`${law.color} p-4 rounded-full`}>
                    {law.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-default-900 leading-tight mb-2">
                      {law.title}
                    </h2>
                    {expandedCard !== law.id && (
                      <p className="text-default-500 text-sm">
                        Haz clic para ver más información
                      </p>
                    )}
                  </div>

                  {expandedCard === law.id && (
                    <div className="space-y-4 max-h-80 overflow-y-auto pr-2 w-full">
                      <p className="text-foreground text-sm leading-relaxed text-left">
                        {law.content}
                      </p>

                      <div className="pt-4 border-t border-default-200">
                        <Button
                          color="primary"
                          variant="flat"
                          endContent={<ExternalLinkIcon size={16} />}
                          onClick={(e) => handlePdfClick(e, law.pdfName)}
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