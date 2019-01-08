import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const Feed = ({ posts }) => (
  <div className="container movedown">
    {posts.map((post) => <Post post={post} key={post.id} />)}
  </div>
)

Feed.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Feed