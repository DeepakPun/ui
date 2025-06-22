import { useEffect, useState } from 'react'
import axios from 'axios'
import PostList from './components/PostList'

const DEV_API_URL = 'http://localhost:3000/api/v1'
const PROD_API_URL = 'some-deployed-url'
const posts = [
  {
    _id: '6856a9be9a646cf2fcbf994b',
    title: 'React',
    body: 'React is a javascript library for build interactive user interfaces. It was built and is maintained by Meta.',
  },
  {
    _id: '6856b6c4f78c98f964a7c361',
    title: 'Docker',
    body: 'Docker is used to to containerize application code and dependencies into an image. The image can then be run on a Docker container so that regardless of the type of machine or OS the user is using, our app will function normally.',
  },
  {
    _id: '6856b6f9f78c98f964a7c363',
    title: 'DevOps',
    body: 'DevOps is cool. Implement continuous integration and continous deployment. DevSecOps is cooler.',
  },
]

function App() {
  const [message, setMessage] = useState('')
  // const [posts, setPosts] = useState([])
  const [formIsVisibie, setFormIsVisible] = useState(false)

  // const getMessage = async () => {
  //   const response = await axios.get(`${DEV_API_URL}/posts`)
  //   const message = await response.data.message
  //   setMessage(message)
  //   setPosts(response.data.posts)
  // }

  // useEffect(() => {
  //   getMessage()
  // }, [])

  const createNewPost = async (title, body) => {
    const response = await axios.post({ title, body })
  }

  // const output = message && message.length > 0 && <h2>{message}</h2>

  return (
    <div className='p-2 m-5'>
      <h1 className='text-3xl rounded text-center text-shadow-blue-600 lg-blue-200 py-4 my-2 bg-teal-300'>
        /root/blog
      </h1>
      <h2 className='text-3xl rounded text-center text-shadow-blue-600 lg-blue-200 py-4 my-2 bg-teal-400'>
        Onward to multi-container
      </h2>
      <PostList posts={posts} />
    </div>
  )
}

export default App
