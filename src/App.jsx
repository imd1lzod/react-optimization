import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { Main } from "./layout/Main";

const UsersPage = React.lazy(() => import("./pages/users"));
const ProductsPage = React.lazy(() => import("./pages/products"));
const PostsPage = React.lazy(() => import("./pages/posts"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}>
        <Route path="users" element={<UsersPage></UsersPage>}></Route>
        <Route path="products" element={<ProductsPage></ProductsPage>}></Route>
        <Route path="posts" element={<PostsPage></PostsPage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
