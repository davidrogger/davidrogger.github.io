import { userLanguageContext } from '@/contexts/language';

export function Projects(){
  const { content: { section: { projects } } } = userLanguageContext();
  console.log(projects);
  return (
    <div>
      <h1>{projects.title}</h1>
    </div>
  );
}