const initialState = {
  user: { email: "", img: "", name:"", },
  userLogged: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user":
      localStorage.setItem(
        "userLogged",
        JSON.stringify({ email: action.payload.email, img: action.payload.img, name: action.payload.name })
      );
      return {
        ...state,
        user: action.payload,
      };
    case "logOut":
      return {
        ...state,
        user: "",
      };
    default:
      return state;
  }
};
export default authReducer;
