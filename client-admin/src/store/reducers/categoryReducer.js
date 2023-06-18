import { FETCH_CATEGORY } from "../actions/actionType";

const initialState = {
  categories: [],
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}

export default categoryReducer;
