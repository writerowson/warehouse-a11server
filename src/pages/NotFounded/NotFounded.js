import React from 'react';
import error from '../../images/404.png'
const NotFounded = () => {
    return (
        <div className='container text-center '>

            <h2 style={{ color: '#110001' }} className=' font-roboto fs-1 '>Page Not Founded</h2>
            <img className='w-50 rounded ' src={error} alt="" />
        </div>
    );
};

export default NotFounded;