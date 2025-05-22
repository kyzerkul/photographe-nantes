import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from 'next/font/google';
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.votredomaine.com"), // Placeholder domain
  title: "Photographe Mariage Nantes - Moments Sublimes Photographie", // Updated default title
  description: "Votre photographe de mariage professionnel à Nantes. Capturer vos moments précieux avec créativité et passion.", // Updated default description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="fr" className={inter.className}>
      <body className="bg-body-bg text-primary-text flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Photographe Mariage Nantes - Moments Sublimes Photographie",
              "url": "https://www.votredomaine.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.votredomaine.com/recherche?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <nav className="flex justify-center items-center">
            <ul className="flex space-x-6 sm:space-x-8">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-accent transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-accent transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="py-6 px-4 sm:px-6 lg:px-8 text-center border-t border-gray-200">
          <p className="text-sm">
            © {currentYear} Moments Sublimes Photographie. Tous droits réservés.
          </p>
          {/* Placeholder for social media icons if needed later */}
        </footer>
      </body>
    </html>
  );
}
