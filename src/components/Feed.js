import React from 'react'
import Post from './Post'

const Feed = ({ posts }) => (
  <div className="container movedown">
    {posts.map((post) => <Post post={post} key={post.id} />)}
  </div>
)

export default Feed