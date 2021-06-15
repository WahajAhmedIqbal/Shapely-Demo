import React from 'react';

// import { Container } from 'react-bootstrap';
import { HeaderComponent, BannerComponent, SeoSectionComponent, PortfolioComponent, ParallexEffectComponent, GallaryComponent } from '@components';


const Home = () => {
    return (
       <div>
           <HeaderComponent />
           <BannerComponent /> 
           <SeoSectionComponent />
           <PortfolioComponent />
           <ParallexEffectComponent />
           <GallaryComponent />
       </div>
    );
}

export default Home;