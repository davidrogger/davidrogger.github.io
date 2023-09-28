
import { Link } from 'react-router-dom';

import { userLanguageContext } from '@/contexts/language';

import { Icon } from '@/assets/icons';

type ProjectCardProps = {
  title: string,
  img: string,
  link: string,
  development: string,
  tools: string[],
}

export function ProjectCard({ title, img, link, development, tools }:ProjectCardProps) {
  const { content: { section } } = userLanguageContext();
  return (
    <div
      className='border h-[300px] w-60 opacity-80 rounded-xl overflow-hidden hover:shadow-neutral-400 relative hover:opacity-100 duration-500 ease-in-out'
    >
      <img
        src={img}
        alt=''
        className='object-cover opacity-70'
      />

      <div className='flex flex-col gap-2 bg-primary h-1/2 absolute inset-x-0 bottom-0 py-1 px-2 overflow-hidden'>
        <h1
          className='text-red-500 text-lg whitespace-nowrap'
        >
          {`<${title} />`}
        </h1>

        <div className='flex flex-col justify-between'>
          <div className='flex gap-2'>
            <h2
              className='text-muted-foreground'
            >
              {`${section.projects.card.topic1}:`}
            </h2>
            <span>{development}</span>
          </div>

          <ul className='flex gap-2 flex-wrap p-2 justify-center'>
            {tools.map((tool) => {
              const Tool = Icon[tool];
              return (
                <li className='z-10 text-muted-foreground hover:text-foreground' key={tool}>
                  <Tool title={tool} />
                </li>
              );
            })}
          </ul>

        </div>
        <Link
          className='underline text-end absolute inset-x-2 bottom-1'
          to={link}
          target='_blank'
        >
          {section.projects.card.topic2}
        </Link>
      </div>
    </div>
  );
}
