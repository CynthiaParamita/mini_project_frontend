import axios from 'axios'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_User_URL
  });


export function loginUser(data){
    return axiosClient.post('/login', data);
}
 
export function registerUser(data){
    return axiosClient.post('/register', data);
}
