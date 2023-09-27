import { Dispatch, ReactNode, createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getPathLanguage } from '@/services/handlePath';

import contentData from '@/assets/languages.json';

export type AvailableLanguages = 'pt-br' | 'en-us';

type Navbar = {
  section: string,
  route: '/' | '/projects',
  tooltip: string,
}

type Home = {
  intro: string,
  start: string,
  middle: string,
  end: string,
}

export type PageStructure = {
  header: {
    navbar: Navbar[],
  },
  section: {
    home: Home,
    projects: {
      title: string,
      intro: string,
      filters: string[],
      card: {
        topic1: string,
        topic2: string,
      },
      page: string
    }
  },
  footer: {
    navbar: {
      tooltip: string,
    }
  }
}

type LanguageContextProps = {
  content: PageStructure,
  setContent: Dispatch<React.SetStateAction<PageStructure>>,
  portfolioName: string,
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export function LanguageProvider({ children }:{children:ReactNode}) {
  const { pathname } = useLocation();
  const [content, setContent] = useState<PageStructure>(contentData[getPathLanguage(pathname)] as PageStructure);
  return (
    <LanguageContext.Provider value={{ content, setContent, portfolioName: contentData.portfolio }}>
      { children }
    </LanguageContext.Provider>
  );
}

export const userLanguageContext = () => useContext(LanguageContext);
