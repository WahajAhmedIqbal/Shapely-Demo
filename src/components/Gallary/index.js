import React from 'react';

import { Row, Col, Image } from 'react-bootstrap';
import  proImages from '@asset/pro1.jpg'
import  proImages1 from '@asset/pro2.jpeg'
import  proImages2 from '@asset/pro3.jpg'


import './gallery.css'


const Gallery = () => {
    return (
        <div>
            <h3>Our latest Project</h3>
            <h4>Our latest Project, you love them</h4>
            <Row >
                <Col>
                    <img src={proImages} alt='project1'  />
                </Col>
                <Col>
                    <img src={proImages1} alt='project1' />
                </Col>
                <Col>
                    <img src={proImages2} alt='project1' />
                </Col>
                {/* <Col>
                    <h2>
                        this is paragraph i need to check
                    </h2>
                </Col>
                <Col>
                    <h2>
                        this is paragraph i need to check
                    </h2>
                </Col>
                <Col>
                    <h2>
                        this is paragraph i need to check
                    </h2>
                </Col>
                <Col>
                    <h2>
                        this is paragraph i need to check
                    </h2>
                </Col>
                <Col>
                    <h2>
                        this is paragraph i need to check
                    </h2>
                </Col>
                <Col>
                    <h2>
                        this is paragraph i need to check
                    </h2>
                </Col> */}
            </Row>
            <h2>
                test`
            </h2>
            <h2>
                test`
            </h2>
            <h2>
                test`
            </h2>

            <h2>
                test`
            </h2>
            <h2>
                test`
            </h2>
            <h2>
                test`
            </h2>
        </div>
);
}

export default Gallery;