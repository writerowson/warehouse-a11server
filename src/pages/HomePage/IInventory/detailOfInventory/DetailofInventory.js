import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailofInventory = () => {
    const { _id } = useParams()
    const [inventory, setinventory] = useState({})
    useEffect(() => {
        const url = `fakedata.json/${_id}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setinventory(data))
    })


    return (
        <div>
            <h2>THis is detailL {_id}</h2>
            <h3>{inventory.name}</h3>
            <h3>{inventory.email}</h3>
        </div>
    );
};

export default DetailofInventory;