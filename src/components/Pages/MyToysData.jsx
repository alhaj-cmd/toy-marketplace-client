// import React from 'react';

import { Link } from "react-router-dom";

const MyToysData = ({category, index, handleDelete, }) => {
    const {name, _id, subCategory, price, quantity} = category;
    return (
      
           <tr>
            <th>{index+1}</th>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
            {/* edit button */}
                <Link to={`/edit/${category._id}`}><button className="btn btn-success">Edit</button></Link>
               
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
            </td>
          </tr>
       
    );
};

export default MyToysData;