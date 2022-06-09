import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import './all.css'
 
const AddWallet = () => {
    const [income, setIncome] = useState('');
    const [expenses, setExpenses] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('Token')

    const saveWallet = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/wallet/insert',{
            income: income,
            expenses: expenses
        },{
            headers: {
              'Authorization': `${token}` 
            }
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
            <Form onSubmit={ saveWallet } style={myStyleDiv}>
            <h3>New Wallet</h3><br></br>

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
 
//     return (
//         <div>
//             <form onSubmit={ saveWallet }>
//                 <div className="field">
//                     <label className="label">Income</label>
//                     <input 
//                         className="input"
//                         type="number"
//                         placeholder="Income"
//                         value={ income }
//                         onChange={ (e) => setIncome(e.target.value) }
//                     />
//                 </div>

//                 <div className="field">
//                     <label className="label">Expenses</label>
//                     <input 
//                         className="input"
//                         type="number" 
//                         placeholder="Expenses"
//                         value={ expenses }
//                         onChange={ (e) => setExpenses(e.target.value) }
//                     />
//                 </div>
 
//                 <div className="field">
//                     <button className="button is-small is-info">Add Wallet</button>
//                 </div>
//             </form>
//         </div>
//     )
// }
 
export default AddWallet