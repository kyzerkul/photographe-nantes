import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contactez Votre Photographe Mariage à Nantes - Moments Sublimes Photographie",
  description: "Contactez-nous pour discuter de votre projet de photographie de mariage à Nantes. Demandez un devis ou réservez votre date.",
};

export default function ContactPage() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-8 text-center">Contact</h1>
      {/* Placeholder for contact form or information */}
      <div className="text-center">
        <p>Contenu de la page Contact à venir. Prévoyez un formulaire de contact ici.</p>
      </div>
    </>
  );
}
