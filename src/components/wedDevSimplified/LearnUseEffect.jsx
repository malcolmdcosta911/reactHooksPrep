import { useEffect, useRef, useState } from "react";
import usePrevoiusValue from "../../hooks/usePrevoiusValue";

const LearnUseEffect = () => {

    const countOfRender=useRef(0);
    const prevNameRef = useRef("");

    const inputRef = useRef();
    const [name, setName] = useState('');
    const [count, setCount]=useState(0);
    const prevoiusHook = usePrevoiusValue(name);

    console.log(prevoiusHook);


    useEffect(() => {

        //correct order for checking prevstate
        // if (prevNameRef.current !== name ){
        //     setCount(count => count+1);
        // }

        // console.log("before reassign", name, prevNameRef.current);
        // prevNameRef.current = name;
        // console.log("dont use after reassign", name, prevNameRef.current);

        //console.log("ref");    
        countOfRender.current=countOfRender.current+1;

        return () => {
            // console.log("cleanup");
        }

    }, [name]);


    const focus = () => {
        //console.log(inputRef.current);
        inputRef.current.focus();
    }



    return (
        <>
            <div>
                <input
                    ref={inputRef}
                    value={name}
                    onChange={(e) => {
                        prevNameRef.current = name;
                        setName(e.target.value);
                         }}
                />
            </div>
            <div>My name is {name} and it used to be {prevNameRef.current} </div>
            <div>My name is {name} and it used to be  {prevoiusHook}</div>

            <div>{countOfRender.current}</div>
            {/* <div>{prevNameRef.current}</div> */}
            {/* <div>{count}</div> */}

            <div>
                <button onClick={focus}>Focus</button>
            </div>
        </>
    );
}

export default LearnUseEffect;