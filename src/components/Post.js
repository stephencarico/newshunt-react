import React from 'react'
import PropTypes from 'prop-types'

const Post = ({post}) => {
  return (<div className="row">
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <img src="images/sample-1.jpg" alt={ post.author }/>
          <span className="card-title"><b>{ post.author }</b></span>
        </div>
        <div className="card-content">
          <p>{ post.title }</p>
        </div>
        <div className="card-action">
          <a href={ post.comments_url }>{ post.comments } comments</a>
          <span>{ post.source }</span>
          <span> | </span>
          <span> { post.points } pts </span>
        </div>
      </div>
    </div>
  </div>)
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post