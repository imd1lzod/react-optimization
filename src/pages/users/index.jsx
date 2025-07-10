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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: e.target.name.value,
      age: e.target.age.value,
    };

    setUsers((prev) => [...prev, newUser]);
  };

  console.log(users);

  return (
    <Wrapper>
      <h1>Users</h1>
      <h3>Number of users: {users.length}</h3>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="name..." />
        <Input type="number" name="age" placeholder="age" />
        <Button type="submit">Add</Button>
      </Form>
      <UserCards>
        {users.map((u) => (
          <UserCard key={Date.now()}>
            <h4>User</h4>
            <p>Name: {u.name}</p>
            <p>Age: {u.age}</p>
          </UserCard>
        ))}
      </UserCards>
    </Wrapper>
  );
};

export default User;
