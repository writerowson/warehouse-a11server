import React from 'react';

const Spinner = () => {
    return (
        <div style={{ height: '300px' }} className='w-100 d-flex justify-content-center mt-5'>
            <Spinner animation="border" variant="danger" />
        </div>
    );
};

export default Spinner;