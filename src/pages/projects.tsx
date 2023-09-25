import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { userLanguageContext } from '@/contexts/language';
import { getPathLanguage, getProjectFilterPath } from '@/services/handlePath';

import { Project, ProjectCategories, projectsCatalog } from '@/assets/allProjects';

import { ProjectCard } from '@/components/projectCard';

export function Projects(){
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { content: { section } } = userLanguageContext();

  const [allProjects, setAllProjects] = useState<Project[]>(projectsCatalog[getProjectFilterPath(pathname) || 'all']);
  const [displayedProjects, setDisplayedProjects] = useState(projectsCatalog[getProjectFilterPath(pathname) || 'all']);

  function handleProjectsFilter(filter: string) {
    const projectsFilter = filter === 'All' || filter === 'Todos' ? '' : `/${filter}`;

    navigate(`/${getPathLanguage(pathname)}/projects${projectsFilter}`);
    setDisplayedProjects(projectsCatalog[filter.toLowerCase() as ProjectCategories]);
  }

  function findPagesQuantity() {
    const displayThreshold = 15;
    return Math.ceil(allProjects.length / displayThreshold );
  }

  function isFilterSelected(filter:string) {
    const filterPath = getProjectFilterPath(pathname);
    if (!filterPath) return filter === 'All' || filter === 'Todos';
    return filter === filterPath;
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
        className='flex gap-3 mt-20 mb-5 flex-wrap justify-center px-2 py-10 rounded-xl relative'
      >
        <div className='flex justify-center absolute -top-5 left-0 w-full'>
          <div className='flex gap-4 border w-1/2 h-10 rounded-full bg-primary overflow-hidden'>
            {section.projects.filters.map((dev) => {
              return (
                <button
                  key={dev}
                  data-selected={isFilterSelected(dev)}
                  className='hover:bg-accent data-[selected=true]:bg-accent h-full flex-grow duration-300 ease-in-out'
                  onClick={() => handleProjectsFilter(dev)}
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