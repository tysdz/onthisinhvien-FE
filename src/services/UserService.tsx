import axios from "axios";

import setAuthToken from "../utils/setAuthToken"

const isAuthenticated = () => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken;
  };

const register = (username: string, password: string) => {
    return axios.post('http://localhost:5000/api/auth/register', { username, password });
};

// const login = (username: string, password: string) => {
//     return axios.post('http://localhost:5000/api/auth/login', { username, password});
// }

const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      
      if (response.data.success){
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("userId", response.data.user._id);
      }
      return response.data;
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Login failed' };
    }
  };

const logout =  () => {
    localStorage.removeItem('accessToken');
};

const getInfor = async () => {
    const accessToken = localStorage.getItem('accessToken');
  
  if (accessToken) {
    setAuthToken(accessToken);
  }
  const response =  await axios.get('http://localhost:5000/api/infor');
  return response.data;
}

const putInfor = async (nameUser : string, email : string, phoneNumber : string) =>{
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken){
        setAuthToken(accessToken);
    }
    const userId =   localStorage.getItem('userId')
    const response = await axios.put(`http://localhost:5000/api/infor/${userId}`);
    return response.data;
}
export {isAuthenticated ,register, login, logout, getInfor };
