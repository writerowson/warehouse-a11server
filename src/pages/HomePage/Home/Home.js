import React from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import banner from '../../../images/bg.jpg'


import Opinion from '../../../pages/HomePage/Home/Opinion'
import UseInventory from '../../../Shared/UseInventory';
import Inventory from '../IInventory/itemsOfInventory/Inventory';
import Specialties from './Specialties';


const Home = () => {
    const [inventories, setinventories] = UseInventory()
    return (
        <div className='' >
            <Card className=" text-danger position-relative ">
                <Card.Img className='opacity-10 ' src={banner} alt="Card image" />
            </Card>
            <div className=''>
                <h2 style={{ color: '#110001' }} className='container mt-5 font-roboto fs-1 text-center '>Our Best Collections</h2>
                <div className='row'>
                    {inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)}

                </div>
            </div>
            <Specialties></Specialties>

            <div className='container text-center'>
                <h2 style={{ color: '#110001' }} className=' font-roboto fs-1  '>Our TeamMates</h2>
                <Opinion></Opinion>
                <h2 style={{ color: '#110001' }} className=' font-roboto fs-1  mt-5 '>Get The Latest Deals</h2>
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

                </InputGroup>


            </div>

        </div>

    );
};
export default Home;