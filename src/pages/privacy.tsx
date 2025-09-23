import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { 
  ArrowLeftIcon, 
  ShieldIcon, 
  UserIcon, 
  MailIcon, 
  GlobeIcon,
  FileTextIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  CookieIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";

export default function PrivacyPage() {
  const sections = [
    {
      id: "purpose",
      title: "Finalidades del tratamiento de datos",
      icon: <FileTextIcon size={18} className="text-primary" />,
      color: "primary"
    },
    {
      id: "data",
      title: "Datos personales recabados", 
      icon: <UserIcon size={18} className="text-secondary" />,
      color: "secondary"
    },
    {
      id: "transfer",
      title: "Transferencia de datos",
      icon: <GlobeIcon size={18} className="text-success" />,
      color: "success"
    },
    {
      id: "rights",
      title: "Derechos ARCO",
      icon: <ShieldIcon size={18} className="text-warning" />,
      color: "warning"
    },
    {
      id: "cookies",
      title: "Uso de cookies",
      icon: <CookieIcon size={18} className="text-danger" />,
      color: "danger"
    },
    {
      id: "modifications",
      title: "Modificaciones al aviso",
      icon: <AlertCircleIcon size={18} className="text-default-600" />,
      color: "default"
    }
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-8 py-8 md:py-12 max-w-5xl mx-auto px-4">
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
            color="warning"
            startContent={<ShieldIcon size={14} />}
            size="sm"
          >
            Protección de Datos
          </Chip>
        </div>

        {/* Título principal */}
        <div className="text-center space-y-3">
          <h1 className={`${title()} text-4xl md:text-5xl bg-gradient-to-r from-warning to-warning-600 bg-clip-text text-transparent`}>
            Aviso de Privacidad
          </h1>
          <p className="text-default-500 text-lg max-w-2xl mx-auto">
            Política de tratamiento y protección de datos personales
          </p>
        </div>

        {/* Información del responsable */}
        <Card className="bg-gradient-to-br from-warning-50 via-content1 to-warning-100 border-1 border-warning-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-warning/10 p-3 rounded-xl">
                <UserIcon size={24} className="text-warning" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-default-900">Responsable</h2>
                <p className="text-sm text-default-600">Información del controlador de datos</p>
              </div>
            </div>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="bg-content1 p-6 rounded-xl border border-default-200">
              <div className="space-y-3">
                <p className="text-default-700">
                  <strong>Leonel Díaz & Cristian Oropeza</strong>
                </p>
                <div className="flex items-start gap-2">
                  <MailIcon size={16} className="text-warning mt-1 flex-shrink-0" />
                  <div>
                    <strong>Domicilio:</strong> Educación Tecnológica 34, Fracc. Universidad, 
                    37800 Dolores Hidalgo Cuna de la Independencia Nacional, Guanajuato
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <GlobeIcon size={16} className="text-warning" />
                  <strong>Portal web:</strong> http://localhost:5173/
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Navegación de secciones */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {sections.map((section, index) => (
            <Card key={index} className="bg-content1/50 hover:bg-content1 transition-colors cursor-pointer">
              <CardBody className="p-4">
                <div className="flex items-center gap-3">
                  {section.icon}
                  <span className="text-sm font-medium text-default-700">
                    {section.title}
                  </span>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Contenido principal */}
        <div className="space-y-8">
          {/* Sección 1 - Finalidades */}
          <Card className="bg-content1 border-1 border-default-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <FileTextIcon size={20} className="text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-default-900">
                  1. Finalidades del tratamiento de datos
                </h2>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="space-y-4">
                <p className="text-default-600 leading-relaxed">
                  Los datos personales que recabamos, como nombre, correo electrónico e institución de procedencia, 
                  serán utilizados para las siguientes finalidades:
                </p>
                
                <div className="bg-primary-50 p-4 rounded-xl border-l-4 border-primary">
                  <h3 className="font-semibold text-default-800 mb-2">Finalidades Principales:</h3>
                  <div className="space-y-2">
                    {[
                      "Proveer el acceso a la Normateca Web",
                      "Identificar a los usuarios que ingresan a la plataforma", 
                      "Establecer contacto para dar seguimiento a solicitudes",
                      "Mantener actualizada nuestra base de datos"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircleIcon size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-default-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary-50 p-4 rounded-xl border-l-4 border-secondary">
                  <h3 className="font-semibold text-default-800 mb-2">Finalidades Secundarias:</h3>
                  <div className="space-y-2">
                    {[
                      "Elaboración de estadísticas internas",
                      "Mejoras en la experiencia del usuario"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircleIcon size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-default-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-warning-50 p-4 rounded-xl">
                  <p className="text-sm text-default-700">
                    <strong>Contacto para opt-out:</strong> Si no desea que sus datos sean utilizados para fines secundarios, 
                    puede indicarlo escribiendo a:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <a 
                      href="mailto:oropezacristian40@gmail.com"
                      className="text-warning hover:text-warning-600 transition-colors font-medium"
                    >
                      oropezacristian40@gmail.com
                    </a>
                    <span className="text-default-400">•</span>
                    <a 
                      href="mailto:bhleonel705@gmail.com"
                      className="text-warning hover:text-warning-600 transition-colors font-medium"
                    >
                      bhleonel705@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Sección 2 - Datos recabados */}
          <Card className="bg-content1 border-1 border-default-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <UserIcon size={20} className="text-secondary" />
                </div>
                <h2 className="text-xl font-semibold text-default-900">
                  2. Datos personales recabados
                </h2>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-default-800">Datos de identificación:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span>Nombre completo</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span>Correo electrónico</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-default-800">Datos técnicos:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span>Dirección IP</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span>Datos de navegación</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Secciones restantes con diseño compacto */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Transferencia */}
            <Card className="bg-content1 border-1 border-default-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-success/10 p-2 rounded-lg">
                    <GlobeIcon size={20} className="text-success" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-default-900">3. Transferencia</h2>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <p className="text-sm text-default-600">
                  Sus datos personales no serán compartidos con terceros, salvo los casos 
                  previstos en la Ley Federal de Protección de Datos Personales.
                </p>
              </CardBody>
            </Card>

            {/* Derechos ARCO */}
            <Card className="bg-content1 border-1 border-default-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-warning/10 p-2 rounded-lg">
                    <ShieldIcon size={20} className="text-warning" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-default-900">4. Derechos ARCO</h2>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {["Acceso", "Rectificación", "Cancelación", "Oposición"].map((right, index) => (
                      <Chip key={index} size="sm" variant="flat" color="warning">
                        {right}
                      </Chip>
                    ))}
                  </div>
                  <p className="text-sm text-default-600">
                    Ejercite sus derechos enviando solicitud con nombre, contacto y descripción 
                    de datos a nuestros correos de contacto.
                  </p>
                </div>
              </CardBody>
            </Card>

            {/* Cookies */}
            <Card className="bg-content1 border-1 border-default-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-danger/10 p-2 rounded-lg">
                    <CookieIcon size={20} className="text-danger" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-default-900">5. Cookies</h2>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <p className="text-sm text-default-600">
                  Este sitio puede utilizar cookies para mejorar la experiencia de navegación. 
                  Puede deshabilitarlas en su navegador.
                </p>
              </CardBody>
            </Card>

            {/* Modificaciones */}
            <Card className="bg-content1 border-1 border-default-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-default-100 p-2 rounded-lg">
                    <AlertCircleIcon size={20} className="text-default-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-default-900">6. Modificaciones</h2>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <p className="text-sm text-default-600">
                  Las modificaciones estarán disponibles en: 
                  <br />
                  <strong>http://localhost:5173/</strong>
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Información de contacto */}
          <Card className="bg-gradient-to-r from-primary-50 to-warning-50 border-1 border-primary-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <MailIcon size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-default-900">7. Contacto</h2>
                  <p className="text-sm text-default-600">Información para dudas y consultas</p>
                </div>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="space-y-4">
                <p className="text-default-700">
                  Si tiene dudas sobre este aviso de privacidad, puede comunicarse con nosotros:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-content1 p-4 rounded-xl border border-default-200">
                    <h3 className="font-semibold text-default-800 mb-2">Correos electrónicos:</h3>
                    <div className="space-y-2">
                      <a 
                        href="mailto:oropezacristian40@gmail.com" 
                        className="flex items-center gap-2 text-primary hover:text-primary-600 transition-colors text-sm"
                      >
                        <MailIcon size={14} />
                        oropezacristian40@gmail.com
                      </a>
                      <a 
                        href="mailto:bhleonel705@gmail.com" 
                        className="flex items-center gap-2 text-primary hover:text-primary-600 transition-colors text-sm"
                      >
                        <MailIcon size={14} />
                        bhleonel705@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="bg-content1 p-4 rounded-xl border border-default-200">
                    <h3 className="font-semibold text-default-800 mb-2">Sitio web:</h3>
                    <div className="flex items-center gap-2 text-sm text-default-600">
                      <GlobeIcon size={14} />
                      http://localhost:5173/
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-default-200">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircleIcon size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Documento vigente</span>
          </div>
          <p className="text-default-400 text-sm">
            Última actualización: 20 de septiembre de 2025
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}