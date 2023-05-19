import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AddToy = () => {
const {user} = useContext(AuthContext);
const { register, handleSubmit, watch, formState: {errors}} = useForm();
const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(watch(data));
}

    return (
        <div className="" >
     
     
             <>
    <div className='w-full  py-12 '>
        <form className='bg-indigo-400 shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
        {errors.exampleRequired && <span className='text-red-500'>This field is required</span>}
           <div>
           <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Photo URL</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline'  placeholder="image link"
              type="url"
              defaultValue="https://t4.ftcdn.net/jpg/03/69/30/13/240_F_369301377_m9bYnAWociiiglHRkk9tcMjgo4KT586h.jpg"
           
            {...register("image")}
            
            /> 
             <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Type Your Name'
            {...register("name")}
            
            /> 
         
           
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Seller Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={user?.name}
              {...register("postedBy")}
              placeholder="Name"
              type="text"
            />
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Seller E-mail</label>
             <input
              className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={user?.email}
              {...register("postedBy")}
              placeholder="E-mail"
              type="email"
            />
            
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Sub Category</label>
         
              <select className="shadow appearance-none border rounded  py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("category")}>
              <option value="Math Toys">Math Toys</option>
              <option value="Science Toys">Science Toys</option>
              <option value="Language Toys">Language Toys</option>
              
            </select>
          
          
           <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Price</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='price'
            {...register("category")}
            
            />
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Rating</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='rating'
            {...register("category")}
            
            />
         
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Availabe Quantity</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Quantity'
            {...register("category")}
            
            />
            <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'>Details Description</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Description'
            {...register("category")}
            
            />
           

           </div>
        

            <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3'>Submit</button>
        </form>
    </div>
    </>
       
        </div>
    );
};

export default AddToy;