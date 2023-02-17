import React from 'react';

const NotFound = () => {
    console.log(localStorage.getItem('bgcolor'));  
    localStorage.removeItem('bgcolor');
    return ( <h2>Not Found</h2> );
}
 
export default NotFound;