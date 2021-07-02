import {useState, useEffect} from 'react'
import {NextPageContext} from 'next'
import Link from 'next/link'
import Router from 'next/router'

import { 
  Container,
  Title,
  Button,
  ListItem
} from '../styles/styles';
import {MyPost} from '../interfaces/post'
import postsApi from './api/postsApi'
import {MainLayout} from '../components/MainLayout'
interface PostsPageProps {
  posts: MyPost[]
}
export default function Index({ posts: serverPosts }: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts)

  const load = async()=> {
    await postsApi.getPosts()
    .then(response => {
      setPosts(response.data)
    })
  }

  useEffect(() => {

    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return <MainLayout>
      <Container>
      <p>Loading ...</p>
      </Container>
    </MainLayout>
  }

  return (
    <MainLayout>
      <Container>
      <Title className='mb-4'>POSTS LIST</Title>
      <ul>
        {posts.map(post => (
          <Link
            key={post.id} 
            href={`/posts/[id]`} 
            as={`/posts/${post.id}`}
          >
            <ListItem key={post.id}>
              {post.title}
            </ListItem>
          </Link>
        ))}
      </ul>
      <Button 
        primary={true}
        onClick={() => Router.push('/posts/new')} 
      >
      CREAT NEW POST
      </Button>
      </Container>
    </MainLayout>
  )
}

Index.getInitialProps = async ({req}: NextPageContext) => {
  if (!req) {
    return {posts: null}
  }

  const posts: MyPost[] = (await postsApi.getPosts()).data
  return {
    posts
  }
}