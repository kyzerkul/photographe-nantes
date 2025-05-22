import { render, screen } from '@testing-library/react';
import ServicesPage from '../page'; // Adjust path based on actual file structure

describe('ServicesPage', () => {
  it('renders the main heading "Services"', () => {
    render(<ServicesPage />);
    const heading = screen.getByRole('heading', { name: /services/i });
    expect(heading).toBeInTheDocument();
  });
});
