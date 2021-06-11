import React from 'react';

import { Container } from 'react-bootstrap';
// import BannerImg from '@asset/banner.jpg'


import './Banner.css'

const Banner = () => {
    return (
        // <Container fluid className='container1'>
            <div className='BannerImg'>
               <h1 className='Banner-Heading'>
                We Change Everythings
                </h1> 
                    
                {/* <img src={BannerImg} alt='Banner' style={{'width': '100%', 'height': '100vh'}} /> */}
            </div>
        // </Container>
    );
}

export default Banner;