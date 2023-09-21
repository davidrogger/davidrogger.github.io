import { userLanguageContext } from '@/contexts/language';

import { projects } from '@/assets/projects';

import { ProjectCard } from '@/components/projectCard';

export function Projects(){
  const { content: { section } } = userLanguageContext();
  return (
    <div>
      <h1
        className='text-xl'
      >
        {section.projects.title}
      </h1>

      <div
        className='flex gap-3 overflow-hidden mt-10 flex-wrap justify-center'
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}