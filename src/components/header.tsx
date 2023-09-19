import { Link, useLocation } from 'react-router-dom';

import { userLanguageContext } from '@/contexts/language';
import { getPathLanguage } from '@/services/handlePath';

export default function Header() {
  const { content } = userLanguageContext();
  const { navbar } = content;
  const { pathname } = useLocation();

  return (
    <header
      className='flex justify-between h-12 items-center p-2 bg-primary border-b'
    >
      <div className='flex items-center border-r'>
        <h2 className='text-lg mr-3 text-accent-foreground'>
          {'<DavídRoggér />'}
        </h2>
      </div>

      <nav className='flex gap-5 text-accent-foreground'>
        {navbar.map(({ section, route }, index) => {
          const languagePath = `/${getPathLanguage(pathname)}`;
          const redirectRoute = index ? `${languagePath}${route}`: languagePath;

          return <Link to={redirectRoute} title={redirectRoute} key={section}>{section}</Link>;
        })}
      </nav>
    </header>
  );
}