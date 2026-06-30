import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <SectionContainer id="contact" background="dark">
      <SectionHeader
        title="Solicita tu Presupuesto"
        description="Cuéntanos tu requerimiento o emergencia técnica y te responderemos a la brevedad."
        dark={true}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Información de Contacto (5 de 12 columnas en pantallas lg) */}
        <div className="lg:col-span-5">
          <ContactInfo />
        </div>

        {/* Formulario de Contacto (7 de 12 columnas en pantallas lg) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>
    </SectionContainer>
  );
}