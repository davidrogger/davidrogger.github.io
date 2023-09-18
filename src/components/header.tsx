import { userLanguageContext } from '@/contexts/language';

export default function Header() {
  const { content } = userLanguageContext();
  const { navbar } = content;

  return (
    <header
      className='header-container dark-header-container'
    >
      <h2>{'<DavídRoggér />'}</h2>

      <nav>
        {navbar.map((section) => (
          <a href='' key={section}>{section}</a>

        ))}
      </nav>

    </header>
  );
}