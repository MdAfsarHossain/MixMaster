// import React from 'react';
import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div>
            {/* <h2>Single Page Error</h2> */}
            {/* <h2>{error.message}</h2> */}
            <h2>there something wrong...</h2>
        </div>
    );
};

export default SinglePageError;