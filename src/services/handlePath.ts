
import { ProjectCategories } from '@/assets/allProjects';

export type PathDetailProps = {
  language: 'pt-br' | 'en-us',
  section?: 'projects',
  projectFilter?: ProjectCategories,
}

export function getPathDetails(pathname:string) {
  const [language, section, projectFilter] = pathname.split('/').filter((path) => path.length);
  return {
    language,
    section,
    projectFilter,
  } as PathDetailProps;
}
