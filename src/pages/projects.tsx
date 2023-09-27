import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { userLanguageContext } from '@/contexts/language';
import { getPathLanguage, getProjectFilterPath } from '@/services/handlePath';
import { delay, getCategoryTypeByName, getProjectRouteByCategory } from '@/services/handleProjects';
import { ArrowBigRight, LucideIcon } from 'lucide-react';

import { Project, projectsCatalog } from '@/assets/allProjects';

import { ProjectCard } from '@/components/project-card';
import { ProjectLoading } from '@/components/project-loading';

export function Projects(){
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { content: { section } } = userLanguageContext();

  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    return filter.toLowerCase() === filterPath;
  }

  useEffect(() => {
    async function loadDisplayedProjects(pageNumber:number) {
      setIsLoading(true);
      const pageThreshold = 15;
      const lastProjectPage = pageThreshold * pageNumber;
      const firstProjectPage = pageNumber === 1 ? 0 : lastProjectPage - pageThreshold;
      const firstPage = allProjects.slice(firstProjectPage, lastProjectPage);
      setDisplayedProjects(firstPage);
      await delay();
      setIsLoading(false);
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

      <p>
        {section.projects.intro}
      </p>

      <div
        className='flex gap-3 mt-20 mb-5 flex-wrap justify-center px-2 py-10 rounded-xl relative'
      >
        { isLoading && <ProjectLoading /> }

        <div className='flex justify-center absolute -top-5 left-0 w-full'>
          <div className='flex border rounded-full bg-primary overflow-y-hidden z-10'>
            {section.projects.filters.map((dev) => {
              return (
                <button
                  key={dev}
                  data-selected={isFilterSelected(dev)}
                  className='hover:bg-accent data-[selected=true]:bg-accent h-full flex-grow duration-300 ease-in-out py-2 px-3'
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

        <div className='absolute -bottom-5 border-dashed p-2 w-full flex justify-end gap-2 z-10'>
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
          {[ArrowBigRight].map((Arrow:LucideIcon, key) => (
            <button
              key={key}
              className='opacity-60 disabled:cursor-not-allowed'
              title={section.projects.page}
              disabled={getPagesQuantity() === 1}
              onClick={() => setPage(page + 1)}
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