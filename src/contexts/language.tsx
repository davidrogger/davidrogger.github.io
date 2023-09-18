import { Dispatch, ReactNode, createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getPathLanguage } from '@/services/handlePath';

import contentData from '@/assets/languages.json';

export type AvailableLanguages = 'pt-br' | 'en-us';

type Navbar = {
  section: string,
  route: '/' | '/projects' | '/contacts',
}

type Home = {
  title: string;
}

type Section = {
  navbar: Navbar[],
  sections: {
    home: Home
  };
}

type LanguageContextProps = {
  content: Section,
  setContent: Dispatch<React.SetStateAction<Section>>
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export function LanguageProvider({ children }:{children:ReactNode}) {
  const { pathname } = useLocation();
  const [content, setContent] = useState<Section>(contentData[getPathLanguage(pathname)] as Section);
  return (
    <LanguageContext.Provider value={{ content, setContent }}>
      { children }
    </LanguageContext.Provider>
  );
}

export const userLanguageContext = () => useContext(LanguageContext);
