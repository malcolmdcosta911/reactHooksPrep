import { useCallback, useEffect, useMemo, useState } from "react";

const Memo = () => {


    const [color, setcolor] = useState(false);
    const [number, setNumber] = useState(0);

    const displayArr = useMemo(() => {
        let count = 0
        for (let i = 0; i <= 1000000; i++) {
            count += i;
        }
        return [number || "empty", number + 1];
    }, [number]
    )

    // const displayArr = useCallback(() => {
    //     let count = 0
    //     for (let i = 0; i <= 1000000; i++) {
    //         count += i;
    //     }
    //     return [number || "empty", number + 1];
    // }, [number]
    // )

    useEffect(() => {
        console.log("updated")
    }, [displayArr])



    return (

        <div>
            <input
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            {/* <div>
                {
                displayArr()?.map(n => <div key={n}>{n}</div>)
                }
            </div> */}
            <div>
                {displayArr}
            </div>
            <div
                style={{ background: color ? "red" : "blue", color: "white" }}>
                <button onClick={() => setcolor((color) => !color)}> toggle color</button>
            </div>
        </div>
    );
}

export default Memo;