import React from 'react';
import { Button, Card, Form, FormControl, InputGroup } from 'react-bootstrap';
import banner from '../../../images/banner.jpg'
import Items from '../../../Shared/itemsOfInventory/Items';
import Opinion from '../../../Shared/Opinion';
import UseInventory from '../../../Shared/UseInventory';

const Home = () => {
    const [inventory, setInventory] = UseInventory()
    return (
        <div className='' >
            <Card className=" text-white ">
                <Card.Img className='opacity-10 ' src={banner} alt="Card image" />
                <Card.ImgOverlay className='text-center align-items-center mt-5 d-lg-none'>
                    <h1 className='fw-1' >Pure Perfume</h1>
                    <p>Magic in air</p>
                </Card.ImgOverlay>
            </Card>
            <div className=''>
                <h2 style={{ color: '#110001' }} className='container mt-5 font-roboto fs-1 text-center '>Our Best Collections</h2>
                <div className='row'>
                    {inventory.map(item => <Items
                        key={item._id}
                        item={item}></Items>)}

                </div>
            </div>
            <div className='container'>
                <h2 style={{ color: '#110001' }} className=' font-roboto fs-1 text-center '>Our Partner's Opinions</h2>
                <Opinion></Opinion>
                <h2 style={{ color: '#110001' }} className=' font-roboto fs-1 text-center mt-5 '>Get The Latest Deals</h2>
                <p style={{ color: '#110001' }} className=' font-roboto  text-center '>30% off for first time shopping</p>
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