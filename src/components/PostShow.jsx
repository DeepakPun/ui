const PostShow = ({ post }) => {
  return (
    <div className='py-5 my-5'>
      <h1 className='text-2xl underline'>{post.title}</h1>
      <p>{post.body}</p>
      <hr />
    </div>
  )
}

export default PostShow
