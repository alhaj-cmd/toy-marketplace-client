import { useLoaderData } from "react-router-dom";
import AllToyTabs from "./AllToyTabs";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AllToy = () => {

  const [searchText, setSearchText] = useState('')

  const { user } = useContext(AuthContext);
  // console.log(user)
  const allCategories = useLoaderData()


 const handleSearch =  () => {
  fetch(`http://localhost:5000/searchToyname/${searchText}`)
  .then(res => res.json())
  .then(data => console.log(data))
 }

  return (
    <div>
      <div className="px-4">

        <div className="form-control my-12">
          <div className="input-group">
            <input onChange={(e) => setSearchText(e.target.value) } type="text" placeholder="Toy Name" className="input input-bordered" /> {' '}
            <button onClick={handleSearch} className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
        <h2 className="text-center text-3xl bg-success">Seller Name : {user?.displayName}</h2>
        <div className="overflow-x-auto my-6">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {
                allCategories.map((allCategori, index) => <AllToyTabs
                  key={allCategori._id}
                  allCategori={allCategori}
                  index={index}
                ></AllToyTabs>)
              }

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AllToy;