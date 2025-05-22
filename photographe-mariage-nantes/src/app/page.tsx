import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Photographe Mariage Nantes - Moments Sublimes Photographie",
  description: "Photographe de mariage professionnel à Nantes. Capturer vos moments précieux avec créativité et passion. Services de photographie de mariage et d'engagement.",
};

export default function HomePage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Photographer", "LocalBusiness"],
    "name": "Moments Sublimes Photographie",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Rue de la Photographie",
      "addressLocality": "Nantes",
      "postalCode": "44000",
      "addressCountry": "FR"
    },
    "telephone": "+33612345678",
    "openingHours": "Mo-Fr 09:00-18:00",
    "url": "https://www.votredomaine.com",
    "image": "https://www.votredomaine.com/images/logo-photographe.jpg",
    "sameAs": [
      "https://www.instagram.com/moments_sublimes_photo/"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-8 text-center">Accueil</h1>
      {/* Placeholder for page content */}
      <div className="text-center">
        <p>Bienvenue sur le site de Moments Sublimes Photographie.</p>
        <p>Découvrez nos services et notre galerie pour immortaliser vos plus beaux moments.</p>
      </div>
    </>
  );
}
