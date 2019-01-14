export const fetchRedditPosts = () => {
  return fetch('https://www.reddit.com/hot.json')
    .then(response => response.json())
    .then(json => json.data.children.map(child => normalize(child.data)))
}

export const fetchGithubPosts = () => {
  return fetch('https://github-trending-api.now.sh/repositories?since=weekly')
    .then(response => response.json())
    .then(json => json.map(child => normalizeGithub(child)))
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

function normalizeGithub(post) {
  const github_post = {
    id: "",
    title: post.description,
    url: post.url,
    comments_url: post.url + "/issues",
    points: post.currentPeriodStars,
    comments: "",
    author: post.author,
    source: "Github Trending"
  }
  return github_post
}

export const fetchAllPosts = (json) => {
  return json;
}