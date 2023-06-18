import { FETCH_IMAGE } from "../actions/actionType";

const initialState = {
  images: [],
};

function imageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGE:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
}

export default imageReducer;
