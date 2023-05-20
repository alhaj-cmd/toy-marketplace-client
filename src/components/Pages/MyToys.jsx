import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyToysData from "./MyToysData";


const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toyCategory, setToyCategory] = useState([]);

useEffect(() =>{
 
    fetch(`http://localhost:5000/myToys/${user?.email}`)
    .then((res) => res.json())
    .then((data) => setToyCategory(data))
},[user])

    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>SubCategory</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        toyCategory?.map((category, index) => <MyToysData
        key={category._id}
        category={category}
        index={index}
        ></MyToysData>)
    }
   
    
    </tbody>
  </table>
</div>
{/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4"> been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn btn-primary">Yah!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyToys;