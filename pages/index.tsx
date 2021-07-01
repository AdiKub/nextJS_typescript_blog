import {useState, useEffect} from 'react'
import {NextPageContext} from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'

import {MyPost} from '../interfaces/post'
import postsApi from './api/postsApi'
import {MainLayout} from '../components/MainLayout'

interface PostsPageProps {
  posts: MyPost[]
}

export default function Index({ posts: serverPosts }: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    async function load() {

      await postsApi.getPosts()
      .then(response => {
        setPosts(response.data)
      })
    }

    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return <MainLayout>
      <p>Loading ...</p>
    </MainLayout>
  }

  return (
    <MainLayout>
      <h1>POSTS LIST</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => Router.push('/posts/new')}>
      CREAT NEW POST
      </button>
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