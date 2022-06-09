import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.css'

const AddUser = () => {
    const [full_name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
 
    const saveUser = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/user/register',{
            full_name: full_name,
            email: email,
            password: password
        });
        navigate("/login");
    }

    const myStyleDiv = {
    backgroundColor: "#90CAF9",
    paddingTop:"10%",
    padding: "50px",
    fontFamily: "Arial",
    borderRadius: "25px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
 
    return (
        <div className="DivHome">
            <Form onSubmit={ saveUser } style={myStyleDiv}>
            <h3>Register</h3><br></br>
            <Form.Group className="mb-3" >
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    placeholder="Enter full name"
                    className="input"
                    type="text"
                    value={ full_name }
                    onChange={ (e) => setFullName(e.target.value) } />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    className="input"
                    type="email"
                    placeholder= "Enter Email"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) } />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    className="input"
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) } />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
            </Form>
        </div> 
    )
}
 
export default AddUser

