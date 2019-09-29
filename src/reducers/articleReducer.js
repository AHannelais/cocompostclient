import _ from 'lodash'
import {
  CREATE_ARTICLE,
  FETCH_ARTICLE,
  FETCH_ARTICLES,
  EDIT_ARTICLE,
  DELETE_ARTICLE
} from '../actions/types'
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLE:
      return { ...state, [action.payload._id]: action.payload }
    case CREATE_ARTICLE:
      return {
        ...state,
        [action.payload.createdArticle._id]: action.payload.createdArticle
      }
    case EDIT_ARTICLE:
      return { ...state, [action.payload._id]: action.payload }
    case FETCH_ARTICLES:
      return { ...state, ..._.mapKeys(action.payload, '_id') }
    case DELETE_ARTICLE:
      return _.omit(state, action.payload)
    default:
      return state
  }
}
