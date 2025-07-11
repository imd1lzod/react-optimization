import { useState } from "react";
import {
  Wrapper,
  Form,
  Input,
  Button,
  UserCards,
  UserCard,
} from "./user.style";

const User = () => {
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", age: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      // update mode
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = formData;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      // add mode
      setUsers((prev) => [...prev, formData]);
    }

    setFormData({ name: "", age: "" });
  };

  const handleUpdate = (index) => {
    setEditingIndex(index);
    setFormData(users[index]);
  };

  return (
    <Wrapper>
      <h1>Users</h1>
      <h3>Number of users: {users.length}</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="name..."
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <Input
          type="number"
          name="age"
          placeholder="age"
          value={formData.age}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, age: e.target.value }))
          }
        />
        <Button type="submit">
          {editingIndex !== null ? "Update" : "Add"}
        </Button>
      </Form>
      <UserCards>
        {users.map((u, index) => (
          <UserCard key={index}>
            <h4>User</h4>
            <p>Name: {u.name}</p>
            <p>Age: {u.age}</p>
            <Button type="button" onClick={() => handleUpdate(index)}>
              Update
            </Button>
          </UserCard>
        ))}
      </UserCards>
    </Wrapper>
  );
};

export default User;
