import { AvailableLanguages } from '@/contexts/language';

import { ProjectCategories } from '@/assets/allProjects';

export function getPathLanguage(pathname:string):AvailableLanguages {
  return pathname.split('/')[1] as AvailableLanguages;
}

export function getProjectFilterPath(pathname:string):ProjectCategories | undefined {
  return pathname.split('/')[3] as ProjectCategories;
}
