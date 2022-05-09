import React, { useEffect, useState } from 'react';


const UseInventory = () => {
    const [inventories, setinventories] = useState([])
    useEffect(() => {
        fetch('https://salty-shore-69868.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setinventories(data))
    }, [])
    return [inventories, setinventories]

};

export default UseInventory;