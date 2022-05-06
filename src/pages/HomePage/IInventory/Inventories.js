import React from 'react';
import Items from './itemsOfInventory/Inventory';

import UseInventory from '../../../Shared/UseInventory';
import Inventory from './itemsOfInventory/Inventory';

const Inventories = () => {
    const [inventories, setinventories] = UseInventory()
    return (
        <div className=''>
            <h2 style={{ color: '#110001' }} className='container mt-5 font-roboto fs-1 text-center '>Our  Collections</h2>
            <div className='row'>

                {inventories.map(inventory => <Inventory
                    key={inventory._id}
                    inventory={inventory}
                ></Inventory>)}

            </div>
        </div >
    );
};

export default Inventories;
