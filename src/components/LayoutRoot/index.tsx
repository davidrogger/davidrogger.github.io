import Header from '@/components/Header';

export default function LayoutRoot({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      { children }
    </main>
  );
}