import {useState, useEffect} from 'react'
import Head from 'next/head'
import {MainLayout} from '../../components/MainLayout'
import Link from 'next/link'
import {MyPost} from '../../interfaces/post'

interface PostsPageProps {
  posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts)
  return (
    <MainLayout>
      <h1>New post</h1>
      <input type="text" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>CREATE</button>
      
    </MainLayout>
  )
}

