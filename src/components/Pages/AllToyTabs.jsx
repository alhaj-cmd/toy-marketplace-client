

const AllToyTabs = ({allCategori, index}) => {
    const {toyName, subCategory, price, availableQuantity}= allCategori;
    return (
      <tr>
        <th>{index+1}</th>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
       <td> <button className="btn btn-accent">View Details</button></td>
        
      </tr>
      
    );
};

export default AllToyTabs;