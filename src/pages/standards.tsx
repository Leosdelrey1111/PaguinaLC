import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { title } from "@/components/primitives";
import { 
  Settings, 
  ArrowLeft, 
  ExternalLink, 
  Shield, 
  FileText, 
  Wrench,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Award,
  Globe,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Target,
  Zap,
  Building,
  Users,
  Layers
} from "lucide-react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-standards {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-10px) rotate(1.5deg); }
        50% { transform: translateY(0px) rotate(0deg); }
        75% { transform: translateY(-5px) rotate(-0.8deg); }
      }
      
      @keyframes glow-secondary {
        0%, 100% { opacity: 0.25; transform: scale(1); }
        50% { opacity: 0.55; transform: scale(1.08); }
      }
      
      @keyframes border-secondary {
        0%, 100% { box-shadow: 0 0 25px rgba(124, 58, 237, 0.25); }
        50% { box-shadow: 0 0 35px rgba(124, 58, 237, 0.45); }
      }
      
      @keyframes slideDown {
        0% { opacity: 0; transform: translateY(-20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      .float-standards { animation: float-standards 6s ease-in-out infinite; }
      .glow-secondary { animation: glow-secondary 3.5s ease-in-out infinite; }
      .border-secondary { animation: border-secondary 2.8s ease-in-out infinite; }
      .slide-down { animation: slideDown 0.5s ease-out forwards; }
      
      .hover-standards {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-standards:hover {
        transform: translateY(-12px) scale(1.03);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const standards: StandardCard[] = [
    {
      id: "iso27001",
      title: "ISO 27001",
      subtitle: "Sistema de Gestión de Seguridad de la Información",
      icon: <Shield size={28} className="text-white" />,
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
      icon: <FileText size={28} className="text-white" />,
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
      icon: <Settings size={28} className="text-white" />,
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
      icon: <Shield size={28} className="text-white" />,
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
      icon: <Wrench size={28} className="text-white" />,
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

  const handleBackClick = () => {
    window.history.back();
  };

  // Floating elements for background
  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 1.8,
    duration: 6 + (i % 3),
    x: 12 + (i * 16) % 76,
    y: 18 + (i * 20) % 64,
    scale: 0.35 + Math.random() * 0.35,
    icon: i % 3 === 0 ? Settings : i % 3 === 1 ? Award : Globe,
    color: i % 3 === 0 ? "text-secondary" : i % 3 === 1 ? "text-primary" : "text-success"
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
              className={`absolute opacity-5 float-standards`}
              style={{
                left: `${elem.x}%`,
                top: `${elem.y}%`,
                transform: `scale(${elem.scale})`,
                animationDelay: `${elem.delay}s`,
                animationDuration: `${elem.duration}s`
              }}
            >
              <IconComponent size={80} className={elem.color} />
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
              color="secondary"
              startContent={<Globe size={16} />}
              size="lg"
              className="px-6 py-2 font-bold"
            >
              Estándares Globales
            </Chip>
            <Chip 
              variant="flat" 
              color="primary"
              startContent={<Building size={14} />}
              size="md"
              className="px-4 font-medium"
            >
              Internacional
            </Chip>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Enhanced logo/icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-purple-400/30 rounded-full blur-2xl glow-secondary"></div>
              <div className="relative bg-gradient-to-br from-secondary via-purple-500 to-secondary p-10 rounded-3xl shadow-2xl">
                <div className="absolute inset-2 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Award size={56} className="text-white drop-shadow-lg" />
                  <div className="h-14 w-0.5 bg-white/40 rounded-full mx-2"></div>
                  <Globe size={56} className="text-white drop-shadow-lg" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 bg-white/20 p-2 rounded-full animate-bounce">
                  <Settings size={16} className="text-white" />
                </div>
                <div 
                  className="absolute -bottom-3 -right-3 bg-white/20 p-2 rounded-full animate-bounce" 
                  style={{ animationDelay: '0.8s' }}
                >
                  <Target size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className={`${title()} text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-secondary via-purple-500 to-secondary bg-clip-text text-transparent font-bold leading-tight`}>
              Estándares Internacionales
            </h1>
            <p className="text-default-500 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Frameworks y mejores prácticas reconocidas globalmente para la gestión de información y ciberseguridad
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Chip variant="flat" color="secondary" startContent={<CheckCircle size={14} />} className="px-4">
                Certificación Global
              </Chip>
              <Chip variant="flat" color="primary" startContent={<Award size={14} />} className="px-4">
                Mejores Prácticas
              </Chip>
              <Chip variant="flat" color="success" startContent={<Sparkles size={14} />} className="px-4">
                Actualizado 2024
              </Chip>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: standards.length, label: "Estándares", color: "text-secondary", icon: Layers },
            { number: "5", label: "Categorías", color: "text-primary", icon: Users },
            { number: "Global", label: "Alcance", color: "text-success", icon: Globe },
            { number: "2024", label: "Actualizado", color: "text-warning", icon: TrendingUp }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-content1/80 backdrop-blur-md border-2 border-default-200 hover:border-secondary/40 transition-all duration-500 hover-standards group">
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
        <Card className="max-w-6xl mx-auto bg-gradient-to-br from-default-50 via-content1 to-secondary-50 border-2 border-default-200 relative overflow-hidden shadow-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-secondary/15 to-transparent rounded-full -translate-x-16 -translate-y-16 glow-secondary"></div>
          <div 
            className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-400/15 to-transparent rounded-full translate-x-20 translate-y-20 glow-secondary" 
            style={{ animationDelay: '1.2s' }}
          ></div>
          
          <CardBody className="p-12 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-secondary to-purple-600 p-4 rounded-2xl shadow-lg">
                    <Award size={32} className="text-white" />
                  </div>
                  <Chip size="lg" variant="shadow" color="secondary" className="px-6 py-2 font-bold">
                    Marcos de Referencia Internacional
                  </Chip>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-secondary to-purple-600 bg-clip-text text-transparent">
                  Estándares de Clase Mundial
                </h2>
                
                <p className="text-default-700 text-lg lg:text-xl leading-relaxed">
                  Los estándares internacionales proporcionan <span className="font-bold text-secondary">frameworks y mejores prácticas</span> reconocidas 
                  globalmente para la gestión de la información y la ciberseguridad. Esta sección presenta 
                  los principales estándares que las organizaciones adoptan para establecer controles 
                  efectivos, gestionar riesgos y asegurar la calidad en el manejo de información.
                </p>
                
                {/* Key benefits */}
                <div className="grid gap-4 pt-4">
                  {[
                    { icon: Target, text: "Marcos probados en organizaciones globales" },
                    { icon: Zap, text: "Mejora continua y optimización de procesos" },
                    { icon: CheckCircle, text: "Certificaciones internacionalmente reconocidas" }
                  ].map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3 text-default-700">
                        <div className="bg-secondary/10 p-2 rounded-lg">
                          <IconComponent size={18} className="text-secondary" />
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
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-purple-400/20 rounded-full blur-3xl glow-secondary"></div>
                  
                  <div className="relative bg-gradient-to-br from-content1 to-default-100 p-16 rounded-full border-4 border-default-200 shadow-2xl">
                    {/* Inner grid of icons */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-blue-500/20">
                        <Shield size={32} className="text-blue-600" />
                      </div>
                      <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-green-500/20">
                        <FileText size={32} className="text-green-600" />
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-purple-500/20">
                        <Settings size={32} className="text-purple-600" />
                      </div>
                      <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-teal-500/20">
                        <Wrench size={32} className="text-teal-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating icons */}
                  <div className="absolute -top-4 -left-4 bg-secondary/20 p-3 rounded-full animate-bounce">
                    <Award size={20} className="text-secondary" />
                  </div>
                  <div 
                    className="absolute -top-4 -right-4 bg-primary/20 p-3 rounded-full animate-bounce" 
                    style={{ animationDelay: '0.9s' }}
                  >
                    <Globe size={20} className="text-primary" />
                  </div>
                  <div 
                    className="absolute -bottom-4 -left-4 bg-success/20 p-3 rounded-full animate-bounce" 
                    style={{ animationDelay: '1.8s' }}
                  >
                    <Target size={20} className="text-success" />
                  </div>
                  <div 
                    className="absolute -bottom-4 -right-4 bg-warning/20 p-3 rounded-full animate-bounce" 
                    style={{ animationDelay: '2.7s' }}
                  >
                    <CheckCircle size={20} className="text-warning" />
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Enhanced Standards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {standards.map((standard) => (
            <Card
              key={standard.id}
              isPressable
              className={`transition-all duration-700 cursor-pointer border-2 h-fit relative overflow-hidden ${
                expandedCard === standard.id 
                  ? "shadow-2xl border-secondary/40 bg-gradient-to-br from-content1 via-secondary/5 to-purple-50 scale-[1.02] border-secondary" 
                  : "hover:shadow-xl border-default-200 hover:border-secondary/30 hover:scale-[1.01] bg-content1/90 backdrop-blur-md"
              }`}
              onClick={() => handleCardClick(standard.id)}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full -translate-y-16 translate-x-16 transition-transform duration-500"></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start gap-6 w-full">
                  <div className={`${standard.color} p-4 rounded-2xl flex-shrink-0 shadow-lg transition-all duration-300 ${
                    expandedCard === standard.id ? 'scale-110 rotate-3' : 'hover:scale-105'
                  }`}>
                    {standard.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Chip 
                            size="md" 
                            variant="shadow" 
                            color="secondary"
                            className="px-4 font-bold"
                          >
                            {standard.category}
                          </Chip>
                          <Chip 
                            size="sm" 
                            variant="flat" 
                            color="default"
                            className="px-3"
                          >
                            {standard.year}
                          </Chip>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-default-900 leading-tight mb-2">
                          {standard.title}
                        </h2>
                        <p className="text-sm text-default-600 leading-relaxed">
                          {standard.subtitle}
                        </p>
                        {!expandedCard && (
                          <p className="text-xs text-default-500 mt-2">
                            Click para explorar framework completo
                          </p>
                        )}
                      </div>
                      <div className={`text-secondary flex-shrink-0 transition-all duration-300 ${
                        expandedCard === standard.id ? 'scale-110' : ''
                      }`}>
                        {expandedCard === standard.id ? (
                          <ChevronUp size={24} />
                        ) : (
                          <ChevronDown size={24} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {expandedCard === standard.id && (
                <CardBody className="pt-0 slide-down">
                  <Divider className="mb-8" />
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-default-800 mb-4 flex items-center gap-3">
                        <div className="bg-secondary/10 p-2 rounded-lg">
                          <BookOpen size={18} className="text-secondary" />
                        </div>
                        Descripción del Framework
                      </h3>
                      <p className="text-default-600 leading-relaxed text-base">
                        {standard.content}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-default-800 mb-4 flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <TrendingUp size={18} className="text-primary" />
                        </div>
                        Características Clave
                      </h3>
                      <div className="grid gap-3">
                        {standard.keyFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-secondary-50 rounded-lg border border-secondary-100">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-default-700 font-medium leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-center pt-4">
                      <Button
                        color="secondary"
                        variant="shadow"
                        size="lg"
                        endContent={<ExternalLink size={20} />}
                        onClick={(e) => handlePdfClick(e, standard.pdfName)}
                        className="font-bold px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
                      >
                        Consultar Estándar Internacional
                      </Button>
                    </div>
                  </div>
                </CardBody>
              )}
            </Card>
          ))}
        </div>

        {/* Enhanced Footer */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-default-50 to-secondary-50 border border-default-200">
          <CardBody className="p-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-secondary" />
                <span className="font-semibold text-secondary">Estándares Internacionalmente Reconocidos</span>
              </div>
              <p className="text-default-600 text-lg">
                Última actualización: {new Date().toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <div className="flex items-center gap-2 text-default-500">
                <Sparkles size={16} />
                <span className="text-sm">Frameworks certificados por organismos internacionales</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}