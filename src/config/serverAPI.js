
import axios from 'axios'

const backendUrl = process.env.REACT_APP_FE_URL

console.log('Backend URL:', backendUrl);


const serverAPI =  axios.create({
    baseURL: `${backendUrl}`,
    // baseURL: `http://192.168.1.34:8000`,
  });

  
export default serverAPI;