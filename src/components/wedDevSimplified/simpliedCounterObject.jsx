import { Fragment, useState } from "react";

const SimplifiedCounterObject = () => {

    const [state, setState] = useState(() => { return ({ count: 0, name: 'Malcolm' }) });

    const handleIncrement = () => {
        setState((state) => {
            return (
                {
                    ...state,
                    count: state.count + 1,
                    name: state.name + "1"
                }
            );
        });
    }

    const { count, name } = state;

    return (
        <Fragment>
            <button onClick={handleIncrement}>+</button>
            <div>
                {name}
            </div>
            <div>
                {count}
            </div>
        </Fragment>
    );
}

export default SimplifiedCounterObject;