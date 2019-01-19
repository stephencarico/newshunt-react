import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const Feed = ({ posts }) => {
  function middle(posts) {
    return (posts.length / 2) + 1
  }

  return (<div className="container movedown">
    <div className="row">
      <div className="col m6">
        {posts.slice(0, middle(posts)).map((post, i) => <Post post={post} key={i} />)}
      </div>
      <div className="col m6">
        {posts.slice(middle(posts), posts.length).map((post, i) => <Post post={post} key={i} />)}
      </div>
    </div>
  </div>
)}

Feed.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Feed