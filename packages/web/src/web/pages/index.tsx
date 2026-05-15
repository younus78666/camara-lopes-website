import { useScrollReveal } from "../hooks/useScrollReveal";
import { TopBar, Header } from "../components/sections/TopBar";
import { Hero } from "../components/sections/Hero";
import { PartnerLogos } from "../components/sections/PartnerLogos";
import { StatsBar } from "../components/sections/StatsBar";
import { Treatments } from "../components/sections/Treatments";
import { Doctors } from "../components/sections/Doctors";
import { WhyClinic } from "../components/sections/WhyClinic";
import { Results } from "../components/sections/Results";
import { Testimonials } from "../components/sections/Testimonials";
import { Journey } from "../components/sections/Journey";
import { Cost } from "../components/sections/Cost";
import { WhyBrazil } from "../components/sections/WhyBrazil";
import { Journal } from "../components/sections/Journal";
import { CTA } from "../components/sections/CTA";
import { Disclaimer, Footer, PreFooter } from "../components/sections/Footer";
import { WhatsAppFloat } from "../components/sections/WhatsAppFloat";
import { useEffect } from "react";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Camara Lopes Clinic",
  alternateName: "Clínica Camara Lopes",
  description:
    "Board-certified hair transplant clinic in Campinas, Brazil. FUE, Non-Shave, and Long Hair transplant techniques performed by Dr. Sergio Camara Lopes and Dra. Alessandra Bernardi.",
  url: "https://hairtransplant-brazil.com",
  telephone: "+551944440707",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Campinas",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  medicalSpecialty: "Hair Transplant Surgery",
  availableService: [
    { "@type": "MedicalProcedure", name: "FUE Hair Transplant" },
    { "@type": "MedicalProcedure", name: "Non-Shave FUE Hair Transplant" },
    { "@type": "MedicalProcedure", name: "Long Hair FUE Transplant" },
    { "@type": "MedicalProcedure", name: "Female Hair Transplant" },
  ],
  member: [
    {
      "@type": "Physician",
      name: "Dr. Sergio Camara Lopes",
      medicalSpecialty: "Plastic Surgery — Hair Transplants",
      memberOf: { "@type": "Organization", name: "ISHRS" },
    },
    {
      "@type": "Physician",
      name: "Dra. Alessandra Bernardi Camara Lopes",
      medicalSpecialty: "Dermatology — Hair Trichology",
      memberOf: { "@type": "Organization", name: "SBD" },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "5000",
  },
};

export default function Index() {
  useScrollReveal();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <PartnerLogos />
      <StatsBar />
      <Treatments />
      <Doctors />
      <WhyClinic />
      <Results />
      <Testimonials />
      <Journey />
      <Cost />
      <WhyBrazil />
      <Journal />
      <CTA />
      <PreFooter />
      <Disclaimer />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
