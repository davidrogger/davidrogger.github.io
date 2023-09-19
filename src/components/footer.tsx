import { Link } from 'react-router-dom';

import { userLanguageContext } from '@/contexts/language';
import { replaceWordPageFromPhrase } from '@/services/replaceWord';
import { Github, Linkedin } from 'lucide-react';

const defaultIconSize = 20;

const Contacts = [
  {
    Icon: Github,
    page: 'GitHub',
    link: 'https://github.com/davidrogger',
  },
  {
    Icon: Linkedin,
    page: 'Linkedin',
    link: 'https://www.linkedin.com/in/davidrogger/',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { content: { footer } } = userLanguageContext();

  return (
    <footer className="flex justify-end p-4 bg-primary">
      <div
        className='flex flex-col items-end border-l pl-4'
      >
        <span className='text-sm text-muted-foreground'>
          {`© ${year} - Davíd Roggér`}
        </span>
        <nav className='flex gap-2 mt-2 [&>*]:border-bg-accent [&>*]:p-1 [&>*]:rounded cursor-pointer text-accent-foreground'>
          {Contacts.map(({ Icon, page, link }, index) => (
            <Link
              target='_blank'
              to={link}
              key={index}
              className='hover:bg-secondary'
              title={replaceWordPageFromPhrase(footer.navbar.tooltip, page)}
            >
              <Icon
                strokeWidth={0.5}
                size={defaultIconSize}
              />
            </Link>
          ))}
        </nav>
      </div>
      
    </footer>
  );
}