import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const listAddresses = (props) => {
    const addresses = [...props.addresses];
    
    const listItems = addresses.map((item) =>
        <ListGroup.Item>
            <Card className="bg-light border rounded">
                <Card.Body className="text-left">
                    <Container>
                        <Row>
                            <Col>
                                <h5> 
                                    <span className="small">FirstName </span>
                                     {item.firstName} 
                                </h5>

                            </Col>
                            <Col>
                                <h5> 
                                    <span className="small">LastName </span>
                                     {item.lastName} 
                                </h5>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5> 
                                    <span className="small">Birthday </span>
                                     {item.birthday} 
                                </h5>

                            </Col>
                            <Col>
                                <h5> 
                                    <span className="small">Telephone </span>
                                     {item.telephone} 
                                </h5>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>

                <Card.Footer className="text-muted">
                    {/* <Button variant="danger" size="sm" onClick={props.deleter.bind(null,item.key)}>Delete</Button> */}
                    <Button key={item.key}
                        variant="danger" size="sm"
                        onClick={props.deleter.bind(null,item.key)}>Delete
                    </Button>
                </Card.Footer>
            </Card>
        </ListGroup.Item>
    )

    return listItems;


}


export default listAddresses;