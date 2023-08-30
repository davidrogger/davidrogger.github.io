import './styles.css';

export default function Header() {
  return (
    <header
      className='header-container dark-header-container'
    >
      <h2>{'<DavídRoggér />'}</h2>

      <nav>
        <a href=''>Home</a>
        <a href=''>About</a>
      </nav>

    </header>
  );
}