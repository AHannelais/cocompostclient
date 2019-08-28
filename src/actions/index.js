import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_ARTICLE,
  FETCH_ARTICLES,
  FECTH_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE
} from './types'
import articles from '../apis/articles'
import history from '../history'
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}
export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}
export const createArticle = content => async (dispatch, getState) => {
  const response = await articles.post('/articles', { ...content })
  dispatch({ type: CREATE_ARTICLE, payload: response.data })
  history.push('/')
}
export const fetchArticles = () => async dispatch => {
  const response = await articles.get('/articles')
  dispatch({ type: FETCH_ARTICLES, payload: response.data })
}
export const fetchArticle = id => async dispatch => {
  const response = await articles.get(`/articles/${id}`)
  dispatch({ type: FECTH_ARTICLE, payload: response.data })
}
export const editArticle = (id, content) => async dispatch => {
  const response = await articles.patch(`/articles/${id}`, content)
  dispatch({ type: EDIT_ARTICLE, payload: response.data })
  history.push('/')
}
export const deleteArticle = id => async dispatch => {
  await articles.delete(`/articles/${id}`)
  dispatch({ type: DELETE_ARTICLE, payload: id })
  history.push('/')
}
