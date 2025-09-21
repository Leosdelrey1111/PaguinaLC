import { Link } from "react-router-dom";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import { BookIcon, ShieldIcon, ScaleIcon, CogIcon, UserIcon } from "lucide-react";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="flex justify-center mb-6">
            <BookIcon size={64} className="text-primary" />
          </div>
          <span className={title()}>Normateca&nbsp;</span>
          <span className={title({ color: "violet" })}>Digital&nbsp;</span>
          <br />
          <span className={title()}>
            Sistema Integral de Normativas
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Plataforma especializada en normativas legales y estándares técnicos de información en México.
          </div>
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          <Link
            to="/about"
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Aspectos Éticos
          </Link>
          <Link
            to="/laws"
            className={buttonStyles({ 
              color: "success", 
              variant: "bordered", 
              radius: "full" 
            })}
          >
            Leyes Mexicanas
          </Link>
          <Link
            to="/standards"
            className={buttonStyles({ 
              color: "secondary", 
              variant: "bordered", 
              radius: "full" 
            })}
          >
            Estándares
          </Link>
          <Link
            to="/privacy"
            className={buttonStyles({ 
              color: "warning", 
              variant: "bordered", 
              radius: "full" 
            })}
          >
            Aviso de Privacidad
          </Link>
        </div>

        <div className="mt-8 w-full max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/about" className="block">
              <Card 
                isPressable 
                className="hover:shadow-lg transition-all hover:scale-105 h-full"
              >
                <CardBody className="flex flex-col items-center p-6">
                  <ShieldIcon size={48} className="text-blue-500 mb-3" />
                  <h3 className="font-semibold text-center">Aspectos Éticos y Legales</h3>
                  <p className="text-small text-default-600 text-center mt-2">
                    Principios fundamentales del manejo ético de información
                  </p>
                </CardBody>
              </Card>
            </Link>

            <Link to="/laws" className="block">
              <Card 
                isPressable 
                className="hover:shadow-lg transition-all hover:scale-105 h-full"
              >
                <CardBody className="flex flex-col items-center p-6">
                  <ScaleIcon size={48} className="text-green-500 mb-3" />
                  <h3 className="font-semibold text-center">Leyes Mexicanas</h3>
                  <p className="text-small text-default-600 text-center mt-2">
                    Marco legal nacional para protección de datos y derechos
                  </p>
                </CardBody>
              </Card>
            </Link>

            <Link to="/standards" className="block">
              <Card 
                isPressable 
                className="hover:shadow-lg transition-all hover:scale-105 h-full"
              >
                <CardBody className="flex flex-col items-center p-6">
                  <CogIcon size={48} className="text-purple-500 mb-3" />
                  <h3 className="font-semibold text-center">Estándares Internacionales</h3>
                  <p className="text-small text-default-600 text-center mt-2">
                    Mejores prácticas y marcos de referencia globales
                  </p>
                </CardBody>
              </Card>
            </Link>

            <Link to="/privacy" className="block">
              <Card 
                isPressable 
                className="hover:shadow-lg transition-all hover:scale-105 h-full"
              >
                <CardBody className="flex flex-col items-center p-6">
                  <UserIcon size={48} className="text-orange-500 mb-3" />
                  <h3 className="font-semibold text-center">Aviso de Privacidad</h3>
                  <p className="text-small text-default-600 text-center mt-2">
                    Políticas de tratamiento de datos personales
                  </p>
                </CardBody>
              </Card>
            </Link>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 w-full max-w-4xl mt-8">
          <CardBody className="p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">¿Qué es Normateca Digital?</h3>
                <p className="text-default-700 mb-4">
                  Es una plataforma integral que facilita el acceso y comprensión de las normativas 
                  más importantes en materia de protección de datos, propiedad intelectual y 
                  seguridad de la información en México.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Chip color="primary" variant="flat">Legal</Chip>
                  <Chip color="secondary" variant="flat">Técnico</Chip>
                  <Chip color="success" variant="flat">Educativo</Chip>
                  <Chip color="warning" variant="flat">Actualizado</Chip>
                </div>
              </div>
              <div className="flex justify-center">
                {/* <DocumentIcon size={120} className="text-primary opacity-20" /> */}
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}