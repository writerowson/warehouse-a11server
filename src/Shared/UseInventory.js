import React, { useEffect, useState } from 'react';


const UseInventory = () => {
    const [inventory, setinventory] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setinventory(data))
    }, [])
    return [inventory, setinventory]

};

export default UseInventory;