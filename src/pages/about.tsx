import { Card, CardHeader, CardBody } from "@heroui/card";
import { title } from "@/components/primitives";
import { ShieldIcon, ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="flex items-center gap-4 mb-6">
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

        <div className="inline-block max-w-4xl">
          <h1 className={title()}>Aspectos Éticos y Legales</h1>
        </div>

        <Card className="mb-6">
          <CardHeader className="flex gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <ShieldIcon size={32} />
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Aspectos Éticos y Legales del Manejo de la Información</h2>
              <p className="text-blue-100">Principios fundamentales para el manejo responsable de datos</p>
            </div>
          </CardHeader>
          <CardBody>
            <div className="space-y-6">
              <p className="text-default-700 text-lg">
                Los aspectos éticos y legales en el manejo de información son fundamentales para garantizar 
                la privacidad, seguridad y uso responsable de los datos personales y corporativos en la era digital.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-primary mb-4 text-xl">🛡️ Principios Éticos</h3>
                  <ul className="text-default-700 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-primary">•</span>
                      <div>
                        <strong>Confidencialidad y Privacidad:</strong> Proteger la información personal y sensible de accesos no autorizados.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-primary">•</span>
                      <div>
                        <strong>Transparencia:</strong> Informar claramente sobre el uso y tratamiento de los datos.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-primary">•</span>
                      <div>
                        <strong>Consentimiento Informado:</strong> Obtener autorización explícita para el tratamiento de datos.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-primary">•</span>
                      <div>
                        <strong>Minimización de Datos:</strong> Recopilar únicamente los datos necesarios para el propósito establecido.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-primary">•</span>
                      <div>
                        <strong>Exactitud y Actualización:</strong> Mantener los datos precisos y actualizados.
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-success mb-4 text-xl">⚖️ Marco Legal</h3>
                  <ul className="text-default-700 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-success">•</span>
                      <div>
                        <strong>Cumplimiento Normativo:</strong> Adherirse a las leyes y regulaciones aplicables.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-success">•</span>
                      <div>
                        <strong>Derechos ARCO:</strong> Garantizar el acceso, rectificación, cancelación y oposición de datos.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-success">•</span>
                      <div>
                        <strong>Notificación de Brechas:</strong> Informar oportunamente sobre incidentes de seguridad.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-success">•</span>
                      <div>
                        <strong>Sanciones y Penalizaciones:</strong> Conocer las consecuencias del incumplimiento.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-success">•</span>
                      <div>
                        <strong>Supervisión Regulatoria:</strong> Someterse a auditorías y controles regulatorios.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="font-bold text-purple-600 mb-4 text-xl">🎯 Importancia en el Contexto Digital</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔒</div>
                    <h4 className="font-semibold mb-2">Protección</h4>
                    <p className="text-sm text-default-600">Salvaguarda de información sensible y derechos fundamentales</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🤝</div>
                    <h4 className="font-semibold mb-2">Confianza</h4>
                    <p className="text-sm text-default-600">Construcción de relaciones basadas en transparencia y responsabilidad</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <h4 className="font-semibold mb-2">Competitividad</h4>
                    <p className="text-sm text-default-600">Ventaja competitiva a través del manejo ético y legal de datos</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="font-bold text-red-600 mb-3 text-lg">⚠️ Consecuencias del Incumplimiento</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-500 mb-2">Legales:</h4>
                    <ul className="text-sm text-default-700 space-y-1">
                      <li>• Multas económicas significativas</li>
                      <li>• Procesos judiciales</li>
                      <li>• Restricciones operativas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-500 mb-2">Reputacionales:</h4>
                    <ul className="text-sm text-default-700 space-y-1">
                      <li>• Pérdida de confianza del cliente</li>
                      <li>• Daño a la imagen corporativa</li>
                      <li>• Impacto en relaciones comerciales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}