import { useLocation } from 'react-router-dom';

import { userLanguageContext } from '@/contexts/language';
import { getCurrentLocation } from '@/services/handlePath';

export function useTabName() {
  const { portfolioName, content } = userLanguageContext();
  const { pathname } = useLocation();

  return {
    tabName: `${portfolioName} - ${getCurrentLocation(pathname, content)}`
  };
}