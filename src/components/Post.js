import React from 'react'
import PropTypes from 'prop-types'

const Post = ({post}) => {
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
              <span className="right"><i className="fa fa-plus-circle"></i></span>
              <span className="right"><a href={post.comments_url} target="_blank" rel="noopener noreferrer"> {post.comments} comments </a></span>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post