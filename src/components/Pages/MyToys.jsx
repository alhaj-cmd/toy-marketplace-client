import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toyCategory, setToyCategory] = useState([]);

useEffect(() =>{
    console.log(user.email)
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
        toyCategory?.map((category, index) => (
            <tr>
            <th>{index+1}</th>
            <td>{category.name}</td>
            <td>{category.subCategory}</td>
            <td>{category.price}</td>
            <td>{category.quantity}</td>
            <td>
                <button className="btn btn-success">Edit</button>
            </td>
            <td>
                <button className="btn btn-warning">Delete</button>
            </td>
          </tr>
        ))
    }
   
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyToys;