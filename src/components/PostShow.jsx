const PostShow = ({ post }) => {
  return (
    <div className='py-5 my-5'>
      <h1 className='text-2xl underline'>{post.title}</h1>
      <p className="py-5">{post.body}</p>
    </div>
  )
}

export default PostShow
