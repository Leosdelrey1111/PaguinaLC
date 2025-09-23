import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { title } from "@/components/primitives";
import {
  Scale,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Copyright,
  AlertTriangle,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Gavel,
  UserCheck,
  FileText,
  Building,
  CheckCircle,
  Sparkles,
  Shield,
  Users,
  Award
} from "lucide-react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-legal {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-12px) rotate(1deg); }
        50% { transform: translateY(0px) rotate(0deg); }
        75% { transform: translateY(-6px) rotate(-0.5deg); }
      }
      
      @keyframes glow-success {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(1.05); }
      }
      
      @keyframes border-pulse {
        0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.2); }
        50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.4); }
      }
      
      @keyframes slideIn {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      .float-legal { animation: float-legal 5s ease-in-out infinite; }
      .glow-success { animation: glow-success 3s ease-in-out infinite; }
      .border-pulse { animation: border-pulse 2.5s ease-in-out infinite; }
      .slide-in { animation: slideIn 0.6s ease-out forwards; }
      
      .hover-legal {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-legal:hover {
        transform: translateY(-10px) scale(1.02);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const laws: LawCard[] = [
    {
      id: "lgpdp",
      title: "Ley General de Protección de Datos Personales",
      shortTitle: "LGPDPPSO",
      icon: <ShieldCheck size={28} className="text-white" />,
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
      pdfName: "LGPDPPSO.pdf",
    },
    {
      id: "lpi",
      title: "Ley de Propiedad Industrial",
      shortTitle: "LPI",
      icon: <Copyright size={28} className="text-white" />,
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
      pdfName: "Propiedad_Industrial.pdf",
    },
    {
      id: "lfda",
      title: "Ley Federal de Derechos de Autor",
      shortTitle: "LFDA",
      icon: <BookOpen size={28} className="text-white" />,
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
      pdfName: "LFDA.pdf",
    },
    {
      id: "cpf",
      title: "Código Penal Federal",
      shortTitle: "CPF - Delitos Informáticos",
      icon: <AlertTriangle size={28} className="text-white" />,
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
      pdfName: "CodigoPenasl.pdf",
    },
  ];

  const handleCardClick = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handlePdfClick = (e: React.MouseEvent, pdfName: string) => {
    e.stopPropagation();
    try {
      window.open(`/pdfs/${pdfName}`, "_blank");
    } catch (error) {
      console.error("Error opening PDF:", error);
      alert("Error al abrir el documento PDF");
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  // Floating elements for background
  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 1.5,
    duration: 5 + (i % 3),
    x: 10 + (i * 18) % 80,
    y: 15 + (i * 22) % 70,
    scale: 0.3 + Math.random() * 0.4,
    icon: i % 3 === 0 ? Scale : i % 3 === 1 ? Gavel : Shield,
    color: i % 3 === 0 ? "text-success" : i % 3 === 1 ? "text-primary" : "text-secondary"
  }));

  if (!mounted) return <DefaultLayout><div className="min-h-screen"></div></DefaultLayout>;

  return (
    <DefaultLayout>
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingElements.map((elem) => {
          const IconComponent = elem.icon;
          return (
            <div
              key={elem.id}
              className={`absolute opacity-5 float-legal`}
              style={{
                left: `${elem.x}%`,
                top: `${elem.y}%`,
                transform: `scale(${elem.scale})`,
                animationDelay: `${elem.delay}s`,
                animationDuration: `${elem.duration}s`
              }}
            >
              <IconComponent size={72} className={elem.color} />
            </div>
          );
        })}
      </div>

      <section className="relative z-10 flex flex-col gap-12 py-8 md:py-16 max-w-7xl mx-auto px-4">
        {/* Enhanced Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Button
            onClick={handleBackClick}
            variant="light"
            radius="full"
            size="lg"
            className="px-6 py-3 hover:scale-105 transition-all duration-300 font-semibold"
          >
            <ArrowLeft size={20} />
            Volver al Inicio
          </Button>
          <div className="flex items-center gap-3">
            <Chip
              variant="shadow"
              color="success"
              startContent={<Gavel size={16} />}
              size="lg"
              className="px-6 py-2 font-bold"
            >
              Marco Legal Mexicano
            </Chip>
            <Chip
              variant="flat"
              color="primary"
              startContent={<Building size={14} />}
              size="md"
              className="px-4 font-medium"
            >
              Nacional
            </Chip>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Enhanced logo/icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-success/30 to-green-400/30 rounded-full blur-2xl glow-success"></div>
              <div className="relative bg-gradient-to-br from-success via-green-500 to-success p-10 rounded-3xl shadow-2xl">
                <div className="absolute inset-2 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Scale size={56} className="text-white drop-shadow-lg" />
                  <div className="h-14 w-0.5 bg-white/40 rounded-full mx-2"></div>
                  <Gavel size={56} className="text-white drop-shadow-lg" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 bg-white/20 p-2 rounded-full animate-bounce">
                  <Shield size={16} className="text-white" />
                </div>
                <div 
                  className="absolute -bottom-3 -right-3 bg-white/20 p-2 rounded-full animate-bounce" 
                  style={{ animationDelay: '0.7s' }}
                >
                  <FileText size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className={`${title()} text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-success via-green-500 to-success bg-clip-text text-transparent font-bold leading-tight`}>
              Leyes Mexicanas
            </h1>
            <p className="text-default-500 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Marco legal nacional que regula el manejo, protección y uso de la información en el territorio mexicano
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Chip variant="flat" color="success" startContent={<CheckCircle size={14} />} className="px-4">
                Normativas Vigentes
              </Chip>
              <Chip variant="flat" color="primary" startContent={<Award size={14} />} className="px-4">
                Oficialmente Reconocidas
              </Chip>
              <Chip variant="flat" color="secondary" startContent={<Sparkles size={14} />} className="px-4">
                Actualizado 2025
              </Chip>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: laws.length, label: "Leyes", color: "text-success", icon: FileText },
            { number: "4", label: "Categorías", color: "text-primary", icon: Users },
            { number: "2025", label: "Actualizado", color: "text-secondary", icon: CheckCircle },
            { number: "PDF", label: "Disponible", color: "text-warning", icon: BookOpen }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-content1/80 backdrop-blur-md border-2 border-default-200 hover:border-success/40 transition-all duration-500 hover-legal group">
                <CardBody className="text-center p-8">
                  <div className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent size={24} />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-105 transition-transform`}>
                    {stat.number}
                  </div>
                  <div className="text-base text-default-600 font-semibold">{stat.label}</div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Introduction Section */}
        <Card className="max-w-6xl mx-auto bg-gradient-to-br from-default-50 via-content1 to-success-50 border-2 border-default-200 relative overflow-hidden shadow-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-success/15 to-transparent rounded-full -translate-x-16 -translate-y-16 glow-success"></div>
          <div 
            className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-green-400/15 to-transparent rounded-full translate-x-20 translate-y-20 glow-success" 
            style={{ animationDelay: '1s' }}
          ></div>
          
          <CardBody className="p-12 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-success to-green-600 p-4 rounded-2xl shadow-lg">
                    <Scale size={32} className="text-white" />
                  </div>
                  <Chip size="lg" variant="shadow" color="success" className="px-6 py-2 font-bold">
                    Marco Jurídico Nacional
                  </Chip>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-success to-green-600 bg-clip-text text-transparent">
                  Fundamento Legal Mexicano
                </h2>
                
                <p className="text-default-700 text-lg lg:text-xl leading-relaxed">
                  Esta sección contiene el <span className="font-bold text-success">marco legal mexicano</span> que regula el
                  manejo, protección y uso de la información. Encuentra las
                  principales leyes que todo profesional debe conocer para
                  asegurar el cumplimiento normativo en materia de datos
                  personales, propiedad intelectual y aspectos penales
                  relacionados con el manejo de información.
                </p>
                
                {/* Key benefits */}
                <div className="grid gap-4 pt-4">
                  {[
                    { icon: Shield, text: "Protección integral de datos personales" },
                    { icon: Copyright, text: "Derechos de propiedad intelectual garantizados" },
                    { icon: AlertTriangle, text: "Marco penal para delitos informáticos" }
                  ].map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3 text-default-700">
                        <div className="bg-success/10 p-2 rounded-lg">
                          <IconComponent size={18} className="text-success" />
                        </div>
                        <span className="font-medium">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Enhanced visual element */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-success/20 to-green-400/20 rounded-full blur-3xl glow-success"></div>
                  
                  <div className="relative bg-gradient-to-br from-content1 to-default-100 p-16 rounded-full border-4 border-default-200 shadow-2xl">
                    {/* Inner grid of icons */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-blue-500/20">
                        <ShieldCheck size={32} className="text-blue-600" />
                      </div>
                      <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-green-500/20">
                        <Copyright size={32} className="text-green-600" />
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-purple-500/20">
                        <BookOpen size={32} className="text-purple-600" />
                      </div>
                      <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-red-500/20">
                        <AlertTriangle size={32} className="text-red-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating icons */}
                  <div className="absolute -top-4 -left-4 bg-success/20 p-3 rounded-full animate-bounce">
                    <Scale size={20} className="text-success" />
                  </div>
                  <div 
                    className="absolute -top-4 -right-4 bg-primary/20 p-3 rounded-full animate-bounce" 
                    style={{ animationDelay: '0.8s' }}
                  >
                    <Gavel size={20} className="text-primary" />
                  </div>
                  <div 
                    className="absolute -bottom-4 -left-4 bg-secondary/20 p-3 rounded-full animate-bounce" 
                    style={{ animationDelay: '1.6s' }}
                  >
                    <FileText size={20} className="text-secondary" />
                  </div>
                  <div 
                    className="absolute -bottom-4 -right-4 bg-warning/20 p-3 rounded-full animate-bounce" 
                    style={{ animationDelay: '2.4s' }}
                  >
                    <Shield size={20} className="text-warning" />
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Enhanced Laws Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {laws.map((law) => (
            <Card
              key={law.id}
              isPressable
              className={`transition-all duration-700 cursor-pointer border-2 h-fit relative overflow-hidden ${
                expandedCard === law.id
                  ? "shadow-2xl border-success/40 bg-gradient-to-br from-content1 via-success/5 to-green-50 scale-[1.02] border-pulse"
                  : "hover:shadow-xl border-default-200 hover:border-success/30 hover:scale-[1.01] bg-content1/90 backdrop-blur-md"
              }`}
              onClick={() => handleCardClick(law.id)}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-success/5 to-transparent rounded-full -translate-y-16 translate-x-16 transition-transform duration-500"></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start gap-6 w-full">
                  <div className={`${law.color} p-4 rounded-2xl flex-shrink-0 shadow-lg transition-all duration-300 ${
                    expandedCard === law.id ? 'scale-110 rotate-3' : 'hover:scale-105'
                  }`}>
                    {law.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <Chip
                          size="md"
                          variant="shadow"
                          color="success"
                          className="mb-3 px-4 font-bold"
                        >
                          {law.category}
                        </Chip>
                        <h2 className="text-xl md:text-2xl font-bold text-default-900 leading-tight mb-2">
                          {law.shortTitle}
                        </h2>
                        <p className="text-sm text-default-600 leading-relaxed">
                          {law.title}
                        </p>
                        {!expandedCard && (
                          <p className="text-xs text-default-500 mt-2">
                            Click para ver detalles completos
                          </p>
                        )}
                      </div>
                      <div className={`text-success flex-shrink-0 transition-all duration-300 ${
                        expandedCard === law.id ? 'scale-110' : ''
                      }`}>
                        {expandedCard === law.id ? (
                          <ChevronUp size={24} />
                        ) : (
                          <ChevronDown size={24} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {expandedCard === law.id && (
                <CardBody className="pt-0 slide-in">
                  <Divider className="mb-8" />
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-default-800 mb-4 flex items-center gap-3">
                        <div className="bg-success/10 p-2 rounded-lg">
                          <UserCheck size={18} className="text-success" />
                        </div>
                        Descripción General
                      </h3>
                      <p className="text-default-600 leading-relaxed text-base">
                        {law.content}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-default-800 mb-4 flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <CheckCircle size={18} className="text-primary" />
                        </div>
                        Aspectos Clave
                      </h3>
                      <div className="grid gap-3">
                        {law.keyPoints.map((point, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-success-50 rounded-lg border border-success-100">
                            <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-default-700 font-medium leading-relaxed">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-center pt-4">
                      <Button
                        color="success"
                        variant="shadow"
                        size="lg"
                        endContent={<ExternalLink size={20} />}
                        onClick={(e) => handlePdfClick(e, law.pdfName)}
                        className="font-bold px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
                      >
                        Consultar Documento Oficial
                      </Button>
                    </div>
                  </div>
                </CardBody>
              )}
            </Card>
          ))}
        </div>

        {/* Enhanced Footer */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-default-50 to-success-50 border border-default-200">
          <CardBody className="p-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-success" />
                <span className="font-semibold text-success">Normativas Oficiales Vigentes</span>
              </div>
              <p className="text-default-600 text-lg">
                Última actualización: {new Date().toLocaleDateString("es-ES", {
                  year: 'numeric',
                  month: 'long', 
                  day: 'numeric'
                })}
              </p>
              <div className="flex items-center gap-2 text-default-500">
                <Sparkles size={16} />
                <span className="text-sm">Documentos oficiales del marco jurídico mexicano</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}