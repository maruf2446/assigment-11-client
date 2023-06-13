import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ToyCard from '../ToyCard';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';



const AllToys = () => {

    const toys = useLoaderData();


    return (
        <div>
            <h1 className='text-center text-primary text-4xl mt-12 mb-14'>AllToys:{toys.length} </h1>
            {
                toys.map(toy =>
                    <div className="card-body items-center text-center grid grid-cols-3 gap-2 mb-40">
                        <img src={toy.photo} alt="Shoes" className="rounded-xl" />
                        <h2 className="card-title">Name: {toy.name}</h2>
                        <p>Quantity: {toy.quantity}</p>
                        <p>price: {toy.price}</p>
                        <p>email: {toy.email}</p>
                        <p>category: {toy.category}</p>
                        <p>details: {toy.details}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Viw Details</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllToys;