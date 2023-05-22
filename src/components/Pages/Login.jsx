
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/login/pic.avif'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/Firebase.config';




const Login = () => {

  const auth = getAuth(app);
const Googleprovider = new GoogleAuthProvider();

  const {signIn} = useContext(AuthContext);
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
    })
    .catch(error => console.log(error));
   
  }

  // google sign in
  const handleGoogleSignIn = () => {
    // console.log('hello')
    signInWithPopup(auth, Googleprovider)
      .then(res => {
        const user = res.user;
        console.log(user);
      })
      .catch(error => {
        console.log('error', error.message)
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-4">
          <img className='h-96 ' src={img} alt="" />

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <form  onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />

              </div>
              <div className="form-control mt-6">

                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='my-4 text-center'>New to SCIENCE KITS !! <Link className='text-orange-600 font-bold' to='/register'>Register</Link></p>

            <div className=" mt-3 text-center">
              <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline " >
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