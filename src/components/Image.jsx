import React from 'react';

const Image = ({alt, ...props}) => {
    return (  
        <img {...props} alt={alt}/>
    );
}
 


export default Image;