import React from 'react';
import banner from '../../../pages/images/bg.jpg'
import Opinion from '../../../pages/HomePage/Home/Opinion'
import UseInventory from '../../../Shared/UseInventory';
import Inventory from '../IInventory/itemsOfInventory/Inventory';
import Specialties from './Specialties';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai'

const Home = () => {
    const [inventories, setinventories] = UseInventory()
    const navigate = useNavigate()
    return (
        <div className='' >
            <div className=" text-light position-relative ">
                <img className=' w-100 d-block card-img' src={banner} alt="" />
                <div className='card-img-overlay bg-dark bg-opacity-50 text-center align-items-lg-end align-text-bottom'>
                    <h1 style={{ fontSize: '4rem' }} className=' mt-5  text-roboto '>Pure <span className='text-danger'>Perfume</span> </h1>
                    <p>Pure perfume is a warehouse of sensitive product like perfume. We collect, store and deliver. For more information. </p>
                    <button className='btn btn-danger '>Explore More</button>
                </div>

            </div>
            <div className='position-relative mb-5'>
                <h2 style={{ color: '#110001' }} className='container mt-5 font-roboto fs-1 text-center '>Our Best Collections</h2>
                <div className='row'>
                    {inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)}

                </div>
                <button onClick={() => navigate('/inventory')} type="button" className="btn btn-outline-none btn-link text-danger fw-bold position-absolute bottom-0 end-0 text-decoration-none">Manage Inventories <AiOutlineDoubleRight></AiOutlineDoubleRight></button>
            </div>

            <Specialties></Specialties>

            <div className=' text-center mt-5 position-relative'>
                {/* <img className='w-100' src={bg} alt="" /> */}
                <div className=''>
                    <h2 style={{ color: '#110001' }} className=' font-roboto fs-1  '>Our TeamMates</h2>
                    <Opinion></Opinion>
                </div>

                {/* <h2 style={{ color: '#110001' }} className=' font-roboto fs-1  mt-5 '>Get The Latest Deals</h2>
                <p style={{ color: '#110001' }} className=' font-roboto   '>30% off for first time Joining</p>
                <InputGroup className="px-5 mb-3 ">
                    <FormControl
                        placeholder="Email Address"
                        aria-label="Email Address"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant=" text-light bg-danger" id="button-addon2">
                        Subscribe
                    </Button>

                </InputGroup> */}


            </div>

        </div>

    );
};
export default Home;