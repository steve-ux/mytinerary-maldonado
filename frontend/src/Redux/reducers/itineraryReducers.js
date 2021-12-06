const initialState = {
  itinerarios: [],
  success: true,
};

const itinerariosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ITINERARIES":
      return {
        ...state,
        itinerarios: action.payload.respuesta,
      };
    default:
      return state;
  }
};
export default itinerariosReducer;
