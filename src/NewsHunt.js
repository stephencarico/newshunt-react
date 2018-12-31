import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import './vendor/materialize.min.css';
import './vendor/fontawesome-free/css/all.min.css';

function Navbar({loadAllPosts, loadHackerNewsPosts, loadRedditPosts, loadProductHuntPosts, loadGithubTrendingPosts}) {
  return (<div className="navbar-fixed">
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <img className="brand-logo center" src="images/news-hunt-color.png" alt="news-hunt" />
        </div>
        <div className="container nav-wrapper hide-mobile">
          <div className="nav-content">
            <span>
              <ul className="tabs tabs-transparent">
                <li className="tab"><a onClick={loadAllPosts}>All</a></li>
                <li className="tab"><a onClick={loadHackerNewsPosts}>Hacker News</a></li>
                <li className="tab" onClick={loadRedditPosts}><a>Reddit</a></li>
                <li className="tab"><a onClick={loadProductHuntPosts}>Product Hunt</a></li>
                <li className="tab"><a onClick={loadGithubTrendingPosts}>Github Trending</a></li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>)
}

function Card({post}) {
  return (<div className="container source">
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-stacked">
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              <div className="card-content">
                <h6>{ post.title }</h6>
              </div>
            </a>
            <div className="card-action">
              <span><b>{ post.source }</b></span>
              <span> | </span>
              <span>{ post.author }</span>
              <span> | </span>
              <span> { post.points } pts </span>
              <span className="right"><i class="fa fa-plus-circle"></i></span>
              <span className="right"><a href={post.comments_url}> {post.comments} comments </a></span>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

function Feed({posts}) {
  console.log({posts})
  return (<div className="container movedown">
      {posts.map((post) => <Card post={post} key={post.id} />)}
    </div>)
}

function Footer() {
  return (<footer className="container">
    <p>Created by <a href="https://github.com/robdrosenberg" target="_blank" rel="noopener noreferrer">Robert Rosenberg</a> and <a href="https://github.com/stephencarico" target="_blank" rel="noopener noreferrer">Stephen Carico</a></p>
  </footer>)
}

function mapStateToProps(state) {
  console.log(state.postData)
  return {
    posts: state.postData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadAllPosts: () => {
      dispatch({ type: 'LOAD_ALL_POSTS'});
    },
    loadHackerNewsPosts: () => {
      dispatch({ type: 'LOAD_HACKER_NEWS_POSTS'});
    },    
    loadRedditPosts: () => {
      dispatch({ type: 'LOAD_REDDIT_POSTS'});
    },    
    loadProductHuntPosts: () => {
      dispatch({ type: 'LOAD_PRODUCT_HUNT_POSTS'});
    },    
    loadGithubTrendingPosts: () => {
      dispatch({ type: 'LOAD_GITHUB_TRENDING_POSTS'});
    },
  }
}

const NewsHunt = connect(mapStateToProps, mapDispatchToProps)(function({posts, loadAllPosts, loadHackerNewsPosts, loadRedditPosts, loadProductHuntPosts, loadGithubTrendingPosts}) {
  return (
    <div>
      <Navbar loadAllPosts={loadAllPosts} loadHackerNewsPosts={loadHackerNewsPosts} loadRedditPosts={loadRedditPosts} loadProductHuntPosts={loadProductHuntPosts} loadGithubTrendingPosts={loadGithubTrendingPosts}/>
      <Feed posts={posts} />
      <Footer />
    </div>
  );
});

export default NewsHunt;
