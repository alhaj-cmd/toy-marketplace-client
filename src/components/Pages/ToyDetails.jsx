import { Link, useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const toyData = useLoaderData();
    console.log(toyData);
    const { toyName, seller, price, subCategory, rating, picture, description, availableQuantity } = toyData;

    return (
        <div>

            {/*  */}
            <div className="hero min-h-screen bg-base-200 mt-6  mb-6">
                <div className=" flex-col p-8 lg:flex-row">
                    <img src={picture} className=" rounded-lg shadow-2xl" />
                    <div className="mt-4">
                        <h1 className="text-3xl m--2 font-bold">ToyName : {toyName}</h1>
                        <h1 className="text-2xl ">Seller : {seller}</h1>
                        <h1 className="text-2xl ">Price : {price}</h1>
                        <h1 className="text-2xl ">subCategory: {subCategory}</h1>
                        <h1 className="text-2xl ">availableQuantity: {availableQuantity}</h1>
                        <h1 className="text-2xl ">{rating}</h1>
                        <p className="py-6">{description}</p>
                        <Link to='/'> <button className="btn btn-primary mt-4">Back to</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ToyDetails;