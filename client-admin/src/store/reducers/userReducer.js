import { ADMIN_LOGIN, REGISTER_ADMIN } from "../actions/actionType";

const initialState = {
  webtoken: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_LOGIN:
      return { webtoken: state.webtoken };
    case REGISTER_ADMIN:
      return {};
    default:
      return state;
  }
}

export default userReducer;
