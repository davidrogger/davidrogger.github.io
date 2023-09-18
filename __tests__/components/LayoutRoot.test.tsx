import { render, screen } from '@testing-library/react';

import content from '@/assets/languages.json';

import LayoutRoot from '@/components/LayoutRoot';

describe('<LayoutRoot />', () => {
  it('Should render a default component with the set children', () => {
    render(
      <LayoutRoot>
        <p>Children test</p>
      </LayoutRoot>
    );

    const defaultHeader = screen
      .getByRole('heading', { name: /davídroggér/i });

    const currentYear = new Date().getFullYear();
    const defaultFooter = screen.getByText(`© ${content.name} ${currentYear}`);

    expect(defaultHeader).toBeVisible();
    expect(defaultFooter).toBeVisible();
    expect(screen.getByText(/children test/i)).toBeVisible();
  });
});
