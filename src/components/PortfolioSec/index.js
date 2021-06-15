import React from 'react';


import { Col, Container, Row, Button } from 'react-bootstrap';
import seoimg from '@asset/2.webp'

import './portfolioSec.css'

const Portfolio = () => {
    return (
        <Container fluid className='portfolio-main'>
            <Row className='Row'>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <h2 className='heading'>
                        Portfolio Section
                    </h2>
                    <p className='para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.
                    </p>
                    <Button>
                        READ MORE
                    </Button>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img src={seoimg} alt='Seo' style={{ "width": "100%" }} />
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;