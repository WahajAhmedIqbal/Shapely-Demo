import React from 'react';

// import { Container } from 'react-bootstrap';
import { HeaderComponent, BannerComponent, SeoSectionComponent, PortfolioComponent } from '@components';


const Home = () => {
    return (
       <div>
           <HeaderComponent />
           <BannerComponent /> 
           <SeoSectionComponent />
           <PortfolioComponent />
       </div>
    );
}

export default Home;