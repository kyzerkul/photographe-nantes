import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "À Propos - Photographe Mariage Nantes - Moments Sublimes Photographie",
  description: "Apprenez-en plus sur Moments Sublimes Photographie, votre photographe de mariage passionné à Nantes. Notre approche et notre philosophie.",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-8 text-center">À Propos</h1>
      {/* Placeholder for about content */}
      <div className="text-center">
        <p>Contenu de la page À Propos à venir.</p>
      </div>
    </>
  );
}
