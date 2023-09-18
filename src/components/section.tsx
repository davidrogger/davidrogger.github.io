import { Outlet } from 'react-router-dom';

export function Section() {
  return (
    <section className='min-h-[calc(100vh-100px)] bg-accent'>
      <Outlet />
    </section>
  );
}