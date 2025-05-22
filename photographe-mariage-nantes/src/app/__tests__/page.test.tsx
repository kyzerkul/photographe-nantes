import { render, screen } from '@testing-library/react';
import HomePage from '../page'; // Adjust path based on actual file structure

describe('HomePage', () => {
  it('renders the main heading "Accueil"', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', { name: /accueil/i });
    expect(heading).toBeInTheDocument();
  });
});
