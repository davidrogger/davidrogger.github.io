import { Dispatch, ReactNode, createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getPathLanguage } from '@/services/handlePath';

import contentData from '@/assets/languages.json';

export type AvailableLanguages = 'pt-br' | 'en-us';

type Session = {
  navbar: string[],
}

type LanguageContextProps = {
  content: Session,
  setContent: Dispatch<React.SetStateAction<Session>>
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export function LanguageProvider({ children }:{children:ReactNode}) {
  const { pathname } = useLocation();
  const [content, setContent] = useState<Session>(contentData[getPathLanguage(pathname)] as Session);
  return (
    <LanguageContext.Provider value={{ content, setContent }}>
      { children }
    </LanguageContext.Provider>
  );
}

export const userLanguageContext = () => useContext(LanguageContext);
