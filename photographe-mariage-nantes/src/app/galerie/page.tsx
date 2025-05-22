import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Galerie Photos Mariage Nantes - Moments Sublimes Photographie",
  description: "Découvrez notre galerie de photos de mariage à Nantes. Exemples de notre travail et de notre style photographique pour les mariages.",
};

export default function GalleryPage() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-8 text-center">Galerie</h1>
      {/* Placeholder for gallery content */}
      <div className="text-center">
        <p>Contenu de la page Galerie à venir.</p>
      </div>
    </>
  );
}
