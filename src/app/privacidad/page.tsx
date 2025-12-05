import { Metadata } from "next";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@webparatunegocio.pe";

// Función para formatear el número de teléfono
const formatPhoneNumber = (num: string) => {
  return `+${num.slice(0, 2)} ${num.slice(2, 5)} ${num.slice(5, 8)} ${num.slice(8)}`;
};

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conoce cómo Web Para Tu Negocio protege y maneja tu información personal. Política de privacidad y protección de datos.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacidadPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-300">
            Última actualización: Diciembre 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Información que Recopilamos
            </h2>
            <p className="text-gray-600 mb-6">
              En Web Para Tu Negocio, recopilamos información que nos proporcionas
              directamente cuando:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Completas nuestro formulario de contacto</li>
              <li>Te comunicas con nosotros por WhatsApp o correo electrónico</li>
              <li>Solicitas una cotización para nuestros servicios</li>
              <li>Contratas alguno de nuestros servicios de desarrollo web</li>
            </ul>
            <p className="text-gray-600 mb-8">
              La información que podemos recopilar incluye: nombre, correo electrónico,
              número de teléfono, nombre de tu negocio y cualquier otra información
              que decidas proporcionarnos.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Uso de la Información
            </h2>
            <p className="text-gray-600 mb-6">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Responder a tus consultas y solicitudes de cotización</li>
              <li>Proporcionar los servicios de desarrollo web contratados</li>
              <li>Enviarte información relevante sobre nuestros servicios (solo si lo autorizas)</li>
              <li>Mejorar nuestros servicios y la experiencia del usuario</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Protección de Datos
            </h2>
            <p className="text-gray-600 mb-8">
              Implementamos medidas de seguridad técnicas y organizativas para proteger
              tu información personal contra acceso no autorizado, pérdida o alteración.
              Utilizamos conexiones seguras (HTTPS) y almacenamos los datos en servidores
              protegidos.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Compartir Información
            </h2>
            <p className="text-gray-600 mb-6">
              No vendemos, alquilamos ni compartimos tu información personal con terceros,
              excepto en los siguientes casos:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Cuando sea necesario para proporcionar los servicios contratados</li>
              <li>Cuando lo requiera la ley o una autoridad competente</li>
              <li>Con proveedores de servicios que nos ayudan a operar (hosting, email), bajo acuerdos de confidencialidad</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Cookies y Tecnologías Similares
            </h2>
            <p className="text-gray-600 mb-8">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia en
              nuestro sitio web, analizar el tráfico y personalizar el contenido.
              Utilizamos Vercel Analytics para obtener estadísticas anónimas sobre el
              uso del sitio. Puedes configurar tu navegador para rechazar cookies,
              aunque esto puede afectar algunas funcionalidades.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Tus Derechos
            </h2>
            <p className="text-gray-600 mb-6">
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Acceder a tu información personal que tenemos almacenada</li>
              <li>Solicitar la corrección de datos inexactos</li>
              <li>Solicitar la eliminación de tus datos personales</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Solicitar la portabilidad de tus datos</li>
            </ul>
            <p className="text-gray-600 mb-8">
              Para ejercer cualquiera de estos derechos, contáctanos a través de
              nuestro correo electrónico o WhatsApp.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Retención de Datos
            </h2>
            <p className="text-gray-600 mb-8">
              Conservamos tu información personal solo durante el tiempo necesario
              para cumplir con los fines para los que fue recopilada, incluyendo
              requisitos legales, contables o de informes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Cambios en esta Política
            </h2>
            <p className="text-gray-600 mb-8">
              Podemos actualizar esta política de privacidad periódicamente.
              Te notificaremos sobre cambios significativos publicando la nueva
              política en esta página con una fecha de actualización revisada.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Contacto
            </h2>
            <p className="text-gray-600 mb-4">
              Si tienes preguntas sobre esta política de privacidad o sobre cómo
              manejamos tu información personal, contáctanos:
            </p>
            <ul className="list-none text-gray-600 mb-8 space-y-2">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {formatPhoneNumber(whatsappNumber)}
                </a>
              </li>
              <li>
                <strong>Ubicación:</strong> Lima, Perú
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
