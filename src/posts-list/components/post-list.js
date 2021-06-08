import React from 'react';

const PostsList = ({posts}) => {
  return (
    <div>
      <h2>Posts Lists</h2>
      <ul>
        {posts.map(post => {
          return <li key = {post.id}>
            {post.title}
          </li>
        })}
      </ul>
    </div>
  )
}

export default PostsList