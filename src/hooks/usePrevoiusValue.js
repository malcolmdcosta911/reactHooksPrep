import { useEffect, useRef } from "react";

const usePrevoiusValue = (value) => {

    const previousValue = useRef(0);

    useEffect(()=>{
        previousValue.current = value;

    }, [value])

    return (previousValue.current);
}
 
export default usePrevoiusValue;