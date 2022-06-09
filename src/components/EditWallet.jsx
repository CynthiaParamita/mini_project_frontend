import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import './all.css'
 
const EditWallet = () => {
    const [ID, setID] = useState('');
    const [income, setIncome] = useState('');
    const [expenses, setExpenses] = useState('');
    const navigation = useNavigate();
    const { id } = useParams();
    const token = localStorage.getItem('Token')

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/wallet/update',{
            id: ID,
            income: income,
            expenses: expenses
        },{
            headers: {
              'Authorization': `${token}` 
            }
        });
        navigation("/main");
    }
 
    useEffect(() => {
        getWalletbyID();
    }, []);
 
    const getWalletbyID = async () => {
        const response = await axios.get(`http://localhost:4000/wallet/get/detail/${id}`,{
            headers: {
              'Authorization': `${token}` 
            }
        });
        setID(response.data.data[0].id);
        setIncome(response.data.data[0].income);
        setExpenses(response.data.data[0].expenses);
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
            <Form onSubmit={ updateProduct } style={myStyleDiv}>
            <h3>Edit Wallet</h3><br></br>
            <Form.Group className="mb-3" >
                <Form.Label>ID</Form.Label>
                <Form.Control 
                    className="input"
                    type="number"
                    value={ ID }
                    onChange={ (e) => setID(e.target.value) }
                    disabled />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Income</Form.Label>
                <Form.Control 
                    className="input"
                    type="number"
                    placeholder= "Enter Income"
                    value={ income }
                    onChange={ (e) => setIncome(e.target.value) } />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Expenses</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Enter Expenses"
                    className="input"
                    value={ expenses }
                    onChange={ (e) => setExpenses(e.target.value) } />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div> 
    )
    }
 
export default EditWallet