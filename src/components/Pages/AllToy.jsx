

const AllToy = () => {
    return (
        <div className="px-4">
            <div className="form-control my-12">
  <div className="input-group">
    <input type="text" placeholder="Toy Name" className="input input-bordered" />
    <button className="btn btn-primary">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
            <div className="overflow-x-auto my-6">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Toy Name</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>View Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllToy;