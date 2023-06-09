import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
            <figure><img className='h-60 w-full rounded-lg ' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="flex justify-between items-center ">
                    <div>
                        <p className='font-bold text-red-500 text-lg'>Price:{price}</p>
                    </div>

                    <div>
                        <Link to={`/book/${_id}`}><button> <FaArrowRight className='text-red-500 text-lg'></FaArrowRight> </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;