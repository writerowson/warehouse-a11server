import React from 'react';
import bg from '../../../images/banner.jpg'
import { MdLocalConvenienceStore } from "react-icons/md"
import { GiHandTruck } from "react-icons/gi"
import { ImTruck } from "react-icons/im"

const Specialties = () => {
    return (
        <div className=" text-light position-relative ">
            <img className=' w-100 d-block card-img' src={bg} alt="" />
            <div className='card-img-overlay bg-dark bg-opacity-50 text-center position-absolute align-items-lg-center '>
                <div>
                    <h1 className=' text-roboto mt-lg-5 mb-lg-5'>Our Specialities </h1>
                    <div className=' row align-items-center  mt-lg-5'>
                        <div className='col-lg-4 col-12'>
                            <div className='d-flex align-items-center '>
                                <h1 style={{ fontSize: '3rem' }} className=' me-3 text-warning '> <MdLocalConvenienceStore ></MdLocalConvenienceStore></h1>
                                <h3>Storage</h3>
                            </div>
                            <p className='text-start'>We provide storage sensitive products like perfume for long- or short-term storage</p>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className='d-flex align-items-center '>
                                <h1 style={{ fontSize: '3rem' }} className=' me-3 text-warning '> <GiHandTruck ></GiHandTruck></h1>
                                <h3>Distribution</h3>
                            </div>
                            <p className='text-start'>DEPOT management system and reporting capabilities allow us to fulfill all your orders</p>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className='d-flex align-items-center '>
                                <h1 style={{ fontSize: '3rem' }} className=' me-3 text-warning '> <ImTruck ></ImTruck></h1>
                                <h3>Delivery</h3>
                            </div>
                            <p className='text-start'>Whether it is overnight or during the day, across town , we have the experience you seek</p>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Specialties;