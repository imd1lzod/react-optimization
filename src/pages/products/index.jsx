import { useState } from "react";
import {
  Button,
  Form,
  Input,
  ProductCard,
  ProductCards,
  Wrapper,
} from "./product.style";

const Product = () => {
  const [Products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: e.target.name.value,
      price: e.target.price.value,
    };

    setProducts((prev) => [...prev, newProduct]);
  };

  console.log(Products);

  return (
    <Wrapper>
      <h1>Products</h1>
      <h3>Number of products: {Products.length}</h3>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="name..." />
        <Input type="number" name="price" placeholder="price" />
        <Button type="submit">Add</Button>
      </Form>
      <ProductCards>
        {Products.map((u) => (
          <ProductCard key={Date.now()}>
            <h4>Product</h4>
            <p>Name: {u.name}</p>
            <p>Price: {u.price}</p>
          </ProductCard>
        ))}
      </ProductCards>
    </Wrapper>
  );
};

export default Product;
