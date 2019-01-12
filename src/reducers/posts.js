// import postData from '../api/postsData'
import { INVALIDATE_SOURCE, REQUEST_POSTS, RECEIVE_POSTS } from '../actions'

const posts = (state = {
  initialLoad: true,
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_SOURCE:
      return {
        ...state,
        didInvalidate: true,
        initialLoad: false
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        initialLoad: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        initialLoad: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export default posts