const axios = require("axios");
const Swal = require('sweetalert2');

const authActions = {
  register: (User) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post("http://localhost:4000/api/auth/signUp", {...User});
        if (user.data.success && !user.data.error) {
          localStorage.setItem('token', user.data.response.token);
          dispatch({ type: 'user', payload: user.data.response });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You successfully registered!',
            timer: 3000,
          })
        } else {
          return { errores: user.data.errores };
        }
      } catch (error) {}
    };
  },
  logIn: (userLogin) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post("http://localhost:4000/api/auth/logIn", {...userLogin});
        if (user.data.success && !user.data.error) {
          localStorage.setItem('token', user.data.response.token);
          dispatch({ type: 'user', payload: user.data.response });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You successfully logged!',
            timer: 2000,
          })
        } else {
          const error = user.data.error
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: error,
            text: 'Something went wrong!',
            timer: 3000,
          })
        }
      } catch (error) {}
    };
  },
  
  isAuth:(token)=>{
    return async (dispatch, getState)=>{
      try {
        const user = await axios.get("http://localhost:4000/api/user/auth", {
        headers: {
          Authorization:'Bearer ' + token
        },
        })
        dispatch({type:'user', payload: {token, name: user.data.name, img: user.data.img}})

      } catch(error){
        return dispatch ({type: 'logOut'})
      }
    }
  },
   logOut: () => {
    return async (dispatch, getState)=>{
      Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'You have successfully unlogged!',
      showConfirmButton: false,
      timer: 1500
    })
    dispatch({type: 'logOut'})
    localStorage.removeItem("token")
    }
  }
}

module.exports = authActions;