import { Dispatch, ReactNode, createContext, useContext, useState } from 'react';

import { usePathname } from '@/hooks/usePathname';

import contentData from '@/assets/languages.json';

export type AvailableLanguages = 'pt-br' | 'en-us';

type Navbar = {
  section: string,
  route: '/' | '/projects',
  tooltip: string,
}

type HomeSectionProps = {
  sectionName: string,
  intro: string,
  start: string,
  middle: string,
  end: string,
}

type ProjectSectionProps = {
  sectionName: string,
  intro: string,
  filters: string[],
  card: {
    topic1: string,
    topic2: string,
  },
  paginationTooltip: string
}

export type PageStructure = {
  header: {
    navbar: Navbar[],
  },
  section: {
    home: HomeSectionProps,
    projects: ProjectSectionProps
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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { language } = usePathname();
  const [content, setContent] = useState<PageStructure>(contentData[language] as PageStructure);
  return (
    <LanguageContext.Provider value={{ content, setContent, portfolioName: contentData.portfolio }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const userLanguageContext = () => useContext(LanguageContext);
