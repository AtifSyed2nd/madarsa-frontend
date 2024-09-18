import { LOGIN_SET, LOGIN_UNSET } from "../ActionTypes";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SET:
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };
    case LOGIN_UNSET:
      localStorage.removeItem("token");
      localStorage.removeItem("user_obj");
      return {
        ...state,
        isLogin: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
