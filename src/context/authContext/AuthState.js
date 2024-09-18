import React, { useEffect, useReducer } from "react";
import { useQueryClient } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import setAuthToken from "../../utils/setAuthToken";
import { LOGIN_SET, LOGIN_UNSET } from "../ActionTypes";

const AuthState = ({ children }) => {
  const InitialState = {
    isLogin: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    user: localStorage.getItem("user_obj")
      ? JSON.parse(localStorage.getItem("user_obj"))
      : null,
  };

  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [state, dispatch] = useReducer(AuthReducer, InitialState);

  const Login = (data) => {
    setAuthToken(data?.token);
    localStorage.setItem("user_obj", JSON.stringify(data?.user_info));
    localStorage.setItem("token", data?.token);
    dispatch({ type: LOGIN_SET, payload: data?.user_info });
    navigate("/");
    return true;
  };

  const Logout = () => {
    setAuthToken(null);
    dispatch({ type: LOGIN_UNSET });
    navigate("/");
    location.pathname = "/";
    location.search = "";
    queryClient.removeQueries();
  };

  useEffect(() => {
    setAuthToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) queryClient.removeQueries();
  }, [localStorage.getItem("token")]);

  return (
    <AuthContext.Provider
      value={{
        Login,
        Logout,
        isLogin: state.isLogin,
        user: state?.user,
        token: state?.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
