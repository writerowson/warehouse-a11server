import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup as form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailofInventory = () => {
    const { inventoryId } = useParams()
    const [inventory, setinventory] = useState({})
    const navigate = useNavigate()
    const { name, img, details, price, quantity, supplier, phone } = inventory

    useEffect(() => {
        const url = `https://salty-shore-69868.herokuapp.com/inventory/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setinventory(data))
    }, [inventoryId])

    const handleQuantity = e => {
        e.preventDefault();
        if (e.target.quantity.value <= 0) {
            return alert('Invalid number')
        }
        const name = inventory.name;
        const email = inventory.email;
        const image = inventory.image;
        const supplier = inventory.supplier;
        const price = inventory.price;
        const quantity = JSON.parse(inventory?.quantity) + JSON.parse(e.target.quantity.value);

        const description = inventory?.description;
        const sold = inventory?.sold ? inventory?.sold : 0;

        const updatedinventory = { name, email, image, supplier, price, quantity, description, sold };
        setinventory(updatedinventory);

        const url = `https://salty-shore-69868.herokuapp.com/inventory/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedinventory)

        })
            .then(res => res.json())
            .then(data => console.log(data))
        e.target.reset();
        return toast('Items Restocked!')

    }

    const handleDelivered = () => {
        const name = inventory?.name;
        const email = inventory?.email;
        const image = inventory?.image;
        const supplier = inventory?.supplier;
        const price = inventory?.price;
        const quantity = JSON.parse(inventory?.quantity) !== 0 ? JSON.parse(inventory?.quantity) - 1 : JSON.parse(inventory?.quantity);
        const description = inventory?.description;
        const sold = quantity >= 0 ? (inventory?.sold ? inventory?.sold + 1 : 0 + 1) : inventory?.sold;

        const updatedinventory = { name, email, image, supplier, price, quantity, description, sold };
        setinventory(updatedinventory);

        const url = `https://salty-shore-69868.herokuapp.com/inventory/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedinventory)

        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <div className=''>
            <div className=' container row d-flex mt-5 col-12'>
                <div className=' mb-5 p-2 col-lg-4 col-12 text-center '>
                    <img className=' rounded w-75' src={img} alt="" />
                </div>
                <div className='col-lg-8 col-12 '>
                    <h2>{name}</h2>
                    <p className='text-start'>{details}.</p>
                    <p><b>Price: </b>{price}/piece</p>
                    <p><b>Available Quantity: </b>{quantity}s</p>
                    {/* <p><b>Minimun Order Quantity: </b>10 pieces</p> */}
                    <p><b>Supllier: </b> {supplier}</p>
                    <p><b>Contact Supllier:</b> {phone}</p>
                    {
                        quantity !== 0 ? <button onClick={handleDelivered} className='btn btn-danger align-items-center'>Delivered</button>
                            : <button className='btn btn-danger align-items-center'>Sold Out</button>
                    }

                </div>
            </div>
            <div className='mb-5'>
                <h3 className='text-center'>Restock The Items</h3>
                <form onSubmit={handleQuantity} className="mt-3 mb-5 container d-flex w-25 text-light  ">
                    <FormControl
                        type="number"
                        name="quantity"
                        placeholder="Stock Amount"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button className='btn btn-success fw-bold w-full' variant="outline-light" id="button-addon2">
                        Restock
                    </Button>
                </form>
            </div>
            <ToastContainer></ToastContainer>
            <div className='mt-5 mb-5 position-relative'>
                <button onClick={() => navigate('/inventory')} type="button" className="btn btn-outline-none btn-link text-danger fw-bold position-absolute bottom-0 end-0 text-decoration-none">Manage Inventories <AiOutlineDoubleRight></AiOutlineDoubleRight></button>
            </div>
            {/* updatiing quantity */}
            {/* <div className='px-3 inventoryDeatail-part'>
                <form onSubmit={handleQuantity} className='w-100'>
                    <img src={bg} className='img-fluid w-75 mx-auto d-flex' alt="" />
                    <h3>Restock The Items</h3>
                    <div className='w-100 d-flex gap-2'>
                        <input type="number" name="quantity" placeholder={'Quantity'} />
                    </div>
                    <input type="submit" style={{ color: 'white' }} value="Restock Item" />
                </form>
                <button onClick={() => navigate('/inventory')} className='manage-btn me-0'>Manage Inventories</button>
            </div> */}
        </div>
    );
};

export default DetailofInventory;