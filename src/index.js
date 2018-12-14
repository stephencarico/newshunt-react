import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewsHunt from './NewsHunt';
import * as serviceWorker from './serviceWorker';
// import axios from 'axios';

const posts = [
  {
    id: 1,
    title: "I'm just really happy to be here!",
    url: "https://i.redd.it/f4dihfvuy2421.png",
    comments_url: "https://www.reddit.com/r/aww/comments/a5vlv6/im_just_really_happy_to_be_here/",
    points: 23607,
    comments: 109,
    author: "mac_is_crack",
    source: "Reddit"
  },
  {
    id: 2,
    title: "Fentanyl Surpasses Heroin As Drug Most Often Involved In Deadly Overdoses - When fentanyl, a synthetic opioid 50 to 100 times more powerful than morphine, infiltrated the drug supply in the U.S. it had an immediate, dramatic effect on the overdose rate, finds a new CDC report.",
    url: "https://i.redd.it/f4dihfvuy2421.png",
    comments_url: "https://www.reddit.com/r/aww/comments/a5vlv6/im_just_really_happy_to_be_here/",
    points: 41733,
    comments: 140,
    author: "mac_is_crack",
    source: "Reddit"
  },
  {
    id: 3,
    title: "We joke that birdsong is just a pretty way of birds shouting at each other for sex, but really that's all most of our pop music is anyway.",
    url: "https://i.redd.it/f4dihfvuy2421.png",
    comments_url: "https://www.reddit.com/r/aww/comments/a5vlv6/im_just_really_happy_to_be_here/",
    points: 28699,
    comments: 98,
    author: "mac_is_crack",
    source: "Reddit"
  }
]

const state = {
  postData: {
    posts: posts 
  }
};

ReactDOM.render(<NewsHunt {...state} />, document.getElementById('root'));
serviceWorker.unregister();
