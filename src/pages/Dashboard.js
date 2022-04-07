import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import CustomCard from '../components/CustomCard';

const Dashboard = () => {

    return (
        
        <>
        <div className='mt-4'>
            <Container>
                <Row>
                    <Col className='mb-4'>
                        <CustomCard variant='primary' cardText='Event List' btnText='Details' urlText='event' />   
                    </Col>
                    <Col>
                        <CustomCard variant='primary' cardText='Friend List' btnText='Details' urlText='friends' />   
                    </Col>
                </Row>
            </Container>
        </div>
        </>
        
    );
}

export default Dashboard;