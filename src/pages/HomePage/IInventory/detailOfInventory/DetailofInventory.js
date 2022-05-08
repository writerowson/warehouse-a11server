import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DetailofInventory = () => {
    const { inventoryId } = useParams()
    const [inventory, setinventory] = useState({})
    useEffect(() => {

        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setinventory(data))
    }, [inventoryId])


    return (
        <div className=' container row d-flex mt-5 col-12'>
            <div className=' mb-5 p-2 col-lg-4 col-12 text-center '>
                <img className=' rounded w-75' src={inventory.img} alt="" />
            </div>
            <div className='col-lg-8 col-12 '>
                <h2>{inventory.name}</h2>
                <p><b>Price : {inventory.price}</b>/piece</p>
                <p><b>Quantity :</b>{inventory.quantity}</p>
                <p className='text-start'>{inventory.description}</p>
                <p><b>Supllier :</b> {inventory.supplier}</p>
                <p>Contact Supllier : {inventory.phone}</p>
                <button className='btn btn-danger'>Delivered</button>
            </div>
        </div>
    );
};

export default DetailofInventory;