import React, { useEffect, useState } from 'react';
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
        <div className='text-center'>
            <h2>THis is Product Details : {inventoryId} </h2>
            <h2>THis is Product Name : {inventory.name} </h2>

            <h3> {inventory.price}</h3>
        </div>
    );
};

export default DetailofInventory;