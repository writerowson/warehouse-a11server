import React, { useEffect, useState } from 'react';


const UseInventory = () => {
    const [inventories, setinventories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setinventories(data))
    }, [])
    return [inventories, setinventories]

};

export default UseInventory;