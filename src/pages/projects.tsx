import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { userLanguageContext } from '@/contexts/language';
import { getPathLanguage, getProjectFilterPath } from '@/services/handlePath';
import { getCategoryTypeByName, getProjectRouteByCategory } from '@/services/handleProjects';
import { ArrowBigRight, ArrowBigRightDash, LucideIcon } from 'lucide-react';

import { Project, projectsCatalog } from '@/assets/allProjects';

import { ProjectCard } from '@/components/projectCard';

export function Projects(){
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { content: { section } } = userLanguageContext();

  const [allProjects, setAllProjects] = useState<Project[]>(projectsCatalog[getProjectFilterPath(pathname) || 'all']);
  const [page, setPage] = useState<number>(1);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);

  function handleProjectsFilter(filter: string) {
    const filterLowerCase = filter.toLowerCase();
    navigate(`/${getPathLanguage(pathname)}/projects${getProjectRouteByCategory(filterLowerCase)}`);
    setAllProjects(projectsCatalog[getCategoryTypeByName(filterLowerCase)]);
    setPage(1);
  }

  function getPagesQuantity() {
    const displayThreshold = 15;
    return Math.ceil(allProjects.length / displayThreshold );
  }

  function isFilterSelected(filter:string) {
    const filterPath = getProjectFilterPath(pathname);
    if (!filterPath) return filter === 'All' || filter === 'Todos';
    return filter === filterPath;
  }

  useEffect(() => {
    function loadDisplayedProjects(pageNumber:number) {
      const pageThreshold = 15;
      const lastProjectPage = pageThreshold * pageNumber;
      const firstProjectPage = pageNumber === 1 ? 0 : lastProjectPage - pageThreshold;
      const firstPage = allProjects.slice(firstProjectPage, lastProjectPage);
      setDisplayedProjects(firstPage);
    }

    loadDisplayedProjects(page);
  }, [page, allProjects]);

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
          <div className='flex gap-4 border w-[400px] h-10 rounded-full bg-primary overflow-hidden'>
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

        <div className='absolute -bottom-5 border-dashed p-2 w-full flex justify-end gap-2'>
          {Array.from({ length: getPagesQuantity() }, (_, index) => (
            <button
              data-selected={page === (index + 1)}
              key={index}
              className='opacity-60 data-[selected=true]:opacity-100 text-sm'
              onClick={() => setPage(index + 1)}
            >
              { index + 1 }
            </button>
          ))}
          {[ArrowBigRight, ArrowBigRightDash].map((Arrow:LucideIcon, key) => (
            <button
              key={key}
              className='opacity-60'
            >
              <Arrow
                size={16}
                strokeWidth={0.5}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}