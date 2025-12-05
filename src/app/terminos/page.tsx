import { Metadata } from "next";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@webparatunegocio.pe";

// Función para formatear el número de teléfono
const formatPhoneNumber = (num: string) => {
  return `+${num.slice(0, 2)} ${num.slice(2, 5)} ${num.slice(5, 8)} ${num.slice(8)}`;
};

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso de los servicios de desarrollo web de Web Para Tu Negocio. Conoce tus derechos y obligaciones.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Términos y Condiciones
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
            <p className="text-gray-600 mb-8">
              Bienvenido a Web Para Tu Negocio. Al utilizar nuestros servicios de
              desarrollo web, aceptas estos términos y condiciones. Por favor, léelos
              cuidadosamente.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Servicios
            </h2>
            <p className="text-gray-600 mb-6">
              Web Para Tu Negocio ofrece servicios de desarrollo web que incluyen:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Diseño y desarrollo de páginas web profesionales</li>
              <li>Optimización SEO (posicionamiento en buscadores)</li>
              <li>Sistemas de reservas y citas online</li>
              <li>Integración con redes sociales y WhatsApp</li>
              <li>Mantenimiento y soporte técnico</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Proceso de Contratación
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.1 Cotización
            </h3>
            <p className="text-gray-600 mb-4">
              Todas las cotizaciones son personalizadas y tienen una validez de 15 días
              calendario desde su emisión. Los precios pueden variar según los
              requerimientos específicos del proyecto.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.2 Pagos
            </h3>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Se requiere un adelanto del 50% para iniciar el proyecto</li>
              <li>El 50% restante se paga al momento de la entrega final</li>
              <li>Los pagos pueden realizarse por transferencia bancaria o Yape/Plin</li>
              <li>Los precios no incluyen IGV salvo indicación expresa</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Plazos de Entrega
            </h2>
            <p className="text-gray-600 mb-6">
              Los plazos de entrega indicados son estimados y pueden variar según:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>La complejidad del proyecto</li>
              <li>La rapidez en la entrega de contenidos por parte del cliente</li>
              <li>La cantidad de revisiones solicitadas</li>
              <li>Cambios en el alcance original del proyecto</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Responsabilidades del Cliente
            </h2>
            <p className="text-gray-600 mb-6">El cliente se compromete a:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Proporcionar toda la información y contenidos necesarios en tiempo oportuno</li>
              <li>Dar feedback claro y oportuno durante el proceso de desarrollo</li>
              <li>Revisar y aprobar los diseños y contenidos antes de la publicación</li>
              <li>Respetar los plazos de pago acordados</li>
              <li>Garantizar que posee los derechos sobre los contenidos proporcionados</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Revisiones y Modificaciones
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Cada plan incluye un número determinado de revisiones</li>
              <li>Revisiones adicionales se cotizarán por separado</li>
              <li>Se incluyen 30 días de ajustes menores sin costo adicional después del lanzamiento</li>
              <li>Cambios en el alcance del proyecto pueden afectar el precio y tiempo de entrega</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Propiedad Intelectual
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.1 Propiedad del Cliente
            </h3>
            <p className="text-gray-600 mb-4">
              Una vez completado el pago total, el cliente obtiene todos los derechos
              sobre el diseño y código personalizado desarrollado específicamente para
              su proyecto.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6.2 Propiedad de Web Para Tu Negocio
            </h3>
            <p className="text-gray-600 mb-8">
              Nos reservamos el derecho de utilizar el proyecto completado como parte
              de nuestro portafolio y materiales promocionales, salvo acuerdo
              específico de confidencialidad.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Hosting y Dominio
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>El primer año de hosting está incluido en nuestros planes</li>
              <li>El dominio tiene un costo adicional (aproximadamente S/50-80/año)</li>
              <li>La renovación anual del hosting tiene un costo adicional</li>
              <li>El cliente es responsable de renovar su dominio a tiempo</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Mantenimiento
            </h2>
            <p className="text-gray-600 mb-8">
              El mantenimiento mensual es opcional e incluye actualizaciones de
              seguridad, copias de respaldo, y soporte técnico. Los precios de
              mantenimiento varían según el plan contratado.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Garantía
            </h2>
            <p className="text-gray-600 mb-8">
              Garantizamos que tu sitio web funcionará correctamente en los
              navegadores modernos principales (Chrome, Firefox, Safari, Edge).
              Corregiremos sin costo adicional cualquier error de programación
              durante los primeros 60 días después del lanzamiento.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-600 mb-8">
              Web Para Tu Negocio no será responsable por pérdidas de ingresos,
              datos o cualquier daño indirecto derivado del uso o imposibilidad
              de uso del sitio web desarrollado. Nuestra responsabilidad máxima
              se limita al monto pagado por el cliente por los servicios.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Cancelación
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>El cliente puede cancelar el proyecto en cualquier momento</li>
              <li>El adelanto no es reembolsable una vez iniciado el trabajo</li>
              <li>Se facturará proporcionalmente el trabajo ya realizado</li>
              <li>Nos reservamos el derecho de cancelar un proyecto si el cliente no cumple con sus responsabilidades</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Resolución de Disputas
            </h2>
            <p className="text-gray-600 mb-8">
              Cualquier disputa será resuelta primero mediante negociación directa.
              De no llegar a un acuerdo, las partes se someterán a la jurisdicción
              de los tribunales de Lima, Perú.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Cambios en los Términos
            </h2>
            <p className="text-gray-600 mb-8">
              Nos reservamos el derecho de modificar estos términos en cualquier
              momento. Los cambios no afectarán proyectos ya contratados bajo
              términos anteriores.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. Contacto
            </h2>
            <p className="text-gray-600 mb-4">
              Para cualquier consulta sobre estos términos, contáctanos:
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
            </ul>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
              <p className="text-gray-700 text-center">
                Al contratar nuestros servicios, confirmas que has leído, entendido
                y aceptado estos términos y condiciones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
