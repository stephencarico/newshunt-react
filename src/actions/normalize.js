export function normalizeReddit(post) {
  const reddit_post = {
    id: post.id,
    title: post.title,
    url: post.url,
    comments_url: "https://www.reddit.com" + post.permalink,
    points: post.score,
    comments: post.num_comments,
    author: post.author,
    source: 'Reddit'
  }
  return reddit_post
}

export function normalizeGithub(post) {
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