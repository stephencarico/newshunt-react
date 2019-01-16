import React from 'react'
import PropTypes from 'prop-types'

const Post = ({post}) => {
  return (<div className="row">
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <a href={ post.url } target="_blank" rel="noopener noreferrer">
            <img src="images/sample-1.jpg" alt={ post.author }/>
          </a>
        </div>
        <div className="card-content">
          <h5>{ post.title }</h5>
        </div>
        <div className="card-action">
          <a href={ post.comments_url }>{ post.comments } comments</a>
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