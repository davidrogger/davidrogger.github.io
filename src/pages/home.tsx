import { userLanguageContext } from '@/contexts/language';

export function Home(){
  const { content: { section: { home } } } = userLanguageContext();

  return (
    <div>
      {home.title}
    </div>
  );
}