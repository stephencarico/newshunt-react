import { normalizeReddit, normalizeGithub } from './normalize'

export const fetchRedditPosts = () => {
  return fetch('https://www.reddit.com/hot.json')
    .then(response => response.json())
    .then(json => json.data.children.splice(0,20).map(child => normalizeReddit(child.data)))
    .catch(error => console.log({error, isLoading: false}))
}

export const fetchGithubPosts = () => {
  return fetch('https://github-trending-api.now.sh/repositories?since=weekly')
    .then(response => response.json())
    .then(json => json.splice(0,20).map(child => normalizeGithub(child)))
    .catch(error => console.log({error, isLoading: false}))
}

// How do I combine the above posts?
export const fetchAllPosts = () => {
  let result = [];
  for (let i = 0; i < 20; i++) {
    fetchRedditPosts().then(json => result.push(json[i]))
    fetchGithubPosts().then(json => result.push(json[i]))
  }
  return result;
}