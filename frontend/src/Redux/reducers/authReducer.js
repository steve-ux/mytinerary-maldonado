const initialState = {
  token: null,
  img: null,
  name: null,
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
        img: action.payload.img,
        _id: action.payload._id,
        name: action.payload.name,
      };
    case "logOut":
      return {
        ...state,
        token: null,
        img: null,
        _id: null,
        name: null,
      };
    default:
      return state;
  }
};
export default authReducer;
