import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyToysData from "./MyToysData";


const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toyCategory, setToyCategory] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToyCategory(data))
  }, [user])

  // delete from user
  const handleDelete = (id) => {
    console.log('handle delete', id)
    const proceed = confirm('Are you sure you want to delete')
    if (proceed) {
      fetch(`http://localhost:5000/myToys/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('deleted successful');
            const remaining = toyCategory.filter((toy => toy._id !== id))
            setToyCategory(remaining);
          }
        })
    }
  }

  // Update
  const handleCategoryEdit = id => {
    fetch(`http://localhost:5000/myToys/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status: "confirm" })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = toyCategory.filter(toyupdate => toyupdate._id !== id)
          const updated = toyCategory.find(toyupdate => toyupdate._id == id)
          updated.status = 'confirm'
          const newCategory = [updated, ...remaining]
          setToyCategory(newCategory);
        }
      })
  }

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
                handleDelete={handleDelete}
                handleCategoryEdit={handleCategoryEdit}
              ></MyToysData>)
            }


          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyToys;