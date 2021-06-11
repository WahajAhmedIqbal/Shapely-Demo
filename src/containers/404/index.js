import React from 'react';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    return (
        <h1>
            Page Not Found
            <Button variant="warning">
                <Link to='/'>
                    Home    
                </Link>    
                
            </Button> 
        </h1>

    );
}

export default PageNotFound;