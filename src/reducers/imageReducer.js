import _ from 'lodash'
import { CREATE_IMAGE, FETCH_IMAGES, DELETE_IMAGE } from '../actions/types'
export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_IMAGE:
      return {
        ...state,
        [action.payload.createdImage._id]: action.payload.createdImage
      }

    case FETCH_IMAGES:
      return { ...state, ..._.mapKeys(action.payload, '_id') }
    case DELETE_IMAGE:
      return _.omit(state, action.payload)
    default:
      return state
  }
}
