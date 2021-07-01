import {useState, useEffect} from 'react'
import Head from 'next/head'

import { 
  Container,
  Title,
  Input,
  Button,
  ImputWrapper,
  BoxTitle,
  InputArea 
} from './styles';

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
      <Container >
      <Title className='mb-4'>New post</Title>
      <ImputWrapper className='mb-1'> 
        <BoxTitle>Title</BoxTitle>
        <Input className='backColor'></Input>
      </ImputWrapper>
      <ImputWrapper className='mb-1'> 
        <BoxTitle>Discription</BoxTitle>
        <InputArea ></InputArea>
      </ImputWrapper>
      <Button className='mb-4'>CREATE</Button>
      <Link href={'/'}><Button primary>BACK TO LIST</Button></Link>
      </Container>
    </MainLayout>
  )
}

export default newPost