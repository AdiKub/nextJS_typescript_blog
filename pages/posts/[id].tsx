import {useState, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {NextPageContext} from 'next'

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
      <p>Loading ...</p>
    </MainLayout>
  }
  return(
    <MainLayout>
      
     <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href={'/posts'}><a>Back to all posts</a></Link>
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
