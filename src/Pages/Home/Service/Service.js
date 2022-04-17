import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {name,services,price,img} = service;
    const navigate = useNavigate();
    const handleCheckOut = () =>{
        navigate('/checkout');
    }
    return (
        <div className='col-lg-4 col-sm-12 col-md-6'>
            <div >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>${price}</Card.Title>
            <Card.Text>{services}</Card.Text>
            <Button onClick={handleCheckOut} variant="primary">Checkout</Button>
        </Card.Body>
        </Card>
            </div>
            
        </div>
    );
};

export default Service;