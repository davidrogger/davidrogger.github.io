import { ProjectCategories } from '@/assets/allProjects';

const categoriesMap: Record<string, ProjectCategories> = {
  todos: 'all',
  all: 'all',
  qa: 'qa',
  fullstack: 'fullstack',
  backend: 'backend',
  frontend: 'frontend'
};

const categoriesRoute:Record<string, string> = {
  qa: '/qa',
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

export async function delay(time:number = 500) {
  await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
  return time;
}