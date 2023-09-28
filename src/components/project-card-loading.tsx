export function ProjectCardLoading() {
  return (
    <div
      className='border h-[300px] w-60 opacity-80 rounded-xl overflow-hidden hover:shadow-neutral-400 relative hover:opacity-100 duration-500 ease-in-out'
    >
      <div
        className='object-cover opacity-70 animate-pulse bg-muted w-full h-full'
      />

      <div className='flex flex-col gap-2 bg-primary h-1/2 absolute inset-x-0 bottom-0 py-1 px-2 overflow-hidden'>
        <h1
          className='bg-muted text-sm whitespace-nowrap rounded animate-pulse opacity-80 w-[90%] mt-1'
        >
          <span className="opacity-0">title</span>
        </h1>

        <div className='flex flex-col justify-between mt-2'>
          <div className='bg-muted animate-pulse w-[60%] text-sm rounded'>
            <span className="opacity-0">category</span>
          </div>

          <ul className='flex gap-2 flex-wrap p-2 justify-center mt-1'>
            {Array.from({ length: 7 }, (_, key) => (
              <div
                key={key}
                className="rounded-full h-5 w-5 bg-muted animate-pulse"
              >
                <span className="opacity-0">icon</span>
              </div>
            ))}
          </ul>

        </div>
        <div
          className="bg-muted w-[20%] rounded text-end absolute right-2 bottom-1 text-sm animate-pulse"
        >
          <span className="opacity-0">link</span>
        </div>
      </div>
    </div>
  );
}
