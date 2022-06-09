import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Container, Stack } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.css'

const home = () => {
  const myStyleDiv = {
    backgroundColor: "#90CAF9",
    paddingTop:"10%",
    padding: "50px",
    fontFamily: "Arial",
    top:"150px",
    borderRadius: "25px",
  };
  const myStyleButton={
    width:"230px",
    marginLeft:"-25%"
  }
  return (
    
    <div className='bg'>
      <div className='DivHome'>
      <Stack gap={3} className="col-md-5 mx-auto" style={myStyleDiv}>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <h3>Simple Wallet Application</h3><br></br>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <Stack gap={2} className="col-md-5 mx-auto">
        <Link to="/login"><Button variant="primary"style={myStyleButton}>Login</Button></Link>
        <Link to="/register"><Button variant="primary"style={myStyleButton}>Register</Button></Link>
        </Stack>
      </div>
      </Stack>
      </div>
    </div>
    
    
  //   <Container className="mx-auto pl-5" borde>
  //   <Form>
  //       <h3 align="center">Simple Wallet Application</h3>
  //     <div class="col-md-4 mb-3" align="center">'
  //     <Button variant="primary" type="login">
  //       Login
  //     </Button>
  //     <Button variant="primary" type="sign up">
  //       Sign Up
  //     </Button>
  //     </div>
  // </Form>
  // </Container>
)};

export default home;