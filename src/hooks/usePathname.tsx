import { useLocation } from 'react-router-dom';

import { getPathDetails } from '@/services/handlePath';

export function usePathname() {
  const { pathname } = useLocation();
  return getPathDetails(pathname);
}