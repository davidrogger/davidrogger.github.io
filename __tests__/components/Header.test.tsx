import Header from '@/components/Header';
import { render, screen } from '@testing-library/react';

describe('<Header />', () => {
  describe('Elements render', () => {
    it('Should render "Davíd Roggér" name', () => {
      render(<Header />);
      const title = screen.getByRole('heading', { name: /<davídroggér \/>/i });
      expect(title).toBeVisible();
    });
  });
});
