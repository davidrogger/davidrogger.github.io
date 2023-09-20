
import { Link } from 'react-router-dom';

import { userLanguageContext } from '@/contexts/language';

type ProjectCardProps = {
  title: string,
  img: string,
  link: string,
  development: string,
}

export function ProjectCard({ title, img, link, development }:ProjectCardProps) {
  const { content: { section } } = userLanguageContext();
  console.log('debug', section);
  return (
    <div
      className='border h-72 w-60 opacity-80 rounded-xl overflow-hidden hover:shadow-neutral-400 relative hover:opacity-100 duration-500 ease-in-out'
    >
      <img 
        src={img}
        alt=''
        className='object-cover opacity-70'
      />
      
      <div className='flex flex-col justify-between gap-2 bg-primary h-1/2 absolute inset-x-0 bottom-0 p-2 overflow-hidden'>
        <h1
          className='text-red-500 text-lg whitespace-nowrap'
        >
          {`<${title} />`}
        </h1>

        <div>
          <div className='flex gap-2'>
            <h2
              className='text-muted-foreground'
            >
              {`${section.projects.card.topic1}:`}
            </h2>
            <span>{development}</span>
          </div>

          <div>
            <h2
              className='text-muted-foreground'
            >
              {`${section.projects.card.topic2}:`}
            </h2>

          </div>

          <div className='flex gap-2'>
            <h2
              className='text-muted-foreground'
            >
              {`${section.projects.card.topic3}:`}
            </h2>
            <Link
              className='text-blue-400 underline'
              to={link}
              target='_blank'
            >
              Link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
