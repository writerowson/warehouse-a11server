
import React from 'react';
import { Carousel } from 'react-bootstrap';
import man1 from '../images/p1.png'
import woman from '../images/p2.png'
import man3 from '../images/p3.png'
const Opinion = () => {
    return (
        <Carousel style={{ backgroundColor: '#110001' }} className='container text-light text-center p-5 rounded'>
            <Carousel.Item className='text-center '>

                <div className=''>
                    <img
                        style={{ width: '102px', height: '102px', borderRadius: '70px' }}
                        src={man1}
                        alt="first slide"
                    />

                    <h5 style={{ color: '#ff4444 ' }}>Product manager</h5>
                    <p> To Contact : +9978608767</p>

                </div>
            </Carousel.Item>
            <Carousel.Item className='text-center '>

                <div className=''>
                    <img
                        style={{ width: '102px', height: '102px', borderRadius: '70px' }}
                        src={woman}
                        alt="second slide"
                    />

                    <h5 style={{ color: '#ff4444 ' }}>Owner</h5>
                    <p> To Contact : +9978448767</p>

                </div>
            </Carousel.Item>
            <Carousel.Item className='text-center '>

                <div className=''>
                    <img
                        style={{ width: '102px', height: '102px', borderRadius: '70px' }}
                        src={man3}
                        alt="Third slide"
                    />

                    <h5 style={{ color: '#ff4444 ' }}>Quality checker</h5>
                    <p> To Contact : +9912454657</p>

                </div>
            </Carousel.Item>

        </Carousel>
    );
};

export default Opinion;