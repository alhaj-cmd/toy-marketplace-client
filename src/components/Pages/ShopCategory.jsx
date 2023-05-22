// import React from 'react';
import toast from 'react-hot-toast';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ShopCategory = ({ service }) => {
  // console.log(service)

  const {user}  = useContext(AuthContext);

  const handleToast = ()  =>{

    if(user){
      toast.success("cart is showed!!!")
    }
    else{
      toast.error("pleace  login!!!")
    }
    
  }
  const { _id, picture, name, price, rating } = service
  return (
    <div>
      <div className="card lg:w-96  bg-base-100 shadow-xl">
        <figure><img className="w-full lg:h-72 p-4 rounded-3xl" src={picture} alt="Not show picture" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <h6 className="card-title">Price : ${price}</h6>
          <h6 className="card-title">Rating : {rating}</h6>

          <div className="card-actions justify-end">
            <Link to={`/toyDetails/${_id}`}> <button onClick={handleToast} className="btn btn-primary">view Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;