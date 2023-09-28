export type Project = {
  title: string;
  development: string,
  img: string,
  link: string,
  tools: string[]
}

const frontend:Project[] = [
  {
    title: 'Organa Engenharia',
    development: 'Front-end',
    img: 'https://raw.githubusercontent.com/davidrogger/davidrogger.github.io/version-01/src/images/organa_engenharia.png',
    link: 'https://www.organaengenharia.com.br/',
    tools: ['nodejs', 'typescript', 'reactjs', 'tailwindcss']
  },
  {
    title: 'Solar System',
    development: 'Front-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-project-solar-system/main/imgs/project_solar_system_top.jpg',
    link: 'https://github.com/davidrogger/trybe-project-solar-system',
    tools: ['nodejs', 'javascript', 'reactjs']
  },
  {
    title: 'Tryunfo',
    development: 'Front-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-project-tryunfo/main/imgs/project_tryunfo_top.webp',
    link: 'https://github.com/davidrogger/trybe-project-tryunfo',
    tools: ['nodejs', 'javascript', 'reactjs']
  },
  {
    title: 'Trybetunes',
    development: 'Front-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-project-trybetunes/main/readme-imgs/project_trybetunes_mid.webp',
    link: 'https://github.com/davidrogger/trybe-project-trybetunes',
    tools: ['nodejs', 'javascript', 'reactjs']
  },
  {
    title: 'Online Store',
    development: 'Front-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-project-frontend-online-store/main/readme-imgs/project_frontend_store_top.webp',
    link: 'https://github.com/davidrogger/trybe-project-frontend-online-store',
    tools: ['nodejs', 'javascript', 'reactjs']
  },
  {
    title: 'TrybeWallet',
    development: 'Front-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-project-trybewallet/main/readme-imgs/project_trybewallet_top.webp',
    link: 'https://github.com/davidrogger/trybe-project-trybewallet',
    tools: ['nodejs', 'javascript', 'reactjs', 'react-redux', 'bootstrap']
  },
  {
    title: 'Trivia',
    development: 'Front-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-project-trivia/main/readme-imgs/project_trivia_top.webp',
    link: 'https://github.com/davidrogger/trybe-project-trivia',
    tools: ['nodejs', 'javascript', 'reactjs', 'react-redux']
  },
  {
    title: 'StarWars Planets Search',
    development: 'Front-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-project-starwars-planets-search/main/readme-imgs/project_starwars_planets_top.webp',
    link: 'https://github.com/davidrogger/trybe-project-starwars-planets-search',
    tools: ['nodejs', 'javascript', 'reactjs']
  },
  {
    title: 'Recipes App',
    development: 'Front-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-project-recipes-app/main/readme-imgs/project_recipes_app_top.webp',
    link: 'https://github.com/davidrogger/trybe-project-recipes-app',
    tools: ['nodejs', 'javascript', 'reactjs', 'react-redux', 'bootstrap']
  },
];

const qa:Project[] = [
  {
    title: 'RTL',
    development: 'Testing',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-project-react-testing-library/main/readme-imgs/project_rtl_top2.webp',
    link: 'https://github.com/davidrogger/trybe-project-react-testing-library',
    tools: ['nodejs', 'javascript', 'reactjs', 'react-testing-library']
  },
];

const backend:Project[] = [
  {
    title: 'Talker Manager',
    development: 'Back-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-backend/main/imgs/04_project_talker_manager.webp',
    link: 'https://github.com/davidrogger/trybe-project-talker-manager',
    tools: ['docker', 'nodejs', 'javascript', 'expressjs', 'swagger']
  },
  {
    title: 'Store Manager',
    development: 'Back-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-backend/main/imgs/05_project_store_manager.webp',
    link: 'https://github.com/davidrogger/trybe-project-store-manager',
    tools: ['docker', 'nodejs', 'javascript', 'mochajs', 'chaijs', 'expressjs', 'mysql', 'swagger']
  },
  {
    title: 'Blogs API',
    development: 'Back-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-backend/main/imgs/06_project_blogs_api.webp',
    link: 'https://github.com/davidrogger/trybe-project-blogs-api',
    tools: ['docker', 'nodejs', 'javascript', 'expressjs', 'mysql', 'jwtokens', 'swagger']
  },
  {
    title: 'Trybesmith',
    development: 'Back-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-backend/main/imgs/07_project_trybesmith.webp',
    link: 'https://github.com/davidrogger/trybe-project-trybesmith',
    tools: ['docker', 'nodejs', 'typescript', 'expressjs', 'mysql', 'jwtokens', 'swagger']
  },
  {
    title: 'Trybe Futebol Club',
    development: 'Back-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-project-futebol-club/main/readme-imgs/project_top.webp',
    link: 'https://github.com/davidrogger/trybe-project-futebol-club',
    tools: ['docker', 'nodejs', 'typescript', 'mochajs', 'chaijs', 'expressjs', 'mysql', 'sequelize', 'jwtokens', 'swagger']
  },
  {
    title: 'Car Shop',
    development: 'Back-end',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-backend/main/imgs/11_project_trybe_car_shop.webp',
    link: 'https://github.com/davidrogger/trybe-project-car-shop',
    tools: ['docker', 'nodejs', 'typescript', 'mochajs', 'chaijs', 'expressjs', 'zod', 'mongodb', 'mongoose', 'swagger']
  },
];

const fullstack:Project[] = [
  {
    title: 'Delivery App',
    development: 'Full Stack',
    img: 'https://raw.githubusercontent.com/davidrogger/trybe-project-delivery-app/main/readme-imgs/project_fe_mid.webp',
    link: 'https://github.com/davidrogger/trybe-project-delivery-app',
    tools: ['nodejs', 'javascript', 'reactjs', 'axios', 'react-hook-form', 'styled-components', 'expressjs', 'mysql', 'jwtokens', 'sequelize']
  },
  {
    title: 'Talker Manager II',
    development: 'Full Stack',
    img: 'https://img.youtube.com/vi/5j2_DD0e708/0.jpg',
    link: 'https://github.com/davidrogger/talker-manager-ts',
    tools: ['nodejs', 'nextjs', 'typescript', 'docker', 'expressjs', 'mochajs', 'chaijs', 'jestjs', 'react-testing-library', 'mysql']
  },
];

const all = [
  ...fullstack,
  ...backend,
  ...frontend,
  ...qa,
];

export type ProjectCategories = 'all' | 'fullstack' | 'backend' | 'frontend' | 'qa';

export const projectsCatalog:{[key in ProjectCategories]: Project[]} = {
  all,
  fullstack,
  backend,
  frontend,
  qa,
};
