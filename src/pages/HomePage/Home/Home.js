import React from 'react';
import banner from '../../../images/banner.jpg'
const Home = () => {
    return (

        <div sticky="top">
            <img style={{ height: '800px' }} className='w-100 ' src={banner} alt="" />
            <h1 className='container font-roboto fs-1 text-center text-danger'>Feel the Magic </h1>


        </div>

    );
};
export default Home;