import { ProjectCardLoading } from './project-card-loading';

export function ProjectLoading() {
  return (
    <div
      className="absolute inset-0 flex gap-3 mb-5 flex-wrap items-start justify-center px-2 py-10 rounded-xl bg-background z-10"
    >
      {Array.from({ length: 3 }, (_, key) => (
        <ProjectCardLoading
          key={key}
        />
      ))}
    </div>
  );
}
