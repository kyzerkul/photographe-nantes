import type { Metadata } from 'next';
import Image from 'next/image';

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
    "image": "https://www.votredomaine.com/images/logo-photographe.jpg", // This is for Schema, not displayed
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

      {/* Hero Section */}
      <section className="hero text-center py-12 md:py-20">
        <div className="mb-8">
          <Image
            src="https://picsum.photos/seed/homepage/1200/600" // Adjusted height for better banner aspect ratio
            alt="Couple de mariés heureux à Nantes"
            width={1200}
            height={600}
            priority // For LCP
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-primary-text mb-6">
          Photographe de Mariage à Nantes : Capturons l'Émotion de Votre Jour J
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Spécialisé dans la création de souvenirs intemporels, Moments Sublimes Photographie vous accompagne à Nantes pour immortaliser chaque sourire, chaque larme de joie, chaque instant précieux de votre mariage. Notre approche est de capturer l'authenticité et la beauté naturelle de votre amour.
        </p>
        <a 
          href="/galerie" 
          className="bg-accent text-white py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-colors"
        >
          Découvrir la Galerie
        </a>
      </section>

      {/* About Snippet Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-6">
            Qui suis-je ?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            Je suis [Prénom], photographe passionné et fondateur de Moments Sublimes Photographie. Depuis [Nombre] années, j'ai le privilège de raconter des histoires d'amour à travers mon objectif, avec une sensibilité artistique et une discrétion qui me permettent de capturer les moments les plus sincères.
          </p>
          <a 
            href="/a-propos" 
            className="text-accent hover:underline text-lg"
          >
            En savoir plus sur mon parcours
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-text mb-12 text-center">
            Ce qu'ils en disent...
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <blockquote className="text-gray-700 italic mb-4 border-l-4 border-accent pl-4 py-2">
                "Un immense merci pour ces photos magnifiques ! Chaque cliché raconte une histoire et nous sommes ravis du résultat. Professionnalisme et discrétion au rendez-vous."
              </blockquote>
              <p className="text-right text-gray-800 font-semibold">- Sophie & Marc</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <blockquote className="text-gray-700 italic mb-4 border-l-4 border-accent pl-4 py-2">
                "Nous avons adoré travailler avec [Prénom] ! Il a su nous mettre à l'aise et capturer l'essence de notre journée avec une justesse incroyable. Les photos sont sublimes."
              </blockquote>
              <p className="text-right text-gray-800 font-semibold">- Laura & Thomas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <blockquote className="text-gray-700 italic mb-4 border-l-4 border-accent pl-4 py-2">
                "Le reportage photo de notre mariage est tout simplement parfait. [Prénom] a un œil artistique unique et une grande sensibilité. Nous recommandons les yeux fermés !"
              </blockquote>
              <p className="text-right text-gray-800 font-semibold">- Chloé & Julien</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
