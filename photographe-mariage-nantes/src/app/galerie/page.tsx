import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Galerie Photos Mariage Nantes - Moments Sublimes Photographie",
  description: "Découvrez notre galerie de photos de mariage à Nantes. Exemples de notre travail et de notre style photographique pour les mariages.",
};

export default function GalleryPage() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-8 text-center">Galerie</h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Plongez au cœur de véritables histoires d'amour capturées à Nantes et ses environs. Chaque mariage est une aventure unique, et je m'efforce de saisir son essence à travers des images vivantes, lumineuses et pleines d'émotion. Laissez-vous inspirer par ces moments de bonheur.
      </p>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12">
        {[
          { seed: 'gal1', width: 400, height: 300, alt: "Photo de mariage artistique à Nantes" },
          { seed: 'gal2', width: 300, height: 400, alt: "Détails de décoration de mariage à Nantes" },
          { seed: 'gal3', width: 400, height: 400, alt: "Cérémonie de mariage en plein air à Nantes" },
          { seed: 'gal4', width: 400, height: 300, alt: "Portrait de la mariée souriante à Nantes" },
          { seed: 'gal5', width: 300, height: 400, alt: "Couple de mariés se tenant la main" },
          { seed: 'gal6', width: 400, height: 400, alt: "Ambiance festive de la soirée de mariage" },
          { seed: 'gal7', width: 400, height: 300, alt: "Photo noir et blanc d'un moment émouvant du mariage" },
          { seed: 'gal8', width: 300, height: 400, alt: "Les mariés lors de leur première danse" },
          { seed: 'gal9', width: 400, height: 400, alt: "Gros plan sur les alliances de mariage" },
        ].map((img, i) => (
          <div key={i} className="bg-gray-200 aspect-w-1 aspect-h-1"> {/* Maintain aspect ratio before image loads */}
            <Image
              src={`https://picsum.photos/seed/${img.seed}/${img.width}/${img.height}`}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        ))}
      </div>

      <div className="text-center text-gray-600">
        <p className="mb-2">Exemples de légendes que vous pourriez trouver :</p>
        <ul className="list-disc list-inside inline-block text-left">
          <li>Échange de vœux sous le soleil nantais.</li>
          <li>Sourires complices lors du vin d'honneur.</li>
          <li>Détails élégants de la décoration florale.</li>
        </ul>
      </div>
    </>
  );
}
