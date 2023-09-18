export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span>
        {`© Davíd Roggér ${year}`}
      </span>
    </footer>
  );
}