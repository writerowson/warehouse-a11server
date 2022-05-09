
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
                    <h3 className='text-roboto text-danger'>Samuel Jhonson</h3>
                    <h5 >Product manager</h5>
                    <p> To Phone : +9978608767</p>
                    <p>To email: jsamuel@gmail.com</p>
                </div>
            </Carousel.Item>
            <Carousel.Item className='text-center '>
                <div className=''>
                    <img
                        style={{ width: '102px', height: '102px', border: '1px solid #110001', borderRadius: '70px' }}
                        src={woman}
                        alt="second slide"
                    />
                    <h3 className='text-roboto text-danger'>Wonda Lilen</h3>
                    <h5 >Owner</h5>
                    <p> To Phone : +9978448767</p>
                    <p>To email: wonda360@gmail.com</p>
                </div>
            </Carousel.Item>
            <Carousel.Item className='text-center '>
                <div className=''>
                    <img
                        style={{ width: '102px', height: '102px', border: '1px solid #110001', borderRadius: '70px' }}
                        src={man3}
                        alt="Third slide"
                    />
                    <h3 className='text-roboto text-danger'>Debt Bekar</h3>
                    <h5 >Quality checker</h5>
                    <p> To Phone : +9912454657</p>
                    <p>To email: dbekar@gmail.com</p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Opinion;