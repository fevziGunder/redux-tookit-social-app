import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PostsList = () => {
  const posts = useSelector((state) => state.posts)
  return (
    <section>
      <h2>Posts</h2>
      {posts.map((post) => (
        <article className="post-excerpt" key={post.id}>
          <h3> {post.title}</h3>
          <p>{post.content}</p>
          <Link to={`/posts/${post.id}`} className="button muted-button">
            View Post
          </Link>
        </article>
      ))}
    </section>
  )
}

export default PostsList
