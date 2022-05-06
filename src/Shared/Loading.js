import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '300px' }} className='w-100 d-flex justify-content-center mt-5'>
            <Spinner animation="border" variant="danger" />
        </div>
    );
};

export default Loading