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
  const [posts, setPosts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const updated = [...posts];
      updated[editingIndex] = formData;
      setPosts(updated);
      setEditingIndex(null);
    } else {
      setPosts((prev) => [...prev, formData]);
    }

    setFormData({ title: "", description: "" });
  };

  const handleUpdate = (index) => {
    setEditingIndex(index);
    setFormData(posts[index]);
  };

  return (
    <Wrapper>
      <h1>Posts</h1>
      <h3>Number of posts: {posts.length}</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="title..."
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <Input
          type="text"
          name="description"
          placeholder="description"
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        />
        <Button type="submit">
          {editingIndex !== null ? "Update" : "Add"}
        </Button>
      </Form>
      <PostCards>
        {posts.map((u, index) => (
          <PostCard key={index}>
            <h4>Post</h4>
            <p>Title: {u.title}</p>
            <p>Description: {u.description}</p>
            <Button type="button" onClick={() => handleUpdate(index)}>
              Update
            </Button>
          </PostCard>
        ))}
      </PostCards>
    </Wrapper>
  );
};

export default Post;
