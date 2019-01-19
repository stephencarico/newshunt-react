import { getAllPosts } from '../api/postsData'

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  LOAD_ALL: 'LOAD_ALL',
  LOAD_HACKER_NEWS: 'LOAD_HACKER_NEWS',
  LOAD_REDDIT: 'LOAD_REDDIT',
  LOAD_PRODUCT_HUNT: 'LOAD_PRODUCT_HUNT',
  LOAD_GITHUB_TRENDING: 'LOAD_GITHUB_TRENDING'
}

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const INVALIDATE_SOURCE = 'INVALIDATE_SOURCE';
export const ERROR = 'ERROR';

export const invalidateSource = () => ({
  type: INVALIDATE_SOURCE
})

export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const receivePosts = json => ({
  type: RECEIVE_POSTS,
  posts: json,
  receivedAt: Date.now()
})

export const errors = () => ({
  type: ERROR
})

const fetchPosts = () => dispatch => {
  dispatch(requestPosts())
  return fetch('https://threadz-server.herokuapp.com/api/all')
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json.map(child => child))))
    .catch(error => dispatch(errors()))
}

const shouldFetchPosts = (state) => {
  const posts = state.posts
  if (posts.initialLoad) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts())
  }
}