import React from 'react';
import banner from '../../../images/b.png'
import Items from '../../../Shared/itemsOfInventory/Items';
import UseInventory from '../../../Shared/UseInventory';
const Home = () => {
    const [inventory, setInventory] = UseInventory()
    return (

        <div >
            <img className='w-100  ' src={banner} alt="" />

            <div className='container'>
                <h2 style={{ color: '#110001' }} className='container font-roboto fs-1 text-center '>Our Best Collections</h2>
                <div className='row'>
                    {inventory.map(item => <Items
                        key={item._id}
                        item={item}></Items>)}

                </div>
            </div>

        </div>

    );
};
export default Home;