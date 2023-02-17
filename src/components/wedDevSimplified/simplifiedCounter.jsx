import React, { useState } from 'react';

const countInitial = () => {
    //only runs on first render
    console.log("countInitial");
    return 1;
}

const SimplifiedCounter = () => {

    const [count, setCount] = useState(()=>countInitial());

    const handleIncerement=()=>{
        setCount(count=>count +1);
    }


    const handleDecrement = () => {
        setCount(count => count - 1);
    }

 

    return (
        <div>
            <button onClick={handleIncerement}>+</button>
            <div>
                {count}
            </div>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

export default SimplifiedCounter;