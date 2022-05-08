
import React from 'react';
import { Carousel } from 'react-bootstrap';
import man1 from '../../../images/partner/p1.png'
import woman from '../../../images/partner/p2.png'
import man3 from '../../../images/partner/p3.png'
const Opinion = () => {
    return (
        <Carousel style={{ color: '#110001' }} className='  text-center p-5 rounded'>
            <Carousel.Item className='text-center '>
                <div className=''>
                    <img
                        style={{ width: '102px', height: '102px', border: '1px solid #110001', borderRadius: '70px' }}
                        src={man1}
                        alt="first slide"
                    />
                    <h5 >Product manager</h5>
                    <p> To Contact : +9978608767</p>
                </div>
            </Carousel.Item>
            <Carousel.Item className='text-center '>
                <div className=''>
                    <img
                        style={{ width: '102px', height: '102px', border: '1px solid #110001', borderRadius: '70px' }}
                        src={woman}
                        alt="second slide"
                    />
                    <h5 >Owner</h5>
                    <p> To Contact : +9978448767</p>
                </div>
            </Carousel.Item>
            <Carousel.Item className='text-center '>
                <div className=''>
                    <img
                        style={{ width: '102px', height: '102px', border: '1px solid #110001', borderRadius: '70px' }}
                        src={man3}
                        alt="Third slide"
                    />
                    <h5 >Quality checker</h5>
                    <p> To Contact : +9912454657</p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Opinion;