import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './index.css';
import NewsHunt from './NewsHunt';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

let dummy_posts = [
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
    source: "Product Hunt"
  },
  {
    id: 'sdgske',
    title: "We joke that birdsong is just a pretty way of birds shouting at each other for sex, but really that's all most of our pop music is anyway.",
    url: "https://i.redd.it/f4dihfvuy2421.png",
    comments_url: "https://www.reddit.com/r/aww/comments/a5vlv6/im_just_really_happy_to_be_here/",
    points: 28699,
    comments: 98,
    author: "mac_is_crack",
    source: "Github"
  }
]

function getRedditPosts() {
  let posts = []
  axios.get('https://www.reddit.com/hot.json').then(res => {
    const reddit_posts = res.data.data.children.map(obj => normalize(obj.data)).slice(0,20)
    for (let i = 0; i < reddit_posts.length; i++) {
      posts.push(reddit_posts[i])
    }
  })
  return posts
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

// getRedditPosts are getting logged, but not rendered. Using dummy_posts for meanwhile.
function reducer(state = { posts: dummy_posts }) {
  return state;
}

let store = Redux.createStore(reducer);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <NewsHunt />
  </ReactRedux.Provider>, document.getElementById('root'));
serviceWorker.unregister();
