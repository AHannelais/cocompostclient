import { SIGN_IN, SIGN_OUT } from "./types";
export {
  createArticle,
  editArticle,
  fetchArticle,
  fetchArticles,
  deleteArticle,
} from "./articleActions";
export { createImage, deleteImage, fetchImages } from "./imageActions";
export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
