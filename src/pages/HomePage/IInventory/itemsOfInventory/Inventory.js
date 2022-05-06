import React from 'react';
import { useNavigate } from 'react-router-dom';
const Inventory = ({ inventory }) => {
    const { img, name, price, supplier, description, _id } = inventory
    const navigate = useNavigate()
    const showDetails = () => {
        navigate('/inventory/' + _id)
    }
    return (
        <div style={{ color: '#110001' }} className='col-lg-2 col-12 text-center'>
            <div className='shadow rounded mb-5 p-2  '>
                <img style={{
                    height: '15rem', width: '10rem'
                }} className=' rounded' src={img} alt="" />
                <h5>{name}</h5>
                <p><b>Price : {price}</b></p>
                <p className='text-start'>{description}</p>
                <p><b>Supllier :</b> {supplier}</p>
                <button onClick={showDetails} className='btn btn-danger'>For Details</button>
            </div>
        </div >
    );
};

export default Inventory;

