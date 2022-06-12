import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Stack,Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react'
import { getAllWallet } from '../API/wallet_API';
import { Link } from "react-router-dom";
import './all.css'
const Main = () => {
    const [wallets, setWallet] = useState([]);

    useEffect(() => {
        getWallet();
    },[]);
 
    const getWallet = async () => {
        getAllWallet().then(function(response){
            setWallet(response.data.data);
        });
    }

    const styleTitle={
        margin:"3%",
        position: "absolute",
        top:"5%",
        left: "65%",
        transform: "translate(-50%,-50%)"
    }
    const styleNewButton={
        margin:"3%",
        position: "absolute",
        top:"15%",
        left: "65%",
        transform: "translate(-50%,-50%)"
    }
    const styleTable={
        margin:"3%",
        width:"60%",
        textAlign:"center",
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    }
    const styleButton={
        paddingLeft:"25%",
    }
    return (
        <div >
            <Container style={styleTitle}><h1>Simple Wallet</h1></Container>
            <Container style={styleNewButton}><Link to="/addWallet"><Button className="primary">New Wallet</Button></Link></Container>
            <Container>
            <Table striped style={styleTable}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {wallets.map((wallet, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{ wallet.id}</td>
                            <td style={styleButton}>
                            <Stack direction="horizontal" gap={3} class="col-md-12 text-center">
                            <Link to ={`/editWallet/${wallet.id}`}><Button className="primary" style={styleButton}>Edit</Button></Link>
                            <Link to ={`/detailWallet/${wallet.id}`}><Button className="primary" style={styleButton}>Detail</Button></Link>
                            </Stack>
                            </td>
                        </tr>
                    )) }
                </tbody>
                </Table>
            </Container>
            
        </div>
    )
}

export default Main;