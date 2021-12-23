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
  addOrRemoveLike: (id, token) => {
    return async () => {
      try {
        const response = await axios.put(
          `http://localhost:4000/api/itinerary/like/${id}`,
          {},
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        return response;
      } catch (error) {}
    };
  },
  addComment: (id, comment, token) => {
    return async () => {
      try {
        const response = await axios.put(
          `http://localhost:4000/api/itinerary/comments/${id}`,{comment, type: "addComment"},
          {
            headers: {
              Authorization: "Bearer " + token},
          }
        );
        if (response.data.success) {
          return {
            success: true,
            response: response.data.response,
          };
        } else {
          throw new Error();
        }
      } catch (error) {
        return {
          success: false,
          response: error,
        };
      }
    };
  },

  deleteComment: (itineraryId, commentId, token) => {
    return async (dispatch) => {
      try {
        let response = await axios.put(
          `http://localhost:4000/api/itinerary/comments/${itineraryId}`,
          { commentId, type: "deleteComment" },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.data.success) {
          return {
            success: true,
          };
        } else {
          throw new Error();
        }
      } catch (error) {
        return {
          success: false,
          response: error,
        };
      }
    };
  },
  editComment: (commentId, comment, token) => {
    return async () => {
      try {
        let response = await axios.put(
          `http://localhost:4000/api/itinerary/comments/${commentId}`,
          { comment, type: "editComment" },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.data.success) {
          return {
            success: true,
            response: response.data.response,
          };
        } else {
          throw new Error();
        }
      } catch (error) {
        return {
          success: false,
          response: error,
        };
      }
    };
  },
};

export default itineraryActions;
