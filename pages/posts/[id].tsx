import {useState, useEffect} from 'react'
import Router from 'next/router'
import {useRouter} from 'next/router'
import {NextPageContext} from 'next'

import { 
  Container,
  DescriptionBox,
  Title,
  Button
} from '../../styles/styles';

import {MainLayout} from '../../components/MainLayout'
import {MyPost} from '../../interfaces/post'
import postsApi from '../api/postsApi'

interface PostPageProps {
  post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
  const [post, setPost] = useState(serverPost)
  const router = useRouter()

  useEffect(() => {
    async function load() {

      await postsApi.getPostById(router.query.id)
      .then(response => {
        setPost(response.data)
      })

    }
    if (!serverPost) {
      load()
    }

  }, [])

  if (!post) {
    return <MainLayout>
      <Container>
      <p>Loading ...</p>
      </Container>
    </MainLayout>
  }
  return(
    <MainLayout>
      <Container>
        <Title className='mb-4'>{post.title}</Title>
        <DescriptionBox>{post.body}</DescriptionBox>
        <Button 
          onClick={() => Router.push('/')} 
          primary
        >
          BACK TO LIST
      </Button>
      </Container>
    </MainLayout>
  )
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return {post: null}
  }

  const post: MyPost = (await postsApi.getPostById(query.id)).data

  return {
    post
  }
}
