import React, { useEffect, useState } from 'react';
import UseInventory from '../../../Shared/UseInventory';
import Inventory from './itemsOfInventory/Inventory';
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const Inventories = () => {
    const [inventories, setinventories] = UseInventory()
    const [pageCount, setPAgeCount] = useState(0)
    const [pages, setPages] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://salty-shore-69868.herokuapp.com/inventoryCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count
                const pages = Math.ceil(count / 10)
                setPAgeCount(pages)
            })
    })

    return (
        <div className=''>
            <h2 style={{ color: '#110001' }} className='container mt-5 font-roboto fs-1 text-center '>Our  Collections</h2>
            <div className='row'>

                {inventories.map(inventory => <Inventory
                    key={inventory._id}
                    inventory={inventory}
                ></Inventory>)}
            </div>
            <div className="text-center">
                <button onClick={() => navigate('/additems')} type="button" className="btn btn-success">Add new Items <AiOutlineDoubleRight></AiOutlineDoubleRight></button>
            </div>

            <div>
                {[...Array(pageCount).keys()].map(number => <button onClick={() => setPages(number)} className={pages === number ? 'ms-2 btn border border-danger' : 'ms-2 border border-none'}>{number + 1}</button>)
                }
            </div>
        </div >
    );
};

export default Inventories;
