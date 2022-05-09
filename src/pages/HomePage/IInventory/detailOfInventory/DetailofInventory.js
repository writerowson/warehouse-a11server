import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DetailofInventory = () => {
    const { inventoryId } = useParams()
    const [inventory, setinventory] = useState({})
    useEffect(() => {

        const url = `https://salty-shore-69868.herokuapp.com/inventory/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setinventory(data))
    }, [inventoryId])



    return (
        <div>
            <div className=' container row d-flex mt-5 col-12'>
                <div className=' mb-5 p-2 col-lg-4 col-12 text-center '>
                    <img className=' rounded w-75' src={inventory.img} alt="" />
                </div>
                <div className='col-lg-8 col-12 '>
                    <h2>{inventory.name}</h2>
                    <p><b>Price: {inventory.price}</b>/piece</p>
                    <p><b>Quantity: </b>{inventory.quantity}s</p>
                    <p className='text-start'>{inventory.details}.</p>
                    <p><b>Supllier: </b> {inventory.supplier}</p>
                    <p>Contact Supllier: {inventory.phone}</p>
                    <button className='btn btn-danger align-items-center'>Delivered</button>

                </div>


            </div>
            <InputGroup className="mt-3 container w-75 text-light">
                <FormControl
                    placeholder="Stock Amount"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button className='btn btn-danger' variant="outline-success" id="button-addon2">
                    Restock
                </Button>
            </InputGroup>
        </div>
    );
};

export default DetailofInventory;