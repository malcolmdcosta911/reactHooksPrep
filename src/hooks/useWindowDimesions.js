import { useEffect, useState } from 'react';

export const useWindowDimesions = () => {

    const [width, setWidth] = useState(undefined);
    const [height, setHeight] = useState(undefined);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    },[]);


    const handleResize = () => {
       // console.log("handleResize");
         if (window && window?.innerHeight && window?.innerWidth) {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        }
    }

    return ({ width, height });
}