import React, { Component } from 'react';
import './App.css';

// react-bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar className="bg-dark justify-content-between" variant="dark">
        <Navbar.Brand href="#home">Address Book</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Type here" className=" mr-sm-2" />
            <Button type="submit" variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        


      </div>
    );
  }
}

export default App;
