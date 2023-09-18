import { AvailableLanguages } from '@/contexts/language';

export function getPathLanguage(pathname:string):AvailableLanguages {
  return pathname.split('/')[1] as AvailableLanguages;
}
