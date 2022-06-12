import { useState } from 'react'
import {loginUser} from "../API/user_API"
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import './all.css'
 
const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const data = {email: email,password: password}
    
    const LoginUser = async (e) => {
        e.preventDefault();
        loginUser(data).then(function(response){
            localStorage.setItem("Token",response.data.token)
        });
        navigate("/main");
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
            <Form onSubmit={ LoginUser } style={myStyleDiv}>
            <h3>Login</h3><br></br>

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
                Login
            </Button>
            </Form>
        </div> 
    )
}
 
export default LoginUser