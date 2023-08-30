import Footer from '@/components/Footer.tsx';
import { render, screen } from '@testing-library/react';

describe('<Footer />', () => {
  it('Should render render "Davíd Rogger" text', () => {
    render(<Footer />);
    expect(screen.getByText(/davíd roggér/i)).toBeVisible();
  });

  it('Should render the current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${year}`))).toBeVisible();
  });
});
