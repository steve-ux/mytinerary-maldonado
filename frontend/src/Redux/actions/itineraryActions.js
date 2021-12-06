import axios from "axios";

const itineraryActions = {
  loadItineraries: (id) => {
    return (dispatch, getState) => {
      axios
        .get("http://localhost:4000/api/city/itinerary/" + id)
        .then((respuesta) =>
          dispatch({ type: "LOAD_ITINERARIES", payload: respuesta.data })
        );
    };
  },
};

export default itineraryActions;
