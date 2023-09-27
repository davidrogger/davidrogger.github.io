import { AvailableLanguages, PageStructure } from '@/contexts/language';

import { ProjectCategories } from '@/assets/allProjects';

export function getPathLanguage(pathname:string):AvailableLanguages {
  return pathname.split('/')[1] as AvailableLanguages;
}

export function getProjectFilterPath(pathname:string):ProjectCategories | undefined {
  return pathname.split('/')[3] as ProjectCategories;
}

export function getPageSectionPosition(pathname:string) {
  const disconsiderLanguagePath = 1;
  const section = pathname.split('/').filter((path) => path.length).length - disconsiderLanguagePath;
  return section;
}

export function getCurrentLocation (pathname:string, content:PageStructure):string {
  const page = getPageSectionPosition(pathname) || 0;
  console.log(page);
  return content.header.navbar[page].section;
}
