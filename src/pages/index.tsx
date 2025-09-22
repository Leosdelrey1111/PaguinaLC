import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import {
  BookIcon,
  ShieldIcon,
  ScaleIcon,
  CogIcon,
  UserIcon,
  ArrowRightIcon,
  GlobeIcon,
  TrendingUpIcon,
  CheckCircleIcon,
  StarIcon
} from "lucide-react";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const features = [
    {
      title: "Marco Legal Actualizado",
      description: "Leyes mexicanas vigentes en materia de protección de datos",
      icon: <CheckCircleIcon size={20} className="text-success" />,
    },
    {
      title: "Estándares Globales",
      description: "Mejores prácticas internacionales reconocidas mundialmente",
      icon: <StarIcon size={20} className="text-warning" />,
    },
    {
      title: "Recursos Educativos",
      description: "Material de consulta para profesionales y estudiantes",
      icon: <BookIcon size={20} className="text-primary" />,
    },
    {
      title: "Fácil Navegación",
      description: "Interfaz intuitiva para acceso rápido a la información",
      icon: <TrendingUpIcon size={20} className="text-secondary" />,
    },
  ];

  const stats = [
    { number: "4", label: "Secciones", color: "text-primary" },
    { number: "10+", label: "Documentos", color: "text-success" },
    { number: "5", label: "Estándares", color: "text-secondary" },
    { number: "2025", label: "Actualizado", color: "text-warning" },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl space-y-6">
          {/* Logo y título principal */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl">
                <BookIcon size={64} className="text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <span className={`${title()} text-5xl md:text-6xl bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent`}>
                Normateca&nbsp;
              </span>
              <span className={`${title()} text-5xl md:text-6xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent`}>
                Digital
              </span>
            </div>
            <h2 className={`${title({ size: "sm" })} text-2xl md:text-3xl text-default-800`}>
              Sistema Integral de Normativas
            </h2>
            <div className={`${subtitle()} text-lg md:text-xl max-w-2xl mx-auto`}>
              Plataforma especializada en normativas legales y estándares técnicos
              de información en México
            </div>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
                  {stat.number}
                </div>
                <div className="text-sm text-default-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación principales */}
        <div className="flex gap-4 flex-wrap justify-center max-w-2xl">
          <Link
            to="/about"
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              size: "lg",
            })}
          >
            <ShieldIcon size={18} />
            Aspectos Éticos
            <ArrowRightIcon size={16} />
          </Link>
          <Link
            to="/laws"
            className={buttonStyles({
              color: "success",
              variant: "shadow",
              radius: "full",
              size: "lg",
            })}
          >
            <ScaleIcon size={18} />
            Leyes Mexicanas
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        <div className="flex gap-4 flex-wrap justify-center max-w-2xl">
          <Link
            to="/standards"
            className={buttonStyles({
              color: "secondary",
              variant: "shadow",
              radius: "full",
              size: "lg",
            })}
          >
            <CogIcon size={18} />
            Estándares
            <ArrowRightIcon size={16} />
          </Link>
          <Link
            to="/privacy"
            className={buttonStyles({
              color: "warning",
              variant: "shadow",
              radius: "full",
              size: "lg",
            })}
          >
            <UserIcon size={18} />
            Aviso de Privacidad
            <ArrowRightIcon size={16} />
          </Link>
        </div>

        {/* Cards de navegación principales */}
        <div className="w-full max-w-6xl mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/about" className="block group">
              <Card
                isPressable
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full bg-gradient-to-br from-primary-50 to-content1 border-1 border-primary-100 hover:border-primary-200"
              >
                <CardHeader className="pb-2">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <ShieldIcon size={32} className="text-primary" />
                    </div>
                    <Chip size="sm" variant="flat" color="primary">Ético</Chip>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h3 className="font-bold text-lg mb-2 text-default-900">
                    Aspectos Éticos y Legales
                  </h3>
                  <p className="text-sm text-default-600 leading-relaxed">
                    Principios fundamentales del manejo ético de información y bases conceptuales
                  </p>
                </CardBody>
              </Card>
            </Link>

            <Link to="/laws" className="block group">
              <Card
                isPressable
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full bg-gradient-to-br from-success-50 to-content1 border-1 border-success-100 hover:border-success-200"
              >
                <CardHeader className="pb-2">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-success/10 p-3 rounded-xl group-hover:bg-success/20 transition-colors">
                      <ScaleIcon size={32} className="text-success" />
                    </div>
                    <Chip size="sm" variant="flat" color="success">Legal</Chip>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h3 className="font-bold text-lg mb-2 text-default-900">
                    Leyes Mexicanas
                  </h3>
                  <p className="text-sm text-default-600 leading-relaxed">
                    Marco legal nacional para protección de datos y derechos digitales
                  </p>
                </CardBody>
              </Card>
            </Link>

            <Link to="/standards" className="block group">
              <Card
                isPressable
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full bg-gradient-to-br from-secondary-50 to-content1 border-1 border-secondary-100 hover:border-secondary-200"
              >
                <CardHeader className="pb-2">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-secondary/10 p-3 rounded-xl group-hover:bg-secondary/20 transition-colors">
                      <CogIcon size={32} className="text-secondary" />
                    </div>
                    <Chip size="sm" variant="flat" color="secondary">Global</Chip>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h3 className="font-bold text-lg mb-2 text-default-900">
                    Estándares Internacionales
                  </h3>
                  <p className="text-sm text-default-600 leading-relaxed">
                    Mejores prácticas y marcos de referencia reconocidos mundialmente
                  </p>
                </CardBody>
              </Card>
            </Link>

            <Link to="/privacy" className="block group">
              <Card
                isPressable
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full bg-gradient-to-br from-warning-50 to-content1 border-1 border-warning-100 hover:border-warning-200"
              >
                <CardHeader className="pb-2">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-warning/10 p-3 rounded-xl group-hover:bg-warning/20 transition-colors">
                      <UserIcon size={32} className="text-warning" />
                    </div>
                    <Chip size="sm" variant="flat" color="warning">Privacidad</Chip>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h3 className="font-bold text-lg mb-2 text-default-900">
                    Aviso de Privacidad
                  </h3>
                  <p className="text-sm text-default-600 leading-relaxed">
                    Políticas de tratamiento y protección de datos personales
                  </p>
                </CardBody>
              </Card>
            </Link>
          </div>
        </div>

        {/* Sección ¿Qué es Normateca Digital? */}
        <Card className="w-full max-w-5xl mt-16 bg-gradient-to-br from-default-50 via-content1 to-primary-50 border-1 border-default-200">
          <CardBody className="p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    ¿Qué es Normateca Digital?
                  </h3>
                  <p className="text-default-700 text-lg leading-relaxed">
                    Es una plataforma integral que facilita el acceso y
                    comprensión de las normativas más importantes en materia de
                    protección de datos, propiedad intelectual y seguridad de la
                    información en México.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-default-800">
                    Características Principales:
                  </h4>
                  <div className="grid gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-content1 rounded-lg border border-default-200">
                        <div className="flex-shrink-0 mt-0.5">
                          {feature.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-default-800 text-sm">
                            {feature.title}
                          </h5>
                          <p className="text-xs text-default-600 mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Divider />
                
                <div className="flex gap-3 flex-wrap">
                  <Chip color="primary" variant="flat" startContent={<ScaleIcon size={14} />}>
                    Legal
                  </Chip>
                  <Chip color="secondary" variant="flat" startContent={<CogIcon size={14} />}>
                    Técnico
                  </Chip>
                  <Chip color="success" variant="flat" startContent={<BookIcon size={14} />}>
                    Educativo
                  </Chip>
                  <Chip color="warning" variant="flat" startContent={<TrendingUpIcon size={14} />}>
                    Actualizado
                  </Chip>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                  <div className="relative bg-gradient-to-br from-content1 to-default-100 p-12 rounded-3xl border-2 border-default-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary/10 p-4 rounded-2xl flex items-center justify-center">
                        <ShieldIcon size={32} className="text-primary" />
                      </div>
                      <div className="bg-success/10 p-4 rounded-2xl flex items-center justify-center">
                        <ScaleIcon size={32} className="text-success" />
                      </div>
                      <div className="bg-secondary/10 p-4 rounded-2xl flex items-center justify-center">
                        <CogIcon size={32} className="text-secondary" />
                      </div>
                      <div className="bg-warning/10 p-4 rounded-2xl flex items-center justify-center">
                        <UserIcon size={32} className="text-warning" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Call to action final */}
        <Card className="w-full max-w-3xl mt-12 bg-gradient-to-r from-primary to-secondary border-0">
          <CardBody className="p-8 text-center">
            <div className="space-y-4">
              <GlobeIcon size={48} className="text-white mx-auto" />
              <h3 className="text-2xl font-bold text-white">
                Comienza a Explorar
              </h3>
              <p className="text-white/90 text-lg max-w-lg mx-auto">
                Descubre el marco legal y los estándares que tu organización necesita conocer
              </p>
              <div className="pt-4">
                <Link
                  to="/about"
                  className={buttonStyles({
                    color: "default",
                    variant: "solid",
                    radius: "full",
                    size: "lg",
                    className: "bg-white text-primary hover:bg-white/90 font-semibold"
                  })}
                >
                  Iniciar Exploración
                  <ArrowRightIcon size={18} />
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}