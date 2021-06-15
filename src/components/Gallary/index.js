import React from 'react';

import { Row, Col, Image } from 'react-bootstrap';
import holder from '@asset/2.webp'

import './gallery.css'


const Gallery = () => {
    return (
        <div>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={holder} roundsed />
                </Col>
            </Row>
        </div>
);
}

export default Gallery;