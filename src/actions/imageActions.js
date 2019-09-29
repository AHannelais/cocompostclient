import images from "../apis/articles&images";
import { CREATE_IMAGE, FETCH_IMAGES, DELETE_IMAGE, FETCH_IMAGE } from "./types";
export const createImage = content => async dispatch => {
  const response = await images.post("/images", content);
  dispatch({ type: CREATE_IMAGE, payload: response.data });
};
export const fetchImage = id => async dispatch => {
  const response = await images.get(`/images/${id}`);
  dispatch({ type: FETCH_IMAGE, payload: response.data });
};

export const fetchImages = () => async dispatch => {
  const response = await images.get("/images");
  dispatch({ type: FETCH_IMAGES, payload: response.data });
};
export const deleteImage = id => async dispatch => {
  await images.delete(`/images/${id}`);
  dispatch({ type: DELETE_IMAGE, payload: id });
};
