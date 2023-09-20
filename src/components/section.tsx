import { Outlet } from 'react-router-dom';

export function Section() {
  return (
    <section className='min-h-[calc(100vh-136px)] flex justify-center'>
      <div className='my-5 border rounded p-4 h-fit max-w-[85%]'>
        <Outlet />
      </div>
    </section>
  );
}