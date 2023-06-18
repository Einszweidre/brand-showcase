import {
  ADMIN_LOGIN,
  REGISTER_ADMIN,
  FETCH_MENU,
  FETCH_MENU_DETAIL,
  CREATE_MENU,
  UPDATE_MENU,
  DELETE_MENU,
  FETCH_CATEGORY,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_IMAGE,
  CREATE_IMAGE,
} from "./actionType";

const baseUrl = "http://localhost:3000";

export const loginSuccess = (payload) => {
  return {
    type: ADMIN_LOGIN,
    payload: payload,
  };
};

export const registerAdminSuccess = (payload) => {
  return {
    type: REGISTER_ADMIN,
    payload: payload,
  };
};

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

export const createMenuSuccess = (payload) => {
  return {
    type: CREATE_MENU,
    payload: payload,
  };
};

export const updateMenuSuccess = (payload) => {
  return {
    type: UPDATE_MENU,
    payload: payload,
  };
};

export const deleteMenuSuccess = (payload) => {
  return {
    type: DELETE_MENU,
    payload: payload,
  };
};

export const fetchCategorySuccess = (payload) => {
  return {
    type: FETCH_CATEGORY,
    payload: payload,
  };
};

export const createCategorySuccess = (payload) => {
  return {
    type: CREATE_CATEGORY,
    payload: payload,
  };
};

export const updateCategorySuccess = (payload) => {
  return {
    type: UPDATE_CATEGORY,
    payload: payload,
  };
};

export const deleteCategorySuccess = (payload) => {
  return {
    type: DELETE_CATEGORY,
    payload: payload,
  };
};

export const fetchImageSuccess = (payload) => {
  return {
    type: FETCH_IMAGE,
    payload: payload,
  };
};

export const createImageSuccess = (payload) => {
  return {
    type: CREATE_IMAGE,
    payload: payload,
  };
};

export const loginAdmin = (formData) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      console.log(data.data.webtoken);
      localStorage.setItem("webtoken", data.data.webtoken);
      dispatch(loginSuccess(data.data.webtoken));
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerAdmin = (formData) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(loginSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMenus = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/admin/menu", {
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

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/admin/category", {
        headers: {
          webtoken: localStorage.getItem("webtoken"),
        },
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(fetchCategorySuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMenuDetail = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/admin/menu/" + id, {
        headers: {
          webtoken: localStorage.getItem("webtoken"),
        },
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(fetchMenuDetailSuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createMenu = (formData) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/admin/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          webtoken: localStorage.getItem("webtoken"),
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(createMenuSuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateMenu = (formData, id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/admin/menu/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          webtoken: localStorage.getItem("webtoken"),
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(updateMenuSuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteMenu = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/admin/menu/" + id, {
        method: "DELETE",
        headers: {
          webtoken: localStorage.getItem("webtoken"),
        },
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(deleteMenuSuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createCategory = (formData) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/admin/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          webtoken: localStorage.getItem("webtoken"),
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(createCategorySuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCategory = (formData, id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/admin/category/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          webtoken: localStorage.getItem("webtoken"),
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(updateCategorySuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/admin/category/" + id, {
        method: "DELETE",
        headers: {
          webtoken: localStorage.getItem("webtoken"),
        },
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(deleteCategorySuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchImage = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/admin/image", {
        headers: {
          webtoken: localStorage.getItem("webtoken"),
        },
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(fetchImageSuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createImage = (formData) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/admin/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          webtoken: localStorage.getItem("webtoken"),
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Unexpected Error");
      let data = await response.json();
      dispatch(createImageSuccess(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};
