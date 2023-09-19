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
  title: string,
}

type PageStructure = {
  header: {
    navbar: Navbar[],
  },
  sections: {
    home: Home
  },
  footer: {
    navbar: {
      tooltip: string,
    }
  }
}

type LanguageContextProps = {
  content: PageStructure,
  setContent: Dispatch<React.SetStateAction<PageStructure>>
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export function LanguageProvider({ children }:{children:ReactNode}) {
  const { pathname } = useLocation();
  const [content, setContent] = useState<PageStructure>(contentData[getPathLanguage(pathname)] as PageStructure);
  return (
    <LanguageContext.Provider value={{ content, setContent }}>
      { children }
    </LanguageContext.Provider>
  );
}

export const userLanguageContext = () => useContext(LanguageContext);
