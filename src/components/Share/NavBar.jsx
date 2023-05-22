import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // localStorage.removeItem('car-access-token')
      })
      .catch(error => console.log(error))
  }


  return (
    <div className="navbar font-bold bg-indigo-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>


        </div>
        <a className="btn btn-ghost normal-case text-xl"><img className="h-10" src="logo.jpg" alt="" /></a>
        <a className="text-violet-700">SCIENCE KITS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li> <Link>Home</Link>

            <Link to='/addtoy'>Add a Toy</Link>
            <Link to='/blogs'>Blogs</Link>

            {user?.email ?
              <>
                <Link to="/alltoy">All Toys</Link>
                <Link to='/myToys'>My Toys</Link>
                <button className="text-primary" onClick={handleLogOut}>log out</button>
              </> : <Link to='/login' className="text-primary">Log In</Link>
            }
          </li>
        </ul>
      </div>
      {user? <div className="navbar-end">

        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 text-primary rounded-full">
            <img src={user?.photoURL} alt="no photo" />
          </div>
        </label>
      </div> : " "}
    </div>
  );
};

export default NavBar;