import {useState, useEffect} from 'react'
import Link from 'next/link'
import Router from 'next/router'

import { 
  Container,
  Title,
  Input,
  Button,
  ImputWrapper,
  BoxTitle,
  InputArea 
} from '../../../styles/styles';

import {MainLayout} from '../../../components/MainLayout'
import postsApi from '../../api/postsApi'


 const newPost = () => {
  const [post, setPost] = useState({})
   
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPost = Object.assign(post, {[event.target.name]: event.target.value})
    setPost(newPost)
  }

  const submitHandler = () => {
  if (post['title'] && post['body'])
    PostSetter(post)
  }

  const PostSetter = async(post)=> {

    await postsApi.setPost(post)
    .then(response => {
      Router.push('/')
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <MainLayout>
      <Container >
      <Title className='mb-4'>New post</Title>
      <ImputWrapper className='mb-1'> 
        <BoxTitle>Title</BoxTitle>
        <Input
          name='title'
          className='backColor' 
          onChange={changeHandler}
        >
        </Input>
      </ImputWrapper>
      <ImputWrapper className='mb-1'> 
        <BoxTitle>Discription</BoxTitle>
        <InputArea
          name='body' 
          onChange={changeHandler}></InputArea>
      </ImputWrapper>
      <Button className='mb-4' onClick={submitHandler}>CREATE</Button>
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

export default newPost