import React, { Fragment, useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { useWindowDimesions } from '../hooks/useWindowDimesions';


const TrialCounter = () => {

    const [count, setCount] = useState(1);
    const [name, setName] = useState("");

    useDocumentTitle(`${name} has clicked ${count} times`);

    console.log(useWindowDimesions());

    const handleIncrement = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
    }


    const handleDecrement = () => {
        setCount(count => count - 1);
    }
    return (
        <Fragment>
            <h3>Counter current value {count}</h3>
            <button onClick={handleIncrement}>+</button>
            <button disabled={!count} onClick={handleDecrement}>-</button>
            <input  type ="text" onChange={(e) => setName(e.target.value)} />
        </Fragment>
    );
}

export default TrialCounter;