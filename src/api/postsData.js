let reddit_posts = [
  {
    id: 'awerf',
    title: "I'm just really happy to be here!",
    url: "https://i.redd.it/f4dihfvuy2421.png",
    comments_url: "https://www.reddit.com/r/aww/comments/a5vlv6/im_just_really_happy_to_be_here/",
    points: 23607,
    comments: 109,
    author: "mac_is_crack",
    source: "Reddit"
  },
  {
    id: 'sfgse',
    title: "Fentanyl Surpasses Heroin As Drug Most Often Involved In Deadly Overdoses - When fentanyl, a synthetic opioid 50 to 100 times more powerful than morphine, infiltrated the drug supply in the U.S. it had an immediate, dramatic effect on the overdose rate, finds a new CDC report.",
    url: "https://i.redd.it/f4dihfvuy2421.png",
    comments_url: "https://www.reddit.com/r/aww/comments/a5vlv6/im_just_really_happy_to_be_here/",
    points: 41733,
    comments: 140,
    author: "mac_is_crack",
    source: "Reddit"
  },
  {
    id: 'sdgske',
    title: "We joke that birdsong is just a pretty way of birds shouting at each other for sex, but really that's all most of our pop music is anyway.",
    url: "https://i.redd.it/f4dihfvuy2421.png",
    comments_url: "https://www.reddit.com/r/aww/comments/a5vlv6/im_just_really_happy_to_be_here/",
    points: 28699,
    comments: 98,
    author: "mac_is_crack",
    source: "Reddit"
  }
]
let hacker_news_posts = [
  {
    id: '1',
    title: "Larry Roberts has died",
    url: "https://www.nytimes.com/2018/12/30/obituaries/lawrence-g-roberts-dies-at-81.html",
    comments_url: "https://www.nytimes.com/2018/12/30/obituaries/lawrence-g-roberts-dies-at-81.html",
    points: 257,
    comments: 28,
    author: "jbegley",
    source: "Hacker News"
  },
  {
    id: '2',
    title: "Essential C (2003) [pdf]",
    url: "http://cslibrary.stanford.edu/101/EssentialC.pdf",
    comments_url: "http://cslibrary.stanford.edu/101/EssentialC.pdf",
    points: 150,
    comments: 69,
    author: "saadadasd",
    source: "Hacker News"
  },
  {
    id: '3',
    title: "How Facebook tracks you on Android [video]",
    url: "https://media.ccc.de/v/35c3-9941-how_facebook_tracks_you_on_android/",
    comments_url: "https://media.ccc.de/v/35c3-9941-how_facebook_tracks_you_on_android/",
    points: 486,
    comments: 162,
    author: "gala8y",
    source: "Hacker News"
  }
]
let product_hunt_posts = [
  {
    id: '4',
    title: "UI Sounds - Learn sound design for user interfaces by example",
    url: "https://uisounds.prototypr.io/",
    comments_url: "https://uisounds.prototypr.io/",
    points: 231,
    comments: 19,
    author: "graeme_fulton",
    source: "Product Hunt"
  },
  {
    id: '5',
    title: "Magic Copy - Magically share text & links across your devices",
    url: "https://magiccopy.xyz/",
    comments_url: "https://magiccopy.xyz/",
    points: 189,
    comments: 33,
    author: "dinuka_jayasuriya",
    source: "Product Hunt"
  },
  {
    id: '6',
    title: "Your 2018 Review - A simple questionaire for reviewing your year.",
    url: "https://getzeno.app/review2018",
    comments_url: "https://getzeno.app/review2018",
    points: 193,
    comments: 3,
    author: "krishkhubchand",
    source: "Product Hunt"
  }
]
let github_trending_posts = [
  {
    id: '7',
    title: "awesome-awesome-awesome - Awesome list of repositories of awesome lists",
    url: "https://github.com/jonatasbaldin/awesome-awesome-awesome",
    comments_url: "https://github.com/jonatasbaldin/awesome-awesome-awesome",
    points: 0,
    comments: 0,
    author: "jonatasbaldin",
    source: "Github Trending"
  },
  {
    id: '8',
    title: "notable - The markdown-based note-taking app that doesn't suck.",
    url: "https://github.com/fabiospampinato/notable",
    comments_url: "https://github.com/fabiospampinato/notable",
    points: 0,
    comments: 0,
    author: "fabiospampinato",
    source: "Github Trending"
  },
  {
    id: '9',
    title: "inter - The Inter UI font family",
    url: "https://github.com/rsms/inter",
    comments_url: "https://github.com/rsms/inter",
    points: 0,
    comments: 0,
    author: "rsms",
    source: "Github Trending"
  }
]

function getAllPosts() {
  let all_posts = [];
  // .concat does not work
  for(let i = 0 ; i < 3; i++) {
    all_posts.push(reddit_posts[i])
    all_posts.push(hacker_news_posts[i])
    all_posts.push(product_hunt_posts[i])
    all_posts.push(github_trending_posts[i])
  }
  return all_posts
}

export default getAllPosts();