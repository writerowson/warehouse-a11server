import React, { useEffect, useState } from 'react';
import Items from '../../../Shared/itemsOfInventory/Items';

import UseInventory from '../../../Shared/UseInventory';


const Inventory = () => {
    const [inventory, setInventory] = UseInventory()

    return (
        <div className=''>
            <h2 style={{ color: '#110001' }} className='container mt-5 font-roboto fs-1 text-center '>Our  Collections</h2>
            <div className='row'>

                {inventory.map(item => <Items
                    key={item._id}
                    item={item}>

                </Items>)}

            </div>
        </div >
    );
};

export default Inventory;