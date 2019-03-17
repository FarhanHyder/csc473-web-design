import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const listAddresses = (props) => {
    const addresses = [...props.addresses];
    
    const listItems = addresses.map((item) =>
        <ListGroup.Item>
            <Card className="bg-light border rounded">
                <Card.Body className="text-left">
                <h5> {item.firstName} </h5>
                <p> {item.lastName} </p>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )

    return listItems;


}


export default listAddresses;