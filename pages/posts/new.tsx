import { useState } from "react";
import Router from "next/router";

import {
  Container,
  Title,
  Input,
  Button,
  ImputWrapper,
  BoxTitle,
  InputArea,
} from "../../styles/styles";

import { MainLayout } from "../../components/MainLayout";
import postsApi from "../api/postsApi";

const newPost = () => {
  const [post, setPost] = useState({});

  const changeHandler = (event: any): void => {
    const newPost = Object.assign(post, {
      [event.target.name]: event.target.value,
    });
    setPost(newPost);
  };

  const emptyChacker =()=> 
    (post["title"] && post["title"].trim().length) && 
    (post["body"] && post["body"].trim().length) ? 
    true : false
  
  const submitHandler = () => emptyChacker() && PostSetter(post);

  const PostSetter = async (post: {}) => {
    await postsApi
      .setPost(post)
      .then((response) => {
        Router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MainLayout>
      <Container>
        <Title className="mb-4">New post</Title>
        <ImputWrapper className="mb-1">
          <BoxTitle>Title</BoxTitle>
          <Input 
            name="title" 
            className="backColor" 
            onChange={changeHandler} 
          />
        </ImputWrapper>
        <ImputWrapper className="mb-1">
          <BoxTitle>Description</BoxTitle>
          <InputArea 
            name="body" 
            onChange={changeHandler} 
          />
        </ImputWrapper>
        <Button 
          primary={false} 
          className="mb-4" 
          onClick={submitHandler}
        >
          CREATE
        </Button>
        <Button onClick={() => Router.push("/")} primary>
          BACK TO LIST
        </Button>
      </Container>
    </MainLayout>
  );
};

export default newPost;
