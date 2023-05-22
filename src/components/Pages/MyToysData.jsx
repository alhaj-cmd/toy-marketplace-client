// import React from 'react';

import { Link } from "react-router-dom";

const MyToysData = ({category, index, handleDelete, handleCategoryEdit}) => {
    const {name, _id, subCategory, price, quantity} = category;
    return (
      
           <tr>
            <th>{index+1}</th>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                {/* {status === 'confirm' ? <Link>Update</Link> : <button onClick={() => handleCategoryEdit(_id)}  className="btn btn-success">Edit</button>} */}
                <Link to={`/edit/${category._id}`}><button onClick={() => handleCategoryEdit(_id)}  className="btn btn-success">Edit</button></Link>
               
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
            </td>
          </tr>
       
    );
};

export default MyToysData;