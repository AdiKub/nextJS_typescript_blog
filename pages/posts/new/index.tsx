import {useState, useEffect} from 'react'
import Head from 'next/head'

import { Container, Logo, Menu, MenuItem } from './styles';

import {MainLayout} from '../../../components/MainLayout'
import Link from 'next/link'
import {MyPost} from '../../../interfaces/post'

interface PostsPageProps {
  posts: MyPost[]
}


 const newPost = ({ posts: serverPosts }: PostsPageProps) => {

  const [posts, setPosts] = useState(serverPosts)
  return (
    <MainLayout>
      <Container className='mb-4'>
      <h1>New post</h1>
      <input type="text" />
      <div> 
        <span></span>
        <textarea  ></textarea>
      </div>
      <button>CREATE</button>
      <Link href={'/'}><a>Back to all posts</a></Link>
      </Container>
    </MainLayout>
  )
}

export default newPost