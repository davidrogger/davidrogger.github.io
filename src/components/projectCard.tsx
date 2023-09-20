import { Link } from 'react-router-dom';

type ProjectCardProps = {
  title: string,
  img: string,
  link: string,
}

export function ProjectCard({ title, img, link }:ProjectCardProps) {
  return (
    <div
      className='border h-48 w-56 opacity-80 hover:opacity-100 rounded-xl overflow-hidden hover:shadow-neutral-400 relative'
    >
      <Link
        to={link}
        target='_blank'
      >
        <img 
          src={img}
          alt=''
          className='object-cover opacity-70'
        />
      </Link>
      
      <div className='bg-primary h-10 absolute inset-x-0 bottom-0'>
        <h1
          className='text p-2 w-full h-full flex justify-center items-end'
        >
          {`<${title} />`}
        </h1>
      </div>
    </div>
  );
}
