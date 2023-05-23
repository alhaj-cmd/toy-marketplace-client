import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AddToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // alert(JSON.stringify(data));
        fetch("http://localhost:5000/postToy", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            })
        console.log(watch(data));
    }

    return (
        <div className='w-full lg:px-32  py-12 '>
            <form className='bg-indigo-400 shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span className='text-red-500'>This field is required</span>}
                <div>
                    <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Photo URL</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' name='photo url' placeholder="image link"
                        type="url"

                        {...register("picture")}

                    />
                    <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Name</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' name='name' type="text" placeholder='Type Your Name'
                        {...register("name")}

                    />


                    <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Seller Name</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={user?.displayName}
                        {...register("postedBy")}
                        placeholder="Seller loggin Name"
                        type="text"
                    />
                    <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Seller E-mail</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={user?.email}
                        {...register("postedBy")}
                        placeholder="Seller loggin E-mail"
                        type="email"
                    />

                    <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Sub Category</label>

                    <select className="shadow appearance-none border rounded w-full  py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("subCategory")}>
                        <option value="Math Toys">Math Toys</option>
                        <option value="Science Toys">Science Toys</option>
                        <option value="Language Toys">Language Toys</option>

                    </select>


                    <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Price</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' name='price' type="text" placeholder='price'
                        {...register("price")}

                    />
                    <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Rating</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' name='rating' type="text" placeholder='rating'
                        {...register("rating")}

                    />

                    <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Availabe Quantity</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name='quantity' placeholder='Quantity'
                        {...register("quantity")}

                    />
                    <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Details Description</label>
                    <textarea className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="textArea" name='description' placeholder='Description'
                        {...register("description")}

                    />


                </div>


                <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3'>Submit</button>
            </form>
        </div>

    );
};

export default AddToy;