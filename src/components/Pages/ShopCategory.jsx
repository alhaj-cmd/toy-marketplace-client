// import React from 'react';

const ShopCategory = ({service}) => {
    // console.log(service)
    const {picture, name, price, rating} = service
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full h-96 p-4 rounded-3xl" src={picture} alt="Not show picture" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
   <h6 className="card-title">Price : ${price}</h6>
    <h6 className="card-title">Rating : {rating}</h6>
  
    <div className="card-actions">
      <button className="btn btn-primary">view Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShopCategory;