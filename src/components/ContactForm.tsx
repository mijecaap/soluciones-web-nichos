"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { trackContactFormSubmitted, trackContactFormError } from "@/lib/analytics";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

const inputClasses =
  "w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:shadow-[0_0_20px_rgba(99,102,241,0.08)] focus:bg-white/[0.05] transition-all duration-300 outline-none";

export default function ContactForm({
  title = "Contáctanos",
  subtitle = "Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    niche: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el formulario");
      }

      setStatus({
        type: "success",
        message: data.message,
      });

      trackContactFormSubmitted({
        niche: formData.niche,
        hasBusiness: !!formData.business,
        hasMessage: !!formData.message,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        niche: "",
        message: "",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error desconocido";
      setStatus({
        type: "error",
        message: errorMessage,
      });
      trackContactFormError(errorMessage);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (status.type === "success") {
    return (
      <section className="py-24 bg-[#09090B]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-display)]">
              ¡Mensaje Enviado!
            </h3>
            <p className="text-slate-400 mb-6">
              {status.message || "Gracias por contactarnos. Te responderemos en menos de 24 horas."}
            </p>
            <button
              onClick={() => setStatus({ type: "idle" })}
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-24 bg-[#09090B]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-400">{subtitle}</p>
        </motion.div>

        {status.type === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-center gap-3"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{status.message}</span>
            <button
              onClick={() => setStatus({ type: "idle" })}
              className="ml-auto text-red-400 hover:text-red-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">
                Teléfono / WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
                placeholder="+51 999 999 999"
              />
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-medium text-slate-400 mb-2">
                Nombre del negocio
              </label>
              <input
                type="text"
                id="business"
                name="business"
                value={formData.business}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Tu negocio"
              />
            </div>
          </div>

          <div>
            <label htmlFor="niche" className="block text-sm font-medium text-slate-400 mb-2">
              Tipo de negocio *
            </label>
            <select
              id="niche"
              name="niche"
              required
              value={formData.niche}
              onChange={handleChange}
              className={`${inputClasses} bg-[#09090B]`}
            >
              <option value="">Selecciona una opción</option>
              <option value="veterinaria">Clínica Veterinaria</option>
              <option value="salon">Salón de Belleza / Spa</option>
              <option value="restaurante">Restaurante / Bar</option>
              <option value="odontologia">Consultorio Odontológico</option>
              <option value="agencia-viajes">Agencia de Viajes</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
              Cuéntanos sobre tu proyecto
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
              placeholder="¿Qué necesitas para tu negocio? ¿Cuáles son tus principales desafíos?"
            />
          </div>

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status.type === "loading" ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Enviando...
              </>
            ) : (
              <>
                Enviar Mensaje
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
