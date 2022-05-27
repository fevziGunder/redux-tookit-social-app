import React from 'react'
import { useSelector } from 'react-redux'

const SinglePostPage = ({match}) => {
    console.log(match)
    const {postId} = match.params;
    const post = useSelector(state=>state.posts.find(p=>p.id === postId))
    if (!post) {
       return (
           <section>
               <h2>Post not found.</h2>
           </section>
       ) 
    }
  return (
   <section>
       <article className='post'>
           <h2>{post.title}</h2>
           <p className='post-content' >{post.content}</p>
       </article>
   </section>
  )
}

export default SinglePostPage
