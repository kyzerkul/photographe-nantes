import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contactez Votre Photographe Mariage à Nantes - Moments Sublimes Photographie",
  description: "Contactez-nous pour discuter de votre projet de photographie de mariage à Nantes. Demandez un devis ou réservez votre date.",
};

export default function ContactPage() {
  const contactFormNoteDetails = [
    "Vos prénoms",
    "La date de votre mariage",
    "Le(s) lieu(x) de votre mariage (mairie, cérémonie, réception)",
    "Le nombre approximatif d'invités",
    "Quelques mots sur ce qui vous plait dans mon travail et ce que vous attendez de votre reportage photo."
  ];

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-8 text-center">Contactez-moi</h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Vous avez un projet de mariage à Nantes ou dans les environs ? Vous aimez mon approche et mon style photographique ? N'hésitez pas à me contacter pour me parler de vous, de vos envies, et pour vérifier mes disponibilités. Je serai ravi d'échanger avec vous et de voir comment nous pouvons ensemble créer les souvenirs de votre journée exceptionnelle.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200"> {/* Added subtle border */}
          <h2 className="text-2xl font-semibold text-accent mb-6">Informations de Contact</h2> {/* Accent color, increased mb */}
          <p className="text-gray-700 mb-3"> {/* Increased mb */}
            <strong>Email :</strong> <a href="mailto:contact@momentssublimesphoto.com" className="text-accent hover:underline">contact@momentssublimesphoto.com</a>
          </p>
          <p className="text-gray-700">
            <strong>Téléphone :</strong> <a href="tel:+33612345678" className="text-accent hover:underline">+33 6 12 34 56 78</a>
          </p>
          <div className="mt-8 text-gray-500 italic"> {/* Increased mt */}
            (Placeholder for a map or address if desired)
          </div>
        </section>

        <section className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-inner border border-gray-200"> {/* Added subtle border */}
          <h2 className="text-2xl font-semibold text-accent mb-6">Pour me contacter par email, merci de préciser :</h2> {/* Accent color, increased mb */}
          <ul className="list-disc list-inside space-y-3 text-gray-700"> {/* Increased space-y */}
            {contactFormNoteDetails.map((detail, i) => (
              <li key={i} className="pl-1">{detail}</li> {/* Added padding to list items */}
            ))}
          </ul>
          <div className="mt-6 text-gray-500 italic">
            (Un formulaire de contact sera intégré ici)
          </div>
        </section>
      </div>

      <p className="mt-12 text-center text-lg text-gray-700">
        Au plaisir de vous lire et, je l'espère, de vous rencontrer !
      </p>
    </>
  );
}
