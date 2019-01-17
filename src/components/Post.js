import React from 'react'
import PropTypes from 'prop-types'

const Post = ({post}) => {
  return (<div className="row">
    <div className="col s12 m6">
      <div className="card">
      <a href={ post.url } target="_blank" rel="noopener noreferrer">
        <div className="card-image">
            <img src={ post.image ? post.image : "images/sample-1.jpg"} alt={ post.author }/>
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