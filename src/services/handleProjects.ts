import { ProjectCategories } from '@/assets/allProjects';

const categoriesMap: Record<string, ProjectCategories> = {
  todos: 'all',
  all: 'all',
  teste: 'testing',
  testing: 'testing',
  fullstack: 'fullstack',
  backend: 'backend',
  frontend: 'frontend'
};

const categoriesRoute:Record<string, string> = {
  teste: '/testing',
  testing: '/testing',
  fullstack: '/fullstack',
  backend: '/backend',
  frontend: '/frontend'
};

export function getCategoryTypeByName(name:string):ProjectCategories {
  return categoriesMap[name];
}

export function getProjectRouteByCategory(category:string) {
  const rootRoute = '';
  return categoriesRoute[category] || rootRoute;
}