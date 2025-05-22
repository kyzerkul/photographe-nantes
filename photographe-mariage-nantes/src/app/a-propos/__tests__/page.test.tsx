import { render, screen } from '@testing-library/react';
import AboutPage from '../page'; // Adjust path based on actual file structure

describe('AboutPage', () => {
  it('renders the main heading "À Propos"', () => {
    render(<AboutPage />);
    const heading = screen.getByRole('heading', { name: /à propos/i });
    expect(heading).toBeInTheDocument();
  });
});
