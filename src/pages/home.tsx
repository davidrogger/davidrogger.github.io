import { userLanguageContext } from '@/contexts/language';

export function Home(){
  const { content: { sections: { home } } } = userLanguageContext();

  return (
    <div>
      {home.title}
    </div>
  );
}