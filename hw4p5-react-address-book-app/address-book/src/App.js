import React, { Component } from 'react';
import './App.css';
import ListAddresses from './ListAddresses/ListAddresses.js';

// react-bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

class App extends Component {

  state = {
    "addresses": [
      {
        "firstName": "Cathy",
        "lastName": "Pierce",
        "birthday": "9/14/1996",
        "telephone": "200-910-8132"
      },
      {
        "firstName": "Alfonso",
        "lastName": "Cooley",
        "birthday": "8/10/1973",
        "telephone": "200-657-9362"
      },
      {
        "firstName": "Victor",
        "lastName": "Gordon",
        "birthday": "8/3/1970",
        "telephone": "200-661-9407"
      },
      {
        "firstName": "Colleen",
        "lastName": "Wright",
        "birthday": "10/28/1967",
        "telephone": "200-250-7949"
      },
      {
        "firstName": "James",
        "lastName": "Johnston",
        "birthday": "5/11/1972",
        "telephone": "200-645-3176"
      },
      {
        "firstName": "Anna",
        "lastName": "Reyes",
        "birthday": "9/10/1975",
        "telephone": "200-707-8670"
      }
    ]
  }

  

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

        <ListAddresses addresses={this.state.addresses}>

        </ListAddresses>
        

      </div>
    );
  }
}

export default App;
