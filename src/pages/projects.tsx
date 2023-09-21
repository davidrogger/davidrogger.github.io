import { MouseEvent, useState } from 'react';

import { userLanguageContext } from '@/contexts/language';

import { projectsCatalog } from '@/assets/allProjects';

import { ProjectCard } from '@/components/projectCard';

export function Projects(){
  const { content: { section } } = userLanguageContext();
  const [filterSelected, setFilterSelected] = useState('All');
  const [displayedProjects, setDisplayedProjects] = useState(projectsCatalog[filterSelected]);
  const[page, setPages] = useState(1);

  function handleProjectsFilter(event: MouseEvent<HTMLButtonElement>) {
    const filter = event.currentTarget.textContent as string;
    setFilterSelected(filter);
    setDisplayedProjects(projectsCatalog[filter]);
  }

  return (
    <div>
      <h1
        className='text-2xl mb-8'
      >
        {section.projects.title}
      </h1>

      <p
        className=''
      >
        {section.projects.intro}
      </p>

      <div
        className='flex gap-3 mt-20 flex-wrap justify-center px-2 py-10 rounded-xl relative'
      >
        <div className='flex justify-center absolute -top-5 left-0 w-full'>
          <div className='flex gap-4 border w-1/2 h-10 rounded-full bg-primary overflow-hidden'>
            {['All', 'FullStack', 'Back-end', 'Front-end'].map((dev) => {
              return (
                <button
                  key={dev}
                  data-selected={filterSelected === dev}
                  className='hover:bg-accent data-[selected=true]:bg-accent h-full flex-grow duration-300 ease-in-out'
                  onClick={handleProjectsFilter}
                >
                  {dev}
                </button>
              );
            })}
          </div>
        </div>
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}