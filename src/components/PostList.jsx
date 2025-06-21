import PostShow from './PostShow'

const PostList = ({ posts }) => {
  const renderedPosts = posts.map(post => (
    <PostShow key={post._id} post={post} />
  ))
  return <div>{renderedPosts}</div>
}

export default PostList
