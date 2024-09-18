
import axios from 'axios'


const serverAPI =  axios.create({
    baseURL: `${process.env.REACT_APP_FE_URL}`,
    // baseURL: `http://192.168.1.34:8000`,
  });
  
export default serverAPI;