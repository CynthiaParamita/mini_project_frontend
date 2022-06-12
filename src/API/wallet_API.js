import axios from 'axios'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_Wallet_URL,
    headers: {
        'Authorization': localStorage.getItem('Token') 
      }
  });

export function getAllWallet(){
    return axiosClient.get('/get/all');
}

export function getWalletByID(id){
    return axiosClient.get(`/get/detail/${id}`);
}
 
export function insertWallet(data){
    return axiosClient.post('/insert', data);
}

export function updateWallet(data){
    return axiosClient.post('/update', data);
}
