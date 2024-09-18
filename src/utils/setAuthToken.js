import axios from "axios";
import serverAPI from "../config/serverAPI";

const setAuthToken = (token) => {
  if (token) {
    serverAPI.defaults.headers.common["x-access-token"] = `${token}`;
  } else {
    delete serverAPI.defaults.headers.common["x-access-token"];
    delete axios.defaults.headers.common["x-access-token"];
  }
};

export default setAuthToken;
