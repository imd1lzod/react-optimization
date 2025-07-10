import { useState } from "react";
import {
  Button,
  Form,
  Input,
  PostCard,
  PostCards,
  Wrapper,
} from "./post.style";

const Post = () => {
  const [Posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    setPosts((prev) => [...prev, newPost]);
  };

  console.log(Posts);

  return (
    <Wrapper>
      <h1>Posts</h1>
      <h3>Number of posts: {Posts.length}</h3>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="title" placeholder="title..." />
        <Input type="text" name="description" placeholder="description" />
        <Button type="submit">Add</Button>
      </Form>
      <PostCards>
        {Posts.map((u) => (
          <PostCard key={Date.now()}>
            <h4>Post</h4>
            <p>Title: {u.title}</p>
            <p>Description: {u.description}</p>
          </PostCard>
        ))}
      </PostCards>
    </Wrapper>
  );
};

export default Post;
