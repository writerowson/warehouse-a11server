import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailofInventory = () => {
    const { id } = useParams()
    const [inventory, setinventory] = useState({})
    useEffect(() => {
        const url = `fakedata.json/${id}`
        // const url = `http://localhost:5000/inventory/${id}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setinventory(data))
    }, [])


    return (
        <div className='text-center'>
            <h2>THis is Product Details </h2>
            <h3>{inventory.name}</h3>
            <h3>{inventory.email}</h3>
        </div>
    );
};

export default DetailofInventory;