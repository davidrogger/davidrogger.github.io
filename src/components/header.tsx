import { Link, useLocation } from 'react-router-dom';

import { userLanguageContext } from '@/contexts/language';
import { getPathLanguage } from '@/services/handlePath';

export default function Header() {
  const { content } = userLanguageContext();
  const { header } = content;
  const { pathname } = useLocation();

  return (
    <header
      className='flex justify-between h-12 items-center p-2 bg-primary border-b'
    >
      <div className='flex items-center border-r'>
        <h2 className='text-xl mr-3 text-accent-foreground'>
          {'<DavídRoggér />'}
        </h2>
      </div>

      <nav className='flex text-accent-foreground gap-2'>
        {header.navbar.map(({ section, route, tooltip }, index) => {
          const languagePath = `/${getPathLanguage(pathname)}`;
          const redirectRoute = index ? `${languagePath}${route}`: languagePath;

          return (
            <Link
              className='hover:bg-accent py-1 px-2 rounded duration-300 ease-in-out'
              to={redirectRoute} title={tooltip} key={section}>
              {section}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}