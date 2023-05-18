
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/login/pic.avif'




const Login = () => {


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-4">
          <img className='h-96 ' src={img} alt="" />

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <form  >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name='password' className="input input-bordered" />

              </div>
              <div className="form-control mt-6">

                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='my-4 text-center'>New to SCIENCE KITS !! <Link className='text-orange-600 font-bold' to='/register'>Register</Link></p>

            <div className=" mt-3 text-center">
              <button className="btn btn-circle btn-outline " >
                <FaGoogle className='text-orange-500' />
              </button>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;