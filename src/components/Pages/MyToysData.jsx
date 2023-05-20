// import React from 'react';

const MyToysData = ({category, index}) => {
    const {name, subCategory, price, quantity} = category;
    return (
      
           <tr>
            <th>{index+1}</th>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                {/* <button className="btn btn-success">Edit</button> */}
                <label htmlFor="my-modal" className="btn btn-success">Edit</label>
            </td>
            <td>
                <button className="btn btn-warning">Delete</button>
            </td>
          </tr>
       
    );
};

export default MyToysData;