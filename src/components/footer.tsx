import { Github, Linkedin } from 'lucide-react';

const defaultIconSize = 28;

const Contacts = [
  {
    Icon: Github,
    title: '',
    link: '',
  },
  {
    Icon: Linkedin,
    title: '',
    link: '',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-end p-4 bg-primary">
      <div
        className='flex flex-col items-end border-l pl-4'
      >
        <span className='text-sm text-muted-foreground'>
          {`© ${year} - Davíd Roggér`}
        </span>
        <nav className='flex gap-2 mt-2 [&>*]:border-bg-accent [&>*]:p-1 [&>*]:rounded cursor-pointer text-accent-foreground'>
          {Contacts.map(({ Icon }, index) => (
            <Icon
              key={index}
              strokeWidth={0.5}
              size={defaultIconSize}
              className='hover:bg-secondary'
            />
          ))}
        </nav>
      </div>
      
    </footer>
  );
}