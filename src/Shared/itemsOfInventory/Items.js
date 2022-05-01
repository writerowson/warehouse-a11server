import React from 'react';

const Items = ({ item }) => {
    const { img, name, price, supplier, description } = item
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
                <button className='btn btn-danger'>For Details</button>
            </div>
        </div >
    );
};

export default Items;