import { render, screen } from '@testing-library/react';
import GalleryPage from '../page'; // Adjust path based on actual file structure

describe('GalleryPage', () => {
  it('renders the main heading "Galerie"', () => {
    render(<GalleryPage />);
    const heading = screen.getByRole('heading', { name: /galerie/i });
    expect(heading).toBeInTheDocument();
  });
});
