
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register Now</h1>
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="your email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URl</span>
                                </label>
                                <input type="photo" placeholder="photo url" name='photo' className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an Account ? <Link className='text-orange-600 font-bold' to='/login'>Log In</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;