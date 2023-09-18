import { LanguageProvider } from '@/contexts/language';

import Footer from '@/components/footer';
import Header from '@/components/header';

export default function LayoutRoot({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export const applyLayout = (component:React.ReactNode) => (
  <LayoutRoot>
    { component }
  </LayoutRoot>
);
