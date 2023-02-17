import React, { useEffect, useState } from 'react';



const CleanUp = () => {

    const [msg, setMessage] = useState("");

    useEffect(() => {
        let timer = setTimeout(() => { setMessage("Hi There") }, 2000);

        return () => {
            clearTimeout(timer);
        }
    })

    return (<h1>After 2 secs msg {msg}</h1>);
}

export default CleanUp;