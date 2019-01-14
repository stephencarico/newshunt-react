import { normalizeReddit, normalizeGithub } from './normalize'

export const fetchRedditPosts = () => {
  return fetch('https://www.reddit.com/hot.json')
    .then(response => response.json())
    .then(json => json.data.children.splice(0,20).map(child => normalizeReddit(child.data)))
}

export const fetchGithubPosts = () => {
  return fetch('https://github-trending-api.now.sh/repositories?since=weekly')
    .then(response => response.json())
    .then(json => json.splice(0,20).map(child => normalizeGithub(child)))
}

// How do I combine the above posts?
export const fetchAllPosts = (json) => {
  return json;
}