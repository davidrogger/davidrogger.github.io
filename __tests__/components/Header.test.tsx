import { render, screen, within } from '@testing-library/react';

import Header from '@/components/header';

describe('<Header />', () => {
  describe('Elements render', () => {
    it('Should render "Davíd Roggér" name', () => {
      render(<Header />);
      const title = screen.getByRole('heading', { name: /<davídroggér \/>/i });
      expect(title).toBeVisible();
    });

    it('Should render the navbar options', () => {
      render(<Header />);
      const expectedSections = ['Home', 'About'];

      const navigation = screen.getByRole('navigation');
      expect(navigation).toBeVisible();

      const navElement = within(navigation);
      expectedSections.map((sectionName) => {
        expect(navElement.getByRole('link', { name:sectionName })).toBeVisible();
      });
    });
  });
});
