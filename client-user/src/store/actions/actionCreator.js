import { FETCH_MENU, FETCH_MENU_DETAIL } from "./actionType";

// const baseUrl = "http://localhost:3000";
const baseUrl = "https://brand-api.einszweidre.com";

export const fetchMenuSuccess = (payload) => {
  return {
    type: FETCH_MENU,
    payload: payload,
  };
};

export const fetchMenuDetailSuccess = (payload) => {
  return {
    type: FETCH_MENU_DETAIL,
    payload: payload,
  };
};

export const fetchMenus = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/public/menu", {
        headers: {
          webtoken: localStorage.getItem("webtoken"),
        },
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(fetchMenuSuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMenuDetail = (slug) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/public/menu/" + slug);
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(fetchMenuDetailSuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};
