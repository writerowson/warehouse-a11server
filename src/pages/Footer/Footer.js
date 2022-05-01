import React from 'react';
import { ImTwitter } from "react-icons/im"
import { ImYoutube } from "react-icons/im"
import { SiFacebook } from "react-icons/si"

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#110001' }} className=' relative-bottom text-center mt-5 p-3'>
            <p className='text-light '>
                Follow Us on <br /> <ImYoutube></ImYoutube>   <SiFacebook></SiFacebook>   <ImTwitter></ImTwitter> </p>
            <p className='text-light mt-5'>
                ©  2010-2022 PUre Perfume All rights reserved.</p>
        </div>
    );
};

export default Footer;