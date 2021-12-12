const axios = require("axios");

const authActions = {
  register: (User) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post("http://localhost:4000/api/auth/signUp", {...User});
        console.log(user)
        if (user.data.success && !user.data.error) {
          localStorage.setItem("token", user.data.response.token);
          dispatch({ type: "user", payload: user.data.response });
        } else {
          return { errores: [{ message: user.data.error }] };
        }
      } catch (error) {}
    };
  },
  logIn: (email, password, google) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post("http://localhost:4000/api/auth/logIn", {
          email,
          password,
          google,
        });
        if (user.data.success && !user.data.error) {
          localStorage.setItem("token", user.data.response.token);
          dispatch({
            type: "user",
            payload: { user: user.data.response.email },
          });
        } else {
          alert(user.data.error);
        }
      } catch (error) {
        console.error(error);
      }
    };
  },
};

module.exports = authActions;