import { AvailableLanguages } from '@/contexts/language';

const availableLanguages: Record<string, AvailableLanguages> = {
  '/pt-br': 'pt-br',
  '/en-us': 'en-us',
};

export function getPathLanguage(pathname:string):AvailableLanguages {
  return availableLanguages[pathname];
}