import React from 'react'
import Post from './Post'
import OldPost from './OldPost'
import PropTypes from 'prop-types'

const Feed = ({ posts }) => (
  <div className="container movedown">
    {posts.map((post, i) => <Post post={post} key={i} />)}
  </div>
)

Feed.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Feed