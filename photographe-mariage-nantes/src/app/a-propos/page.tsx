import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "À Propos - Photographe Mariage Nantes - Moments Sublimes Photographie",
  description: "Apprenez-en plus sur Moments Sublimes Photographie, votre photographe de mariage passionné à Nantes. Notre approche et notre philosophie.",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-12 text-center">À Propos de Moments Sublimes Photographie</h1>

      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary-text mb-6 text-center">
          [Prénom], votre photographe à Nantes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-gray-700 text-lg">
          <p>
            Bonjour et bienvenue ! Je suis [Prénom], photographe professionnel basé à Nantes et spécialisé dans la photographie de mariage. Ma passion pour la photographie a commencé il y a [Nombre] années, et depuis, je me consacre à capturer la beauté et l'émotion des moments uniques. J'ai eu la chance de me former auprès de [Nom d'un mentor ou école, si applicable] et de développer un style qui m'est propre, alliant reportage authentique et esthétique soignée.
          </p>
          <p>
            Nantais d'origine (ou d'adoption), je connais parfaitement la région et ses lieux magnifiques qui peuvent servir de cadre à vos photos de mariage. J'aime travailler avec la lumière naturelle pour créer des images douces, lumineuses et intemporelles.
          </p>
        </div>
        {/* Photographer Portrait */}
        <div className="mt-10 mb-10 flex justify-center">
          <Image
            src="https://picsum.photos/seed/portrait/300/300"
            alt="Portrait du photographe [Prénom]"
            width={300}
            height={300}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary-text mb-6 text-center">
          Mon Approche : Authenticité, Discrétion et Complicité
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-gray-700 text-lg">
          <p>
            Ma philosophie est simple : être le témoin privilégié de votre journée, en toute discrétion. Je m'efforce de me fondre parmi vos invités pour capturer les instants les plus spontanés, les regards complices, les éclats de rire et les larmes de joie. L'authenticité est au cœur de ma démarche.
          </p>
          <p>
            Je crois fermement à l'importance de créer une relation de confiance et de complicité avec les futurs mariés. C'est pourquoi je prends le temps de vous rencontrer, d'échanger sur vos attentes, vos envies, et l'ambiance que vous souhaitez donner à votre mariage. Le jour J, cette connexion nous permet de travailler ensemble en toute sérénité, pour que vous puissiez profiter pleinement de chaque instant pendant que je m'occupe de créer vos souvenirs.
          </p>
        </div>
      </section>
    </>
  );
}
