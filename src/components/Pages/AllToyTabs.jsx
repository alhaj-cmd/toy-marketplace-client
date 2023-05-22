import { Link } from "react-router-dom";


const AllToyTabs = ({allCategori, index}) => {
    const {_id,toyName, subCategory, price, availableQuantity}= allCategori;
    return (
      <tr>
        <th>{index+1}</th>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
       <td> <Link to={`/toyDetails/${_id}`}><button className="btn btn-accent btn-xs">View Details</button></Link></td>
        
      </tr>
      
    );
};

export default AllToyTabs;