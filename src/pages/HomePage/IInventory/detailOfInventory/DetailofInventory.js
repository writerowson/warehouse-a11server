import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailofInventory = () => {
    const { id } = useParams()
    const [inventory, setinventory] = useState({})
    useEffect(() => {
        const url = `fakedata.json/${id}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setinventory(data))
    })


    return (
        <div>
            <h2>THis is detailL {id}</h2>
            <h3>{inventory.img}</h3>
            <h3>{inventory.mame}</h3>
        </div>
    );
};

export default DetailofInventory;