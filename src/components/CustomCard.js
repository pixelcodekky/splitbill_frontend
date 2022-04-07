import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const CustomCard = ({cardText,variant,btnText,urlText}) => {
    const navigate = useNavigate();
    
    const routeHandler = () => {
        navigate(`/${urlText}`);
    }

    return(
        <Card style={{width: '18rem'}} className='shadow'>
            <Card.Body>
                <Card.Text>
                    {cardText}
                </Card.Text>
                <Button color="inherit" variant={variant} onClick={routeHandler}>{btnText}</Button>
            </Card.Body>
        </Card>
    );
}

export default CustomCard;