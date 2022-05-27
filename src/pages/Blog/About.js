import React from 'react';

import { MdLocalConvenienceStore } from "react-icons/md"
import { GiHandTruck } from "react-icons/gi"
import { ImTruck } from "react-icons/im"

const About = () => {
    return (
        <div className='container text-center'>

            <h1 className='text-danger mt-5' >Our Specialities </h1>
            <p>Pure perfume is a warehouse of sensitive product like perfume. We collect, store and deliver. </p>
            <div className="   mt-5 ">
                <div className=' justify-content-center '>
                    <div className=' row align-items-center  '>
                        <div className='col-lg-4 col-12'>
                            <div className='d-flex align-items-center '>
                                <h1 className=' me-3 text-danger '> <MdLocalConvenienceStore ></MdLocalConvenienceStore></h1>
                                <h5>Storage</h5>
                            </div>
                            <p className='text-start'>We provide storage sensitive products like perfume for long- or short-term storage</p>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className='d-flex align-items-center '>
                                <h1 className=' me-3 text-danger '> <GiHandTruck ></GiHandTruck></h1>
                                <h5>Distribution</h5>
                            </div>
                            <p className='text-start'>DEPOT management system and reporting capabilities allow us to fulfill all your orders</p>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className='d-flex align-items-center '>
                                <h1 className=' me-3 text-danger '> <ImTruck ></ImTruck></h1>
                                <h5>Delivery</h5>
                            </div>
                            <p className='text-start'>Whether it is overnight or during the day, across town , we have the experience you seek</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;