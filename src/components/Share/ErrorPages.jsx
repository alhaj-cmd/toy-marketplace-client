import { Link, useRouteError } from 'react-router-dom'

const ErrorPages = () => {
    const { error } = useRouteError()
    return (
        <section>
      <div className='px-5 mx-auto w-96 my-8'>
        <div className=' text-center'>
          <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&ga=GA1.1.1132668939.1664394842&semt=ais" alt="Error image not found" />
          {/* <h2 className='mb-4   text-6xl text-orange-600'>
            <span className='sr-only '>Error</span>
            {status || 404} &#x1F602;
          </h2> */}
          <h2 className='text-red-400 mb-8 text-3xl'>
            {error?.message}
          </h2>
          <Link to='/' className='text-2xl bg-orange-600 p-3 mt-8 text-white ' >
            Click to Back
          </Link>
        </div>
        
      </div>
    </section>
    );
};

export default ErrorPages;