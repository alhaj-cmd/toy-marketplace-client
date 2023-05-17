import { Link, useRouteError } from 'react-router-dom'

const ErrorPages = () => {
    const { error, status } = useRouteError()
    return (
        <section>
      <div className='px-5  my-8'>
        <div className=' text-center'>
          <h2 className='mb-4   text-6xl text-orange-600'>
            <span className='sr-only '>Error</span>
            {status || 404} &#x1F602;
          </h2>
          <h2 className='text-red-400 mb-8 text-3xl'>
            {error?.message}
          </h2>
          <Link to='/' className='text-2xl bg-orange-600 p-3  text-white ' >
            Click to Back
          </Link>
        </div>
        
      </div>
    </section>
    );
};

export default ErrorPages;