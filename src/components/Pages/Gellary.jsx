// import React from 'react';
import science1 from '../../assets/science/science1.jpg'
import science2 from '../../assets/science/science2.jpg'
import science3 from '../../assets/science/science3.jpg'
import science4 from '../../assets/science/science4.jpg'
import science5 from '../../assets/science/science5.jpg'
import science6 from '../../assets/science/science6.jpg'
import science7 from '../../assets/science/science7.jpg'
import science8 from '../../assets/science/science8.jpg'
import science9 from '../../assets/science/science9.jpg'

const Gellary = () => {
    return (
        <div className='py-4'>
            <h2 className='text-3xl text-center font-bold py-2'> Gallery Science <span className='text-orange-500'> Fair</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='hover:-translate-y-6'><img src={science1} className='rounded-2xl p-2' alt="science kits" /></figure>

                </div>
                <div className="card w-96 bg-base-100   shadow-xl">
                    <figure className='hover:translate-y-6'><img src={science2} className='rounded-2xl p-2' alt="science kits" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='hover:-translate-y-6'><img src={science3} className='rounded-2xl p-2' alt="science kits" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='hover:translate-x-6'><img src={science4} className='rounded-2xl p-2' alt="science kits" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='hover:-translate-y-6'><img src={science5} className='rounded-2xl p-2' alt="science kits" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='hover:translate-x-6'><img src={science6} className='rounded-2xl p-2' alt="science kits" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='hover:translate-y-6'><img src={science7} className='rounded-md p-2' alt="science kits" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='hover:-translate-x-6'><img src={science8} className='rounded-md p-2' alt="science kits" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className='hover:-translate-y-6'><img src={science9} className='rounded-md p-2' alt="Science kits" /></figure>

                </div>

            </div>
        </div>
    );
};

export default Gellary;