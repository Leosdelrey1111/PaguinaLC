import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { title } from "@/components/primitives";
import {
  Shield,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Scale,
  Eye,
  Lock,
  FileText,
  ChevronDown,
  ChevronUp,
  Gavel,
  Users,
  Target,
  Award,
  Lightbulb,
  Heart,
  CheckCircle,
  Sparkles,
  Brain,
} from "lucide-react";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Add custom CSS animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float-gentle {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-15px) rotate(1deg); }
        50% { transform: translateY(0px) rotate(0deg); }
        75% { transform: translateY(-8px) rotate(-0.5deg); }
      }
      
      @keyframes glow-pulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.05); }
      }
      
      @keyframes border-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.2); }
        50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.4); }
      }
      
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      .float-animation {
        animation: float-gentle 4s ease-in-out infinite;
      }
      
      .glow-animation {
        animation: glow-pulse 3s ease-in-out infinite;
      }
      
      .border-glow-animation {
        animation: border-glow 2s ease-in-out infinite;
      }
      
      .fade-in-animation {
        animation: fadeIn 0.5s ease-out forwards;
      }
      
      .hover-lift-effect {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-lift-effect:hover {
        transform: translateY(-8px) scale(1.02);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePdfClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open("/pdfs/aspectos-eticos-legales.pdf", "_blank");
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const principles = [
    {
      icon: Lock,
      label: "Confidencialidad",
      color: "primary",
      description: "Protección de datos sensibles y privados",
      bgColor: "bg-primary/15",
      borderColor: "border-primary/30",
      textColor: "text-primary",
    },
    {
      icon: Shield,
      label: "Integridad",
      color: "success",
      description: "Veracidad y exactitud de la información",
      bgColor: "bg-success/15",
      borderColor: "border-success/30",
      textColor: "text-success",
    },
    {
      icon: Eye,
      label: "Transparencia",
      color: "secondary",
      description: "Claridad en procesos y decisiones",
      bgColor: "bg-secondary/15",
      borderColor: "border-secondary/30",
      textColor: "text-secondary",
    },
    {
      icon: Scale,
      label: "Legalidad",
      color: "warning",
      description: "Cumplimiento del marco normativo",
      bgColor: "bg-warning/15",
      borderColor: "border-warning/30",
      textColor: "text-warning",
    },
  ];

  // Floating elements for background
  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 1.2,
    duration: 4 + (i % 3),
    x: 15 + ((i * 15) % 70),
    y: 20 + ((i * 20) % 60),
    scale: 0.4 + Math.random() * 0.3,
    icon: i % 3 === 0 ? Scale : i % 3 === 1 ? Shield : Gavel,
    color:
      i % 3 === 0
        ? "text-primary"
        : i % 3 === 1
          ? "text-secondary"
          : "text-success",
  }));

  if (!mounted)
    return (
      <DefaultLayout>
        <div className="min-h-screen"></div>
      </DefaultLayout>
    );

  return (
    <DefaultLayout>
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingElements.map((elem) => {
          const IconComponent = elem.icon;
          return (
            <div
              key={elem.id}
              className={`absolute opacity-5 float-animation`}
              style={{
                left: `${elem.x}%`,
                top: `${elem.y}%`,
                transform: `scale(${elem.scale})`,
                animationDelay: `${elem.delay}s`,
                animationDuration: `${elem.duration}s`,
              }}
            >
              <IconComponent size={64} className={elem.color} />
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
              color="primary"
              startContent={<BookOpen size={16} />}
              size="lg"
              className="px-6 py-2 font-bold"
            >
              Normateca Digital
            </Chip>
            <Chip
              variant="flat"
              color="secondary"
              startContent={<Brain size={14} />}
              size="md"
              className="px-4 font-medium"
            >
              Ético
            </Chip>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Enhanced logo/icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-2xl glow-animation"></div>
              <div className="relative bg-gradient-to-br from-primary via-secondary to-primary p-8 rounded-3xl shadow-2xl">
                <div className="absolute inset-2 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative flex items-center justify-center">
                  <Shield size={56} className="text-white drop-shadow-lg" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 bg-white/20 p-2 rounded-full animate-bounce">
                  <Scale size={16} className="text-white" />
                </div>
                <div
                  className="absolute -bottom-2 -right-2 bg-white/20 p-2 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Gavel size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1
              className={`${title()} text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent font-bold leading-tight`}
            >
              Aspectos Éticos y Legales
            </h1>
            <p className="text-default-500 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Principios fundamentales para el manejo responsable de la
              información en la era digital
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Chip
                variant="flat"
                color="primary"
                startContent={<CheckCircle size={14} />}
                className="px-4"
              >
                Fundamentos Sólidos
              </Chip>
              <Chip
                variant="flat"
                color="success"
                startContent={<Award size={14} />}
                className="px-4"
              >
                Mejores Prácticas
              </Chip>
              <Chip
                variant="flat"
                color="secondary"
                startContent={<Sparkles size={14} />}
                className="px-4"
              >
                Actualizado 2025
              </Chip>
            </div>
          </div>
        </div>

        {/* Enhanced Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <Card
                key={index}
                className="bg-content1/80 backdrop-blur-md border-2 border-default-200 hover:border-primary/40 transition-all duration-500 hover-lift-effect group relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>

                <CardBody className="p-8 text-center relative">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${principle.bgColor} border-2 ${principle.borderColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <IconComponent
                      size={32}
                      className={`${principle.textColor} group-hover:scale-110 transition-transform`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-default-900 mb-2 group-hover:text-primary transition-colors">
                    {principle.label}
                  </h3>
                  <p className="text-sm text-default-600 leading-relaxed">
                    {principle.description}
                  </p>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Introduction Section */}
        <Card className="max-w-6xl mx-auto bg-gradient-to-br from-default-50 via-content1 to-primary-50 border-2 border-default-200 relative overflow-hidden shadow-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-x-16 -translate-y-16 glow-animation"></div>
          <div
            className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full translate-x-20 translate-y-20 glow-animation"
            style={{ animationDelay: "1s" }}
          ></div>

          <CardBody className="p-12 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shadow-lg">
                    <FileText size={32} className="text-white" />
                  </div>
                  <Chip
                    size="lg"
                    variant="shadow"
                    color="primary"
                    className="px-6 py-2 font-bold"
                  >
                    Marco Conceptual
                  </Chip>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Fundamentos Éticos
                </h2>

                <p className="text-default-700 text-lg lg:text-xl leading-relaxed">
                  En esta sección encontrarás los{" "}
                  <span className="font-bold text-primary">
                    principios fundamentales
                  </span>{" "}
                  que rigen el manejo ético y responsable de la información.
                  Exploramos las bases conceptuales, marcos de referencia y
                  mejores prácticas que todo profesional debe conocer para
                  garantizar un tratamiento adecuado de los datos en cualquier
                  contexto organizacional.
                </p>

                {/* Key benefits */}
                <div className="grid gap-4 pt-4">
                  {[
                    {
                      icon: Target,
                      text: "Directrices claras para la toma de decisiones",
                    },
                    {
                      icon: Users,
                      text: "Protección de derechos individuales y colectivos",
                    },
                    {
                      icon: Award,
                      text: "Estándares profesionales reconocidos",
                    },
                  ].map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-default-700"
                      >
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <IconComponent size={18} className="text-primary" />
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
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl glow-animation"></div>

                  <div className="relative bg-gradient-to-br from-content1 to-default-100 p-16 rounded-full border-4 border-default-200 shadow-2xl">
                    {/* Inner grid of icons with better spacing */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                        <Heart size={32} className="text-primary" />
                      </div>
                      <div className="bg-gradient-to-br from-success/20 to-success/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                        <Shield size={32} className="text-success" />
                      </div>
                      <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                        <Lightbulb size={32} className="text-secondary" />
                      </div>
                      <div className="bg-gradient-to-br from-warning/20 to-warning/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                        <Scale size={32} className="text-warning" />
                      </div>
                    </div>
                  </div>

                  {/* Floating icons */}
                  <div className="absolute -top-4 -left-4 bg-primary/20 p-3 rounded-full animate-bounce">
                    <BookOpen size={20} className="text-primary" />
                  </div>
                  <div
                    className="absolute -top-4 -right-4 bg-secondary/20 p-3 rounded-full animate-bounce"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <Gavel size={20} className="text-secondary" />
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 bg-success/20 p-3 rounded-full animate-bounce"
                    style={{ animationDelay: "1.4s" }}
                  >
                    <Users size={20} className="text-success" />
                  </div>
                  <div
                    className="absolute -bottom-4 -right-4 bg-warning/20 p-3 rounded-full animate-bounce"
                    style={{ animationDelay: "2.1s" }}
                  >
                    <Award size={20} className="text-warning" />
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Enhanced Expandable Card */}
        <div className="max-w-5xl mx-auto">
          <Card
            isPressable
            className={`transition-all duration-700 cursor-pointer border-2 relative overflow-hidden ${
              isExpanded
                ? "shadow-2xl border-primary/40 bg-gradient-to-br from-content1 via-primary/5 to-secondary/5 scale-[1.02] border-glow-animation"
                : "hover:shadow-xl border-default-200 hover:border-primary/30 hover:scale-[1.01] bg-content1/90 backdrop-blur-md"
            }`}
            onClick={handleCardClick}
          >
            <CardHeader className="pb-4 relative">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-6">
                  <div
                    className={`bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shadow-lg transition-all duration-300 ${
                      isExpanded ? "scale-110 rotate-3" : "hover:scale-105"
                    }`}
                  >
                    <Shield size={36} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-default-900 leading-tight">
                      Aspectos Éticos y Legales del Manejo de la Información
                    </h2>
                    <p className="text-default-600 text-base mt-2">
                      Fundamentos para una gestión responsable
                    </p>
                    {!isExpanded && (
                      <p className="text-sm text-default-500 mt-1">
                        Click para expandir contenido completo
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className={`flex items-center gap-2 text-primary transition-all duration-300 ${
                    isExpanded ? "scale-110" : ""
                  }`}
                >
                  {isExpanded ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </div>
            </CardHeader>

            {isExpanded && (
              <CardBody className="pt-0 fade-in-animation">
                <Divider className="mb-8" />
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-default-800 flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Scale size={20} className="text-primary" />
                        </div>
                        Fundamentos Éticos
                      </h3>
                      <p className="text-default-600 leading-relaxed text-base">
                        Los aspectos éticos del manejo de información
                        constituyen el{" "}
                        <span className="font-semibold text-primary">
                          fundamento esencial
                        </span>
                        para una gestión responsable de datos en la era digital.
                        Esta disciplina abarca principios como la
                        confidencialidad, integridad, disponibilidad,
                        consentimiento informado y transparencia.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-default-800 flex items-center gap-3">
                        <div className="bg-secondary/10 p-2 rounded-lg">
                          <BookOpen size={20} className="text-secondary" />
                        </div>
                        Marco Legal
                      </h3>
                      <p className="text-default-600 leading-relaxed text-base">
                        Incluye el análisis de dilemas éticos relacionados con
                        la privacidad, el uso responsable de datos personales,
                        la propiedad intelectual y los derechos digitales en el{" "}
                        <span className="font-semibold text-secondary">
                          contexto jurídico actual
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  <Divider />

                  <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200">
                    <CardBody className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl">
                          <Target size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-default-800 mb-4">
                            Responsabilidad Profesional
                          </h3>
                          <p className="text-default-700 leading-relaxed text-base">
                            Los profesionales deben comprender tanto los
                            aspectos normativos como los principios éticos
                            universales para tomar decisiones informadas que
                            protejan los derechos de las personas y cumplan con
                            las obligaciones legales vigentes.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <div className="flex justify-center pt-6">
                    <Button
                      color="primary"
                      variant="shadow"
                      size="lg"
                      endContent={<ExternalLink size={20} />}
                      onClick={handlePdfClick}
                      className="font-bold px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
                    >
                      Consultar Documento Completo
                    </Button>
                  </div>
                </div>
              </CardBody>
            )}
          </Card>
        </div>

        {/* Enhanced Footer */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-default-50 to-primary-50 border border-default-200">
          <CardBody className="p-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-success" />
                <span className="font-semibold text-success">
                  Contenido Verificado y Actualizado
                </span>
              </div>
              <p className="text-default-600 text-lg">
                Última actualización:{" "}
                {new Date().toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="flex items-center gap-2 text-default-500">
                <Sparkles size={16} />
                <span className="text-sm">
                  Revisado por expertos en derecho digital
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}
