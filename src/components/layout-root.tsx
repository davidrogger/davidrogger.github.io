import { Outlet } from 'react-router-dom';

import { LanguageProvider } from '@/contexts/language';

import Footer from '@/components/footer';
import Header from '@/components/header';

export default function LayoutRoot() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
