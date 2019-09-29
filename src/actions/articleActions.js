import articles from '../apis/articles&images'
import history from '../history'
import {
  CREATE_ARTICLE,
  EDIT_ARTICLE,
  FETCH_ARTICLE,
  FETCH_ARTICLES,
  DELETE_ARTICLE
} from './types'
export const createArticle = content => async dispatch => {
  const response = await articles.post('/articles', content)
  dispatch({ type: CREATE_ARTICLE, payload: response.data })
  history.push('/admin')
}
export const fetchArticles = () => async dispatch => {
  const response = await articles.get('/articles')
  dispatch({ type: FETCH_ARTICLES, payload: response.data })
}
export const fetchArticle = id => async dispatch => {
  const response = await articles.get(`/articles/${id}`)
  dispatch({ type: FETCH_ARTICLE, payload: response.data })
}

export const editArticle = (id, content) => async dispatch => {
  const response = await articles.patch(`/articles/${id}`, content)
  dispatch({ type: EDIT_ARTICLE, payload: response.data })
  history.push('/admin')
}
export const deleteArticle = id => async dispatch => {
  await articles.delete(`/articles/${id}`)
  dispatch({ type: DELETE_ARTICLE, payload: id })
}
