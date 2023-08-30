import './style.css';

export default function Header() {
  return (
    <header
      className='header-container dark-header-container'
    >
      <h1>{'<DavídRoggér />'}</h1>

      <nav>
        <a href=''>Home</a>
        <a href=''>About</a>
      </nav>

    </header>
  );
}