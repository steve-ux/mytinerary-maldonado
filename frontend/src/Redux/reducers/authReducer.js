const initialState = {
  // user: { token: "", email: "", img: "", name:"", },
  token: null,
  name: null,
  img: null,
  _id: null,
  errores: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("name", action.payload.name);
      localStorage.setItem("img", action.payload.img);
      localStorage.setItem("_id", action.payload._id);
      return {
        token: action.payload.token,
        name: action.payload.name,
        img: action.payload.img,
        _id: action.payload._id,
      };
    case "logOut":
      return {
        ...state,
        token: null,
        name: null,
        img: null,
        _id: null,
      };
    default:
      return state;
  }
};
export default authReducer;
