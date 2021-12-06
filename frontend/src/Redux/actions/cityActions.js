import axios from "axios";

const citiesActions = {
  fetchCities: () => {
    return (dispatch, getState) => {
      axios
        .get("http://localhost:4000/api/cities")
        .then(respuesta =>
          dispatch({ type: "FETCHCITIES", payload: respuesta.data })
        );
    };
  },
  filtrar: (cities, value) => {
    return (dispatch, getState) => {
      dispatch({ type: "filtro", payload: { cities, value } });
    };
  },
  fetchUnaCity: (id, props) => {
    return (dispatch, getState) => {
      axios
        .get('http://localhost:4000/api/city/'+id)
        .then((respuesta) =>
          dispatch({ type: "FETCH_UNA_CITY", payload: respuesta.data })
        )
    };
  },
};

export default citiesActions;
