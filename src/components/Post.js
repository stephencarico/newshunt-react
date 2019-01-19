import React from 'react'
import PropTypes from 'prop-types'

const Post = ({post}) => {
  function verify_extension(link) {
    if (!link) { return false }
    const extension = link.substr(link.length - 3)
    return /jpg|gif|bmp|png/.test(extension) ? link : null
  }

  function bg_display_for(post) {
    if (post.source === 'Hacker News') { return 'images/bg/hackerNewsBG.jpg' };
    if (post.source === 'Reddit') { return 'images/bg/redditBG.jpg' };
    if (post.source === 'Product Hunt') { return post.image };
    if (post.source === 'Github Trending') { return 'images/bg/githubTrendingBG.jpg' };
  }

  return (<div className="row">
    <div className="col s12 m6">
      <div className="card">
      <a href={ post.url } target="_blank" rel="noopener noreferrer">
        <div className="card-image">
            <img src={ verify_extension(post.image) ? post.image : bg_display_for(post) } 
              alt={ post.author } />
        </div>
        <div className="card-content">
            <h6>{ post.title }</h6>
        </div>
      </a>
        <div className="card-action">
          <a href={ post.comments_url } target="_blank" rel="noopener noreferrer">{ post.comments } comments</a>
          <span>{ post.source }</span>
          <span> | </span>
          <span> { post.points } pts by { post.author } </span>
        </div>
      </div>
    </div>
  </div>)
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post