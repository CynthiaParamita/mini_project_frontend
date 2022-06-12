import { useState, useEffect } from 'react'
import { getWalletByID } from '../API/wallet_API';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.css'
 
const DetailWallet = () => {
    const [wallets, setWallet] = useState([]);
    const navigation = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getWalletById();
    }, []);
 
    const getWalletById = async () => {
        getWalletByID(id).then(function(response){
            setWallet(response.data.data);
    })
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
        <div className='DivHome'>
            <div style={myStyleDiv}>
            <h4>Wallet Detail</h4>
            { wallets.map((wallet, i) => (
                <div>
                <h7>ID: {wallet.id}</h7>
                <br></br>
                <h7>Income: {wallet.income}</h7>
                <br></br>
                <h7>Expenses: {wallet.expenses}</h7> 
                </div>
            ))}
            </div>
        </div>
    )
}
 
export default DetailWallet