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

const generateKey = () =>{
  return Math.random().toString(36).replace('0.', '');
};

class App extends Component {

  

  state = {
    "addresses": [
      {
        "key": generateKey(),
        "firstName": "Cathy",
        "lastName": "Pierce",
        "birthday": "9/14/1996",
        "telephone": "200-910-8132"
      },
      {
        "key": generateKey(),
        "firstName": "Alfonso",
        "lastName": "Cooley",
        "birthday": "8/10/1973",
        "telephone": "200-657-9362"
      },
      {
        "key": generateKey(),
        "firstName": "Victor",
        "lastName": "Gordon",
        "birthday": "8/3/1970",
        "telephone": "200-661-9407"
      },
      {
        "key": generateKey(),
        "firstName": "Colleen",
        "lastName": "Wright",
        "birthday": "10/28/1967",
        "telephone": "200-250-7949"
      },
      {
        "key": generateKey(),
        "firstName": "James",
        "lastName": "Johnston",
        "birthday": "5/11/1972",
        "telephone": "200-645-3176"
      },
      {
        "key": generateKey(),
        "firstName": "Anna",
        "lastName": "Reyes",
        "birthday": "9/10/1975",
        "telephone": "200-707-8670"
      }
    ],

    "formFirstName":'',
    "formLastName":'',
    "formBirthday":'',
    "formTelephone":'',
  }
  


  deleteAddressHandler = (key) => {
    const addresses = [...this.state.addresses];
    let deleteIndex = addresses.findIndex((item)=>item.key===key);
    addresses.splice(deleteIndex,1);
    this.setState({addresses: addresses});
  }

  addAddressHandler = (event) => {
    event.preventDefault();

    const newAddress = {
      "key": generateKey(),
      "firstName": this.state.formFirstName,
      "lastName": this.state.formLastName,
      "birthday": this.state.birthday,
      "telephone": this.state.telephone
    }

    this.setState({addresses:[...this.state.addresses,newAddress]});
    this.setState({formFirstName:''});
    this.setState({formLastName:''})
    this.setState({formBirthday:''});
    this.setState({formTelephone:''})
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

       <Container>
          {/* display all the current address in states */}
        <ListAddresses 
              addresses={this.state.addresses}
              deleter={this.deleteAddressHandler}
        ></ListAddresses>

        <br></br>

        


          <Form onSubmit={this.addAddressHandler}>
            <Form.Row>
              
              <Col>
                <Form.Control 
                  placeholder="First name"
                  value={this.state.formFirstName}
                  onChange={(e) => this.setState({formFirstName: e.target.value})} />
              </Col>

              <Col>
                <Form.Control 
                placeholder="Last name"
                value={this.state.formLastName}
                onChange={(e) => this.setState({formLastName: e.target.value})} />
              </Col>
              
            </Form.Row>
            
            <Form.Row>
              
              <Col>
                <Form.Control 
                  placeholder="Birthday"
                  value={this.state.formBirthday}
                  onChange={(e) => this.setState({formBirthday: e.target.value})} />
              </Col>

              <Col>
                <Form.Control 
                placeholder="Telephone"
                value={this.state.formTelephone}
                onChange={(e) => this.setState({formTelephone: e.target.value})} />
              </Col>
              
            </Form.Row>


          <br></br>


            <Button type="submit" variant="warning" size="lg" block >
              Add new address
            </Button>
          </Form>

          <br></br>


       </Container>


      </div>
    );
  }
}

export default App;
