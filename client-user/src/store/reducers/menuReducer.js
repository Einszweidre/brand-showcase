import { FETCH_MENU, FETCH_MENU_DETAIL } from "../actions/actionType";

const initialState = {
  menus: [],
  menu: {},
};

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MENU:
      return {
        ...state,
        menus: action.payload,
      };
    case FETCH_MENU_DETAIL:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
}

export default menuReducer;
