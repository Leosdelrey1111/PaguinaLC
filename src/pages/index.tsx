import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import {
  Book,
  Shield,
  Scale,
  Settings,
  User,
  ArrowRight,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  Search,
  FileText,
  Library,
  Gavel,
  ShieldCheck,
  BookOpen,
  Layers,
  Building,
  Target,
  Award,
} from "lucide-react";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      title: "Marco Legal Actualizado",
      description: "Leyes mexicanas vigentes en materia de protección de datos",
      icon: <CheckCircle size={20} className="text-success" />,
    },
    {
      title: "Estándares Globales",
      description: "Mejores prácticas internacionales reconocidas mundialmente",
      icon: <Star size={20} className="text-warning" />,
    },
    {
      title: "Recursos Educativos",
      description: "Material de consulta para profesionales y estudiantes",
      icon: <Book size={20} className="text-primary" />,
    },
    {
      title: "Fácil Navegación",
      description: "Interfaz intuitiva para acceso rápido a la información",
      icon: <TrendingUp size={20} className="text-secondary" />,
    },
  ];

  const stats = [
    {
      number: "4",
      label: "Secciones",
      color: "text-primary",
      icon: <Layers size={20} />,
    },
    {
      number: "10+",
      label: "Documentos",
      color: "text-success",
      icon: <FileText size={20} />,
    },
    {
      number: "5",
      label: "Estándares",
      color: "text-secondary",
      icon: <Award size={20} />,
    },
    {
      number: "2025",
      label: "Actualizado",
      color: "text-warning",
      icon: <TrendingUp size={20} />,
    },
  ];

  // Floating books animation data
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.8,
    duration: 4 + (i % 3),
    x: 10 + ((i * 12) % 80),
    y: 10 + ((i * 15) % 70),
    scale: 0.6 + Math.random() * 0.4,
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
        {floatingElements.map((elem) => (
          <div
            key={elem.id}
            className="absolute opacity-5"
            style={{
              left: `${elem.x}%`,
              top: `${elem.y}%`,
              transform: `scale(${elem.scale})`,
              animation: `float ${elem.duration}s ease-in-out infinite`,
              animationDelay: `${elem.delay}s`,
            }}
          >
            {elem.id % 4 === 0 ? (
              <Book size={56} className="text-primary" />
            ) : elem.id % 4 === 1 ? (
              <Scale size={56} className="text-success" />
            ) : elem.id % 4 === 2 ? (
              <Shield size={56} className="text-secondary" />
            ) : (
              <FileText size={56} className="text-warning" />
            )}
          </div>
        ))}
      </div>

      {/* Custom CSS for animations */}

      <section className="relative z-10 flex flex-col items-center justify-center gap-12 py-8 md:py-16">
        {/* Hero Section Enhanced */}
        <div className="text-center max-w-5xl space-y-10">
          {/* Enhanced Logo with Library Theme */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Multiple glow layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-3xl opacity-20 animate-glow"></div>
              <div
                className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-3xl animate-glow"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Main logo container with library design */}
              <div className="relative bg-gradient-to-br from-primary via-secondary to-primary p-10 rounded-3xl shadow-2xl">
                {/* Inner library shelves effect */}
                <div className="absolute inset-3 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/20"></div>
                <div className="absolute inset-6 bg-white/10 rounded-xl"></div>

                {/* Main icon composition */}
                <div className="relative flex items-center justify-center gap-3">
                  <Library size={48} className="text-white drop-shadow-lg" />
                  <div className="h-12 w-0.5 bg-white/40 rounded-full"></div>
                  <BookOpen size={48} className="text-white drop-shadow-lg" />
                </div>

                {/* Small decorative books */}
                <div className="absolute -top-2 -left-2 bg-white/20 p-2 rounded-lg rotate-12">
                  <Book size={16} className="text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white/20 p-2 rounded-lg -rotate-12">
                  <FileText size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Enhanced Title with better typography */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl rounded-3xl"></div>
                <div className="relative space-y-3">
                  <div className="flex flex-wrap justify-center items-center gap-4">
                    <span
                      className={`${title()} text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent font-bold tracking-tight`}
                    >
                      Normateca
                    </span>
                    <div className="animate-pulse">
                      <Target size={32} className="text-secondary" />
                    </div>
                  </div>
                  <span
                    className={`${title()} text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent font-bold tracking-tight block`}
                  >
                    Digital
                  </span>
                </div>
              </div>

              {/* Enhanced subtitle chip */}
              <div className="flex justify-center">
                <Chip
                  size="lg"
                  variant="shadow"
                  color="primary"
                  startContent={<Search size={20} />}
                  className="px-8 py-3 text-lg font-bold hover:scale-105 transition-transform cursor-default"
                >
                  🏛️ Biblioteca Legal Inteligente
                </Chip>
              </div>
            </div>

            <h2
              className={`${title({ size: "sm" })} text-3xl md:text-4xl lg:text-5xl text-default-800 font-bold leading-tight`}
            >
              Sistema Integral de Normativas
            </h2>

            <div
              className={`${subtitle()} text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed`}
            >
              Tu compañero digital para navegar el complejo mundo de las{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
                normativas legales
              </span>{" "}
              y{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold">
                estándares técnicos
              </span>{" "}
              en México
            </div>
          </div>

          {/* Enhanced Statistics with better visual hierarchy */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-content1/90 backdrop-blur-md border-2 border-default-200 hover:border-primary-300 transition-all duration-300 hover-lift group"
              >
                <CardBody className="text-center p-8">
                  <div
                    className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-105 transition-transform`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-base text-default-600 font-semibold">
                    {stat.label}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Navigation Buttons with better spacing */}
        <div className="flex flex-col gap-8 max-w-5xl w-full">
          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              to="/about"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
                size: "lg",
                className:
                  "px-10 py-8 text-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl",
              })}
            >
              <Shield size={24} />
              Aspectos Éticos
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/laws"
              className={buttonStyles({
                color: "success",
                variant: "shadow",
                radius: "full",
                size: "lg",
                className:
                  "px-10 py-8 text-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl",
              })}
            >
              <Scale size={24} />
              Leyes Mexicanas
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              to="/standards"
              className={buttonStyles({
                color: "secondary",
                variant: "shadow",
                radius: "full",
                size: "lg",
                className:
                  "px-10 py-8 text-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl",
              })}
            >
              <Settings size={24} />
              Estándares
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/privacy"
              className={buttonStyles({
                color: "warning",
                variant: "shadow",
                radius: "full",
                size: "lg",
                className:
                  "px-10 py-8 text-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl",
              })}
            >
              <User size={24} />
              Aviso de Privacidad
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Enhanced Navigation Cards */}
        <div className="w-full max-w-7xl mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/about" className="block group">
              <Card
                isPressable
                className="hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full bg-gradient-to-br from-primary-50 via-content1 to-primary-100 border-2 border-primary-100 hover:border-primary-300 relative overflow-hidden"
              >
                {/* Animated background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/3 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>

                <CardHeader className="pb-4">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-gradient-to-br from-primary to-primary-600 p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Shield size={36} className="text-white" />
                    </div>
                    <Chip
                      size="md"
                      variant="shadow"
                      color="primary"
                      className="font-bold px-3"
                    >
                      Ético
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h3 className="font-bold text-xl mb-4 text-default-900 group-hover:text-primary transition-colors">
                    Aspectos Éticos y Legales
                  </h3>
                  <p className="text-sm text-default-600 leading-relaxed mb-6">
                    Principios fundamentales del manejo ético de información y
                    bases conceptuales para una gestión responsable de datos
                  </p>
                  <div className="flex items-center text-primary font-bold text-sm">
                    Explorar fundamentos
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </CardBody>
              </Card>
            </Link>

            <Link to="/laws" className="block group">
              <Card
                isPressable
                className="hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full bg-gradient-to-br from-success-50 via-content1 to-success-100 border-2 border-success-100 hover:border-success-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-success/3 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>

                <CardHeader className="pb-4">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-gradient-to-br from-success to-success-600 p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Scale size={36} className="text-white" />
                    </div>
                    <Chip
                      size="md"
                      variant="shadow"
                      color="success"
                      className="font-bold px-3"
                    >
                      Legal
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h3 className="font-bold text-xl mb-4 text-default-900 group-hover:text-success transition-colors">
                    Leyes Mexicanas
                  </h3>
                  <p className="text-sm text-default-600 leading-relaxed mb-6">
                    Marco legal nacional para protección de datos, propiedad
                    intelectual y derechos digitales establecidos por la
                    legislación vigente
                  </p>
                  <div className="flex items-center text-success font-bold text-sm">
                    Consultar normativas
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </CardBody>
              </Card>
            </Link>

            <Link to="/standards" className="block group">
              <Card
                isPressable
                className="hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full bg-gradient-to-br from-secondary-50 via-content1 to-secondary-100 border-2 border-secondary-100 hover:border-secondary-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/3 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>

                <CardHeader className="pb-4">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-gradient-to-br from-secondary to-secondary-600 p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Settings size={36} className="text-white" />
                    </div>
                    <Chip
                      size="md"
                      variant="shadow"
                      color="secondary"
                      className="font-bold px-3"
                    >
                      Global
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h3 className="font-bold text-xl mb-4 text-default-900 group-hover:text-secondary transition-colors">
                    Estándares Internacionales
                  </h3>
                  <p className="text-sm text-default-600 leading-relaxed mb-6">
                    Mejores prácticas y marcos de referencia reconocidos
                    mundialmente para la gestión profesional de información
                  </p>
                  <div className="flex items-center text-secondary font-bold text-sm">
                    Ver estándares
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </CardBody>
              </Card>
            </Link>

            <Link to="/privacy" className="block group">
              <Card
                isPressable
                className="hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full bg-gradient-to-br from-warning-50 via-content1 to-warning-100 border-2 border-warning-100 hover:border-warning-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-warning/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-warning/3 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>

                <CardHeader className="pb-4">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-gradient-to-br from-warning to-warning-600 p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <User size={36} className="text-white" />
                    </div>
                    <Chip
                      size="md"
                      variant="shadow"
                      color="warning"
                      className="font-bold px-3"
                    >
                      Privacidad
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h3 className="font-bold text-xl mb-4 text-default-900 group-hover:text-warning transition-colors">
                    Aviso de Privacidad
                  </h3>
                  <p className="text-sm text-default-600 leading-relaxed mb-6">
                    Políticas de tratamiento y protección de datos personales
                    conforme a la normativa legal vigente en México
                  </p>
                  <div className="flex items-center text-warning font-bold text-sm">
                    Revisar políticas
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </CardBody>
              </Card>
            </Link>
          </div>
        </div>

        {/* Enhanced About Section with better visual hierarchy */}
        <Card className="w-full max-w-7xl mt-24 bg-gradient-to-br from-default-50 via-content1 to-primary-50 border-2 border-default-200 relative overflow-hidden shadow-2xl">
          {/* Enhanced decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/15 to-transparent rounded-full -translate-x-20 -translate-y-20 animate-glow"></div>
          <div
            className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-secondary/15 to-transparent rounded-full translate-x-24 translate-y-24 animate-glow"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-success/10 to-warning/10 rounded-full -translate-x-16 -translate-y-16 animate-glow"
            style={{ animationDelay: "3s" }}
          ></div>

          <CardBody className="p-16 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <div className="space-y-8">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shadow-lg">
                      <Library size={32} className="text-white" />
                    </div>
                    <Chip
                      size="lg"
                      variant="shadow"
                      color="primary"
                      className="px-6 py-2 font-bold text-lg"
                    >
                      📚 Normateca Digital
                    </Chip>
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                    ¿Qué es Normateca Digital?
                  </h3>

                  <p className="text-default-700 text-xl lg:text-2xl leading-relaxed">
                    Una plataforma integral que{" "}
                    <span className="font-bold text-primary">revoluciona</span>{" "}
                    el acceso y comprensión de las normativas más importantes en
                    materia de protección de datos, propiedad intelectual y
                    seguridad de la información en México.
                  </p>
                </div>

                <div className="space-y-8">
                  <h4 className="text-2xl font-bold text-default-800 flex items-center gap-4">
                    <ShieldCheck size={24} className="text-secondary" />
                    Características Principales:
                  </h4>
                  <div className="grid gap-5">
                    {features.map((feature, index) => (
                      <Card
                        key={index}
                        className="bg-content1/80 backdrop-blur-md border border-default-200 hover:border-primary-300 transition-all duration-300 hover-lift"
                      >
                        <CardBody className="flex items-start gap-5 p-6">
                          <div className="flex-shrink-0 mt-1">
                            {feature.icon}
                          </div>
                          <div>
                            <h5 className="font-bold text-default-800 text-lg mb-2">
                              {feature.title}
                            </h5>
                            <p className="text-sm text-default-600 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </div>

                <Divider className="my-8" />

                <div className="flex gap-4 flex-wrap">
                  <Chip
                    color="primary"
                    variant="shadow"
                    startContent={<Scale size={16} />}
                    className="px-5 py-2 font-bold"
                  >
                    Legal
                  </Chip>
                  <Chip
                    color="secondary"
                    variant="shadow"
                    startContent={<Settings size={16} />}
                    className="px-5 py-2 font-bold"
                  >
                    Técnico
                  </Chip>
                  <Chip
                    color="success"
                    variant="shadow"
                    startContent={<Book size={16} />}
                    className="px-5 py-2 font-bold"
                  >
                    Educativo
                  </Chip>
                  <Chip
                    color="warning"
                    variant="shadow"
                    startContent={<TrendingUp size={16} />}
                    className="px-5 py-2 font-bold"
                  >
                    Actualizado
                  </Chip>
                </div>
              </div>

              {/* Enhanced Visual Section */}
              <div className="flex justify-center items-center">
                <div className="relative">
                  {/* Enhanced glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full blur-3xl animate-glow"></div>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full blur-2xl animate-glow"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  <div className="relative bg-gradient-to-br from-content1 via-default-50 to-default-100 p-20 rounded-full border-4 border-default-200 shadow-2xl">
                    {/* Inner grid of icons with better spacing */}
                    <div className="grid grid-cols-2 gap-10">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-8 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-primary/20">
                        <Shield size={48} className="text-primary" />
                      </div>
                      <div className="bg-gradient-to-br from-success/20 to-success/10 p-8 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-success/20">
                        <Scale size={48} className="text-success" />
                      </div>
                      <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 p-8 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-secondary/20">
                        <Settings size={48} className="text-secondary" />
                      </div>
                      <div className="bg-gradient-to-br from-warning/20 to-warning/10 p-8 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-warning/20">
                        <User size={48} className="text-warning" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced floating elements */}
                  <div className="absolute -top-6 -left-6 bg-primary/30 p-4 rounded-full animate-bounce shadow-lg">
                    <Book size={24} className="text-primary" />
                  </div>
                  <div
                    className="absolute -top-6 -right-6 bg-success/30 p-4 rounded-full animate-bounce shadow-lg"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <FileText size={24} className="text-success" />
                  </div>
                  <div
                    className="absolute -bottom-6 -left-6 bg-secondary/30 p-4 rounded-full animate-bounce shadow-lg"
                    style={{ animationDelay: "1s" }}
                  >
                    <Gavel size={24} className="text-secondary" />
                  </div>
                  <div
                    className="absolute -bottom-6 -right-6 bg-warning/30 p-4 rounded-full animate-bounce shadow-lg"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <Search size={24} className="text-warning" />
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Enhanced Call to Action */}
        <Card className="w-full max-5xl mt-20 bg-gradient-to-r from-primary via-secondary to-primary border-0 relative overflow-hidden shadow-2xl">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0 bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.8'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-4 left-4 animate-bounce">
            <Book size={20} className="text-white/30" />
          </div>
          <div
            className="absolute top-8 right-8 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <Scale size={24} className="text-white/30" />
          </div>
          <div
            className="absolute bottom-8 left-8 animate-bounce"
            style={{ animationDelay: "2s" }}
          >
            <Shield size={22} className="text-white/30" />
          </div>

          <CardBody className="p-16 text-center relative">
            <div className="space-y-10">
              <div className="animate-bounce">
                <Globe
                  size={80}
                  className="text-white mx-auto drop-shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Comienza tu Exploración Legal
                </h3>
                <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                  Descubre el marco legal y los estándares que tu organización
                  necesita conocer. Navega por nuestra biblioteca digital
                  especializada y mantente actualizado con la normativa vigente.
                </p>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/about"
                  className={buttonStyles({
                    color: "default",
                    variant: "solid",
                    radius: "full",
                    size: "lg",
                    className:
                      "bg-white text-primary hover:bg-white/90 font-bold px-12 py-8 text-xl hover:scale-105 transition-all duration-300 shadow-2xl",
                  })}
                >
                  <Search size={24} />
                  Iniciar Exploración
                  <ArrowRight size={24} />
                </Link>

                <Link
                  to="/laws"
                  className={buttonStyles({
                    variant: "bordered",
                    radius: "full",
                    size: "lg",
                    className:
                      "border-3 border-white text-white hover:bg-white hover:text-primary font-bold px-12 py-8 text-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm",
                  })}
                >
                  <Scale size={24} />
                  Ver Normativas
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span className="font-semibold">Normativas Actualizadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={20} />
                  <span className="font-semibold">Información Confiable</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={20} />
                  <span className="font-semibold">
                    Estándares Internacionales
                  </span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Footer with additional info */}
        <div className="text-center pt-12 max-w-3xl mx-auto">
          <p className="text-default-500 text-lg leading-relaxed">
            Normateca Digital es tu aliado para navegar el complejo mundo
            normativo con confianza y precisión
          </p>
          <div className="mt-6 flex justify-center items-center gap-2">
            <Building size={16} className="text-default-400" />
            <span className="text-default-400 text-sm">
              Una iniciativa académica para profesionales del derecho y
              tecnología
            </span>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
