import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services Photographe Mariage Nantes - Moments Sublimes Photographie",
  description: "Nos services de photographie de mariage à Nantes : reportage complet, photos de couple, séances d'engagement, albums photo personnalisés.",
};

export default function ServicesPage() {
  const servicePackages = [
    {
      title: "Formule Douceur",
      description: "Idéale pour les mariages intimes et les cérémonies civiles, cette formule capture les moments essentiels de votre engagement.",
      details: [
        "Présence des préparatifs jusqu'au vin d'honneur (environ 6h)",
        "Photos de couple le jour J",
        "Galerie privée en ligne avec téléchargement HD",
        "Minimum 300 photos retouchées en haute définition"
      ],
      priceNote: "À partir de [Prix] €"
    },
    {
      title: "Formule Éclat",
      description: "La formule la plus populaire pour une couverture complète de votre journée, des préparatifs jusqu'aux premières danses.",
      details: [
        "Présence des préparatifs jusqu'aux premières danses (environ 10h)",
        "Photos de couple le jour J",
        "Séance d'engagement avant le mariage",
        "Galerie privée en ligne avec téléchargement HD",
        "Minimum 500 photos retouchées en haute définition",
        "Clé USB personnalisée avec les photos"
      ],
      priceNote: "À partir de [Prix] €"
    },
    {
      title: "Formule Passion",
      description: "Pour ceux qui souhaitent immortaliser chaque instant, des préparatifs jusqu'à la fin de la soirée, avec des petits plus pour des souvenirs inoubliables.",
      details: [
        "Présence des préparatifs jusqu'à la fin de la soirée (environ 14h)",
        "Photos de couple le jour J et/ou séance 'Day After'",
        "Séance d'engagement avant le mariage",
        "Galerie privée en ligne avec téléchargement HD",
        "Minimum 700 photos retouchées en haute définition",
        "Album photo de luxe (30x30cm, 50 pages)",
        "Clé USB personnalisée avec les photos et un diaporama musical"
      ],
      priceNote: "À partir de [Prix] €"
    }
  ];

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-8 text-center">Nos Services</h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Chaque mariage est unique, c'est pourquoi je vous propose différentes formules pour s'adapter au mieux à vos attentes et à votre journée. Mon objectif est de vous offrir un reportage photographique complet et personnalisé, qui raconte votre histoire avec authenticité et émotion. N'hésitez pas à me contacter pour discuter de vos besoins spécifiques.
      </p>

      <div className="space-y-12">
        {servicePackages.map((pkg, index) => (
          <section key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200"> {/* Added subtle border */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4">{pkg.title}</h2> {/* Changed title to accent color */}
            <p className="text-gray-700 mb-6">{pkg.description}</p> {/* Slightly darker paragraph text */}
            <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700"> {/* Increased space-y */}
              {pkg.details.map((detail, i) => (
                <li key={i} className="pl-1">{detail}</li> /* Added padding to list items for better alignment with disc */
              ))}
            </ul>
            <p className="text-xl font-semibold text-primary-text mt-4">{pkg.priceNote}</p> {/* Changed price to primary text, made it semibold, added mt-4 */}
          </section>
        ))}
      </div>

      <p className="mt-12 text-center text-lg text-gray-700">
        Des options supplémentaires sont disponibles (photobooth, tirages d'art, etc.). Contactez-moi pour un devis personnalisé.
      </p>
    </>
  );
}
