import React from 'react';
import { render } from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import NewsHunt from './components/NewsHunt';
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';
// import axios from 'axios';

// function getRedditPosts() {
//   let posts = [];
//   axios.get('https://www.reddit.com/hot.json').then(res => {
//     const reddit_posts = res.data.data.children.map(obj => normalize(obj.data)).slice(0,20)
//     for (let i = 0; i < reddit_posts.length; i++) {
//       posts.push(reddit_posts[i])
//     }
//   });
//   return posts
// }

// function normalize(post) {
//   const normal_post = {
//     id: post.id,
//     title: post.title,
//     url: post.url,
//     comments_url: "https://www.reddit.com" + post.permalink,
//     points: post.score,
//     comments: post.num_comments,
//     author: post.author,
//     source: 'Reddit'
//   }
//   return normal_post
// }

let store = Redux.createStore(rootReducer);

render(
  <ReactRedux.Provider store={store}>
    <NewsHunt />
  </ReactRedux.Provider>, document.getElementById('root'));
serviceWorker.unregister();