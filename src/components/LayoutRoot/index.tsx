import './styles.css';

import Footer from '@/components/Footer.tsx';
import Header from '@/components/Header';

export default function LayoutRoot({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      { children }
      <Footer />
    </main>
  );
}