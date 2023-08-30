import './style.css';

export default function Header() {
  return (
    <header
      className='header-container dark-header-container'
    >
      <h1>{'<DavídRoggér />'}</h1>

      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>

    </header>
  );
}