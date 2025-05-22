import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services Photographe Mariage Nantes - Moments Sublimes Photographie",
  description: "Nos services de photographie de mariage à Nantes : reportage complet, photos de couple, séances d'engagement, albums photo personnalisés.",
};

export default function ServicesPage() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-8 text-center">Services</h1>
      {/* Placeholder for services content */}
      <div className="text-center">
        <p>Contenu de la page Services à venir.</p>
      </div>
    </>
  );
}
