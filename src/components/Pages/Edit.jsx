
import toast from 'react-hot-toast';
import { useLoaderData } from "react-router-dom";

const Edit = () => {

    const updateLoader = useLoaderData();
    console.log(updateLoader);

    const {_id, description, price,  } = updateLoader;

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target
        const price = form.price.value;
        const description = form.description.value;
        const category = form.category.value;
        const update = {price, description, category} 
        console.log(update);

        fetch(`https://toy-marketplace-server-murex.vercel.app/myToys/${_id}`,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(update)
        })

        .then(res =>res.json())
        .then(data =>{
           console.log(data)
           if(data.modifiedCount>0){
            toast.success("update success fully !!")
            form.reset();

           }
        })

    }

    return (
        <div className="lg:mx-64 my-20">
            <h1 className=" text-3xl uppercase text-center">Update a Toy</h1>
            <form onSubmit={handleUpdate} className="space-y-4">
                <h1 className="text-start">Price</h1>
                <input type="text" className="border p-2 w-full rounded-md" name="price" defaultValue={price} placeholder="type your price" /> <br />
                <h1>Description</h1>
                <input type="text" className="border p-2 w-full rounded-md" name="description" defaultValue={description} placeholder="type your description" /> <br />
                <h1>Category</h1>
                <input type="text" className="border p-2 w-full rounded-md" defaultValue={category} name="category" placeholder="type your category" /> <br />
               <div className=" text-center">
               <input type="submit" className="btn btn-block uppercase btn-primary " value="update" />
               </div>

            </form>
        </div>

    );
};

export default Edit;