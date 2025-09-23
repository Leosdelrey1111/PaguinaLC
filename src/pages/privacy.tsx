import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { title } from "@/components/primitives";
import {
  ArrowLeft,
  Shield,
  User,
  Mail,
  Globe,
  FileText,
  CheckCircle,
  ExternalLink,
  Eye,
  Lock,
  Settings,
  Sparkles,
  Award,
  Scale,
  Users,
  Building,
  Download,
} from "lucide-react";
import DefaultLayout from "@/layouts/default";

export default function PrivacyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Add custom CSS animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float-privacy {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-12px) rotate(2deg); }
        50% { transform: translateY(0px) rotate(0deg); }
        75% { transform: translateY(-6px) rotate(-1deg); }
      }
      
      @keyframes glow-warning {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.05); }
      }
      
      @keyframes border-warning {
        0%, 100% { box-shadow: 0 0 25px rgba(245, 158, 11, 0.3); }
        50% { box-shadow: 0 0 40px rgba(245, 158, 11, 0.5); }
      }
      
      @keyframes slideUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      .float-privacy { animation: float-privacy 7s ease-in-out infinite; }
      .glow-warning { animation: glow-warning 4s ease-in-out infinite; }
      .border-warning { animation: border-warning 3s ease-in-out infinite; }
      .slide-up { animation: slideUp 0.6s ease-out forwards; }
      
      .hover-privacy {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-privacy:hover {
        transform: translateY(-8px) scale(1.02);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleBackClick = () => {
    window.history.back();
  };

  const handlePdfClick = (e: React.MouseEvent, pdfName: string) => {
    e.stopPropagation();
    window.open(`/pdfs/${pdfName}`, "_blank");
  };

  // Floating elements for background
  const floatingElements = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    delay: i * 2.2,
    duration: 7 + (i % 2),
    x: 8 + ((i * 20) % 84),
    y: 15 + ((i * 25) % 70),
    scale: 0.4 + Math.random() * 0.3,
    icon: i % 3 === 0 ? Shield : i % 3 === 1 ? Lock : Eye,
    color:
      i % 3 === 0
        ? "text-warning"
        : i % 3 === 1
          ? "text-secondary"
          : "text-primary",
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
              className={`absolute opacity-4 float-privacy`}
              style={{
                left: `${elem.x}%`,
                top: `${elem.y}%`,
                transform: `scale(${elem.scale})`,
                animationDelay: `${elem.delay}s`,
                animationDuration: `${elem.duration}s`,
              }}
            >
              <IconComponent size={90} className={elem.color} />
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
              color="warning"
              startContent={<Shield size={16} />}
              size="lg"
              className="px-6 py-2 font-bold"
            >
              Protección de Datos
            </Chip>
            <Chip
              variant="flat"
              color="secondary"
              startContent={<Scale size={14} />}
              size="md"
              className="px-4 font-medium"
            >
              LFPDPPP
            </Chip>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Enhanced logo/icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-warning/30 to-amber-400/30 rounded-full blur-2xl glow-warning"></div>
              <div className="relative bg-gradient-to-br from-warning via-amber-500 to-warning p-10 rounded-3xl shadow-2xl">
                <div className="absolute inset-2 bg-white/15 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Shield size={56} className="text-white drop-shadow-lg" />
                  <div className="h-14 w-0.5 bg-white/40 rounded-full mx-2"></div>
                  <Lock size={56} className="text-white drop-shadow-lg" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 bg-white/20 p-2 rounded-full animate-bounce">
                  <Eye size={16} className="text-white" />
                </div>
                <div
                  className="absolute -bottom-3 -right-3 bg-white/20 p-2 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <Scale size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1
              className={`${title()} text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-warning via-amber-500 to-warning bg-clip-text text-transparent font-bold leading-tight`}
            >
              Aviso de Privacidad
            </h1>
            <p className="text-default-500 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Política de tratamiento y protección de datos personales conforme
              a la normativa mexicana
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Chip
                variant="flat"
                color="warning"
                startContent={<CheckCircle size={14} />}
                className="px-4"
              >
                LFPDPPP Cumplimiento
              </Chip>
              <Chip
                variant="flat"
                color="primary"
                startContent={<Award size={14} />}
                className="px-4"
              >
                Transparencia Total
              </Chip>
              <Chip
                variant="flat"
                color="success"
                startContent={<Sparkles size={14} />}
                className="px-4"
              >
                Actualizado 2024
              </Chip>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            {
              number: "ARCO",
              label: "Derechos",
              color: "text-warning",
              icon: Scale,
            },
            {
              number: "SSL",
              label: "Encriptación",
              color: "text-primary",
              icon: Lock,
            },
            {
              number: "24/7",
              label: "Protección",
              color: "text-success",
              icon: Shield,
            },
            {
              number: "0",
              label: "Transferencias",
              color: "text-secondary",
              icon: Users,
            },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="bg-content1/80 backdrop-blur-md border-2 border-default-200 hover:border-warning/40 transition-all duration-500 hover-privacy group"
              >
                <CardBody className="text-center p-8">
                  <div
                    className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <div
                    className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-105 transition-transform`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-base text-default-600 font-semibold">
                    {stat.label}
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Responsible Information Section */}
        <Card className="max-w-6xl mx-auto bg-gradient-to-br from-warning-50 via-content1 to-amber-50 border-2 border-warning-200 relative overflow-hidden shadow-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-warning/15 to-transparent rounded-full -translate-x-16 -translate-y-16 glow-warning"></div>
          <div
            className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-amber-400/15 to-transparent rounded-full translate-x-20 translate-y-20 glow-warning"
            style={{ animationDelay: "1.5s" }}
          ></div>

          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-warning to-amber-600 p-4 rounded-2xl shadow-lg">
                <Building size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-default-900">
                  Responsable del Tratamiento
                </h2>
                <p className="text-default-600">
                  Información del controlador de datos personales
                </p>
              </div>
            </div>
          </CardHeader>

          <CardBody className="pt-0">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-content1 p-8 rounded-2xl border-2 border-warning-100 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-warning/10 p-2 rounded-lg mt-1">
                        <User size={18} className="text-warning" />
                      </div>
                      <div>
                        <h3 className="font-bold text-default-800 text-lg">
                          Identidad
                        </h3>
                        <p className="text-default-700">
                          Leonel Díaz & Cristian Oropeza
                        </p>
                      </div>
                    </div>

                    <Divider />

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg mt-1">
                        <Building size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-default-800">
                          Domicilio
                        </h3>
                        <p className="text-default-700 leading-relaxed">
                          Educación Tecnológica 34, Fracc. Universidad
                          <br />
                          37800 Dolores Hidalgo Cuna de la Independencia
                          Nacional
                          <br />
                          Guanajuato, México
                        </p>
                      </div>
                    </div>

                    <Divider />

                    <div className="flex items-start gap-3">
                      <div className="bg-success/10 p-2 rounded-lg mt-1">
                        <Globe size={18} className="text-success" />
                      </div>
                      <div>
                        <h3 className="font-bold text-default-800">
                          Portal Web
                        </h3>
                        <p className="text-success font-medium">
                          http://localhost:5173/
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced visual element */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-warning/20 to-amber-400/20 rounded-full blur-3xl glow-warning"></div>

                  <div className="relative bg-gradient-to-br from-content1 to-warning-50 p-16 rounded-full border-4 border-warning-200 shadow-2xl">
                    {/* Inner grid of icons */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-warning/20 to-amber-500/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-warning/20">
                        <Shield size={32} className="text-warning" />
                      </div>
                      <div className="bg-gradient-to-br from-primary/20 to-blue-500/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-primary/20">
                        <Lock size={32} className="text-primary" />
                      </div>
                      <div className="bg-gradient-to-br from-secondary/20 to-purple-500/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-secondary/20">
                        <Scale size={32} className="text-secondary" />
                      </div>
                      <div className="bg-gradient-to-br from-success/20 to-green-500/10 p-6 rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer border border-success/20">
                        <Eye size={32} className="text-success" />
                      </div>
                    </div>
                  </div>

                  {/* Floating icons */}
                  <div className="absolute -top-4 -left-4 bg-warning/20 p-3 rounded-full animate-bounce">
                    <Settings size={20} className="text-warning" />
                  </div>
                  <div
                    className="absolute -top-4 -right-4 bg-primary/20 p-3 rounded-full animate-bounce"
                    style={{ animationDelay: "1.2s" }}
                  >
                    <FileText size={20} className="text-primary" />
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 bg-success/20 p-3 rounded-full animate-bounce"
                    style={{ animationDelay: "2.4s" }}
                  >
                    <CheckCircle size={20} className="text-success" />
                  </div>
                  <div
                    className="absolute -bottom-4 -right-4 bg-secondary/20 p-3 rounded-full animate-bounce"
                    style={{ animationDelay: "3.6s" }}
                  >
                    <Mail size={20} className="text-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Key Information Summary */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 hover-privacy">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <FileText size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    Finalidades
                  </h3>
                  <p className="text-sm text-primary/70">Uso de datos</p>
                </div>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm text-default-700">
                    Acceso a plataforma
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm text-default-700">
                    Identificación de usuarios
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm text-default-700">
                    Soporte técnico
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="bg-gradient-to-br from-secondary-50 to-secondary-100 border-2 border-secondary-200 hover-privacy">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <Scale size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary">
                    Derechos ARCO
                  </h3>
                  <p className="text-sm text-secondary/70">Sus derechos</p>
                </div>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="grid grid-cols-2 gap-2">
                <Chip size="sm" variant="flat" color="secondary">
                  Acceso
                </Chip>
                <Chip size="sm" variant="flat" color="secondary">
                  Rectificación
                </Chip>
                <Chip size="sm" variant="flat" color="secondary">
                  Cancelación
                </Chip>
                <Chip size="sm" variant="flat" color="secondary">
                  Oposición
                </Chip>
              </div>
              <p className="text-xs text-default-600 mt-3">
                Ejercite sus derechos contactándonos directamente
              </p>
            </CardBody>
          </Card>

          <Card className="bg-gradient-to-br from-success-50 to-success-100 border-2 border-success-200 hover-privacy">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-success/10 p-3 rounded-xl">
                  <Shield size={24} className="text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-success">Seguridad</h3>
                  <p className="text-sm text-success/70">Protección</p>
                </div>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Lock size={16} className="text-success" />
                  <span className="text-sm text-default-700">
                    Datos encriptados
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={16} className="text-success" />
                  <span className="text-sm text-default-700">
                    No transferencias
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-success" />
                  <span className="text-sm text-default-700">
                    Cumplimiento legal
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-warning-50 to-amber-50 border-2 border-warning-200 shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-warning/10 p-3 rounded-xl">
                <Mail size={24} className="text-warning" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-default-900">
                  Contacto para Ejercer Derechos
                </h2>
                <p className="text-sm text-default-600">
                  Información para consultas sobre privacidad
                </p>
              </div>
            </div>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-content1 p-6 rounded-xl border border-warning-100">
                <h3 className="font-semibold text-default-800 mb-4 flex items-center gap-2">
                  <Mail size={18} className="text-warning" />
                  Correos Electrónicos
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:oropezacristian40@gmail.com"
                    className="flex items-center gap-2 text-warning hover:text-warning-600 transition-colors font-medium"
                  >
                    <div className="w-2 h-2 bg-warning rounded-full" />
                    oropezacristian40@gmail.com
                  </a>
                  <a
                    href="mailto:bhleonel705@gmail.com"
                    className="flex items-center gap-2 text-warning hover:text-warning-600 transition-colors font-medium"
                  >
                    <div className="w-2 h-2 bg-warning rounded-full" />
                    bhleonel705@gmail.com
                  </a>
                </div>
              </div>
              <div className="bg-content1 p-6 rounded-xl border border-warning-100">
                <h3 className="font-semibold text-default-800 mb-4 flex items-center gap-2">
                  <Globe size={18} className="text-success" />
                  Sitio Web
                </h3>
                <div className="flex items-center gap-2 text-success font-medium">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  http://localhost:5173/
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* PDF Download Section */}
        <Card className="max-w-5xl mx-auto bg-gradient-to-br from-default-50 via-content1 to-warning-50 border-2 border-default-200 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-warning/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

          <CardBody className="p-12 text-center">
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-warning/20 to-amber-400/20 rounded-full blur-xl glow-warning"></div>
                  <div className="relative bg-gradient-to-br from-warning to-amber-600 p-8 rounded-3xl shadow-lg">
                    <FileText size={48} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-warning to-amber-600 bg-clip-text text-transparent">
                  Documento Completo
                </h2>
                <p className="text-default-600 text-lg max-w-3xl mx-auto leading-relaxed">
                  Descarga el aviso de privacidad completo en formato PDF con
                  todos los detalles sobre el tratamiento, finalidades,
                  transferencias y procedimientos para el ejercicio de derechos
                  ARCO.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Chip
                  variant="flat"
                  color="warning"
                  startContent={<Scale size={14} />}
                  className="px-4"
                >
                  LFPDPPP Compliant
                </Chip>
                <Chip
                  variant="flat"
                  color="primary"
                  startContent={<FileText size={14} />}
                  className="px-4"
                >
                  Documento Legal
                </Chip>
                <Chip
                  variant="flat"
                  color="success"
                  startContent={<Download size={14} />}
                  className="px-4"
                >
                  PDF Descargable
                </Chip>
              </div>

              <div className="pt-4">
                <Button
                  color="warning"
                  variant="shadow"
                  size="lg"
                  endContent={<ExternalLink size={20} />}
                  onClick={(e) => handlePdfClick(e, "aviso-privacidad.pdf")}
                  className="font-bold px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
                >
                  Descargar Aviso de Privacidad Completo
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Enhanced Footer */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-default-50 to-warning-50 border border-default-200">
          <CardBody className="p-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-success" />
                <span className="font-semibold text-success">
                  Documento Vigente y Actualizado
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
                  Conforme a la Ley Federal de Protección de Datos Personales
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}
