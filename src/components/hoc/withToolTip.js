import React, { useState } from 'react';


function withToolTip(Component) {

    const WithToolTip = (props) => {

        const [showToolTip, setToolTip] = useState(false);

        return (
            <div
                onMouseOver={() => setToolTip(true)}
                onMouseOut={() => setToolTip(false)}
            >
                <Component
                    showToolTip={showToolTip}
                    {...props}
                />
            </div>
        );
    }

    return WithToolTip;
}

export default withToolTip;