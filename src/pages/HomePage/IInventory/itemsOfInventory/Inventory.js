import React from 'react';
import { useNavigate } from 'react-router-dom';
const Inventory = ({ inventory }) => {
    const { img, name, price, supplier, description, _id, phone, quantity } = inventory
    const navigate = useNavigate()

    const showDetails = id => {
        navigate(`/inventory/${_id}`)
    }

    return (
        <div style={{ color: '#110001' }} className='col-lg-2 col-12 text-center '>
            <div className='shadow rounded mb-5 p-2 bg-light '>
                <img style={{
                    height: '15rem', width: '10rem'
                }} className=' rounded' src={img} alt="" />
                <h5>{name}</h5>
                <p><b>Price: {price}</b>/piece</p>
                <p><b>Quantity: </b>{quantity}s</p>
                <p className='text-start fs-6'>{description}</p>
                <p><b>Supllier: </b> {supplier}</p>

                <button onClick={() => showDetails(_id)} className='btn btn-danger'>Stock Update</button>
            </div>
        </div >
    );
};

export default Inventory;

