import { Button } from 'bootstrap';
import React from 'react';
import { FormControl } from 'react-bootstrap';

const AddItems = () => {
    return (
        <div className='text-center mt-5 p-5'>
            <h2 style={{ color: '#110001' }} className=' font-roboto fs-1  '>Add Items</h2>

            <label for="basic-url" class="form-label">Item Image URL</label>
            <div class="input-group mb-3 w-50 align-middle mx-auto">
                <input type="text" class="form-control px-5" id="basic-url" placeholder='https://example.com/PFdXrxG/' aria-describedby="basic-addon3" />
                <button className='btn btn-success  w-full'>Item Added</button>
            </div>

            {/* <form className="mt-3 mb-5 container d-flex w-25 text-light  ">
                <FormControl
                    type="number"
                    name="quantity"
                    placeholder="Stock Amount"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button className='btn btn-success fw-bold w-full' variant="outline-light" id="button-addon2">
                    Restock
                </Button>
            </form> */}
        </div>
    );
};

export default AddItems;