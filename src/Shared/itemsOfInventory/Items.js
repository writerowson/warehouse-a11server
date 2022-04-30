import React from 'react';

const Items = ({ item }) => {
    const { img, name, price, supplier, description } = item
    return (
        <div className='col-lg-4 col-12 '>
            <div className='shadow rounded mb-5 p-3'>
                <img className='w-100 rounded' src={img} alt="" />
                <h4>{name}</h4>
                <h5>Price : {price}</h5>
                <p>{description}</p>
                <p>Supllier : {supplier}</p>
                <button className='btn btn-danger'>For Details</button>
            </div>
        </div>
    );
};

export default Items;