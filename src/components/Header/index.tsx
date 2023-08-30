import './style.css';

export default function Header() {
  const lightMode = false;
  return (
    <header
      className={ `header-container ${lightMode ? '' : 'dark-header-container'}` }
    >
      <h1 title='owner'>{'<DavídRoggér />'}</h1>
    </header>
  );
}