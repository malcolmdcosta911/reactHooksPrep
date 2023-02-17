import React, { Fragment, useEffect, useState } from "react";

const Button = ({ name, onClick }) => {
    return (
        <div>
            <button onClick={() => onClick(name)}>{name}</button>
        </div>
    );

}

const UseEffectTrial = () => {

    const [resource, setResource] = useState("posts");

    console.log("re render");

    useEffect(() => {
        console.log("Runs after return clean up", resource);

        return () => {
            console.log("clean up runs first");
        }

    }, [resource]);

    const handleName = (name) => {
        setResource(name);
    }

    return (
        <Fragment>

            <Button
                name="posts"
                onClick={handleName}
            />
            <Button
                name="comments"
                onClick={handleName}
            />
            <Button
                name="photos"
                onClick={handleName}
            />
            {resource}
        </Fragment>
    );
}

export default UseEffectTrial;