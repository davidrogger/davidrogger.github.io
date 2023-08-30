import Header from '@/components/Header';
import { render, screen } from '@testing-library/react';

describe('<Header />', () => {
  it('Should render "Davíd Roggér" name', () => {
    render(<Header />);
    expect(screen.getByText(/davídroggér/i)).toBeVisible();
  });
});
