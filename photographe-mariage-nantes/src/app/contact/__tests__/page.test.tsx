import { render, screen } from '@testing-library/react';
import ContactPage from '../page'; // Adjust path based on actual file structure

describe('ContactPage', () => {
  it('renders the main heading "Contact"', () => {
    render(<ContactPage />);
    const heading = screen.getByRole('heading', { name: /contact/i });
    expect(heading).toBeInTheDocument();
  });
});
