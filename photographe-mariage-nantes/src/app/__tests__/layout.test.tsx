import { render, screen } from '@testing-library/react';
import RootLayout from '../layout'; // Adjust path based on actual file structure

describe('RootLayout', () => {
  it('renders navigation links', () => {
    render(
      <RootLayout>
        <div>Test Child Page</div>
      </RootLayout>
    );

    expect(screen.getByRole('link', { name: /accueil/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /galerie/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /à propos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('renders the copyright footer', () => {
    render(
      <RootLayout>
        <div>Test Child Page</div>
      </RootLayout>
    );
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Moments Sublimes Photographie. Tous droits réservés.`)).toBeInTheDocument();
  });
});
