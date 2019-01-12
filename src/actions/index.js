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

export const invalidateSource = () => ({
  type: INVALIDATE_SOURCE
})

export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const receivePosts = json => ({
  type: RECEIVE_POSTS,
  posts: json.data.children.map(child => normalize(child.data)),
  receivedAt: Date.now()
})

const fetchPosts = () => dispatch => {
  dispatch(requestPosts())
  return fetch('https://www.reddit.com/hot.json')
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
}

function normalize(post) {
  const normal_post = {
    id: post.id,
    title: post.title,
    url: post.url,
    comments_url: "https://www.reddit.com" + post.permalink,
    points: post.score,
    comments: post.num_comments,
    author: post.author,
    source: 'Reddit'
  }
  return normal_post
}

const shouldFetchPosts = (state) => {
  const posts = state.posts
  console.log(posts)
  if (posts.initialLoad) {
    console.log('APP INITIATED')
    return true
  }
  if (posts.isFetching) {
    console.log('ISFETCHING = TRUE')
    return false
  }
  console.log('DIDINVALIDATE')
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts())
  }
}