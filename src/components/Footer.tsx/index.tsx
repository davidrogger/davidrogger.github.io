import './styles.css';
import content from '@/assets/languages.json';

export default function Footer() {
  const { name } = content;
  const year = new Date().getFullYear();

  return (
    <footer>
      <span>
        {`© ${name} ${year}`}
      </span>
    </footer>
  );
}