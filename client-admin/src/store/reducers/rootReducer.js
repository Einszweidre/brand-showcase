import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import categoryReducer from "./categoryReducer";
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  category: categoryReducer,
  image: imageReducer,
});

export default rootReducer;
