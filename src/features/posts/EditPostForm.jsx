import React, {useState} from 'react'

const EditPostForm = ({match}) => {
  const [title,setTitle] =useState("");
  const [content, setContent] = useState("");  
  return (
    <section>
        <h2>Edit Post</h2>
        <form>
            <label htmlFor='postTitle'>Post Title:</label>
            <input type="text"
            id="postTitle"
            name="postTitle"
            placeholder='What on your mind?'
            value={title}
            onChange={e=>setTitle(e.target.value)}
            />

            <label htmlFor='postContent'>Content:</label>
            <input type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={e=>setContent(e.target.value)}
            />
            <button type="button" onClick={}>
                Save Post
            </button>
        </form>
    </section>
  )
}

export default EditPostForm
