import React, { useEffect, useState } from 'react';
import Items from '../../../Shared/itemsOfInventory/Items';

import UseInventory from '../../../Shared/UseInventory';


const Inventory = () => {
    const [inventory, setInventory] = UseInventory()

    return (
        <div className='container'>
            <h2>Our Collections</h2>
            <div className='row'>

                {inventory.map(item => <Items
                    key={item._id}
                    item={item}></Items>)}

            </div>
        </div >
    );
};

export default Inventory;