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
  const [products, setProducts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const updated = [...products];
      updated[editingIndex] = formData;
      setProducts(updated);
      setEditingIndex(null);
    } else {
      setProducts((prev) => [...prev, formData]);
    }

    setFormData({ name: "", price: "" });
  };

  const handleUpdate = (index) => {
    setEditingIndex(index);
    setFormData(products[index]);
  };

  return (
    <Wrapper>
      <h1>Products</h1>
      <h3>Number of products: {products.length}</h3>
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
          name="price"
          placeholder="price"
          value={formData.price}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, price: e.target.value }))
          }
        />
        <Button type="submit">
          {editingIndex !== null ? "Update" : "Add"}
        </Button>
      </Form>
      <ProductCards>
        {products.map((u, index) => (
          <ProductCard key={index}>
            <h4>Product</h4>
            <p>Name: {u.name}</p>
            <p>Price: {u.price}</p>
            <Button type="button" onClick={() => handleUpdate(index)}>
              Update
            </Button>
          </ProductCard>
        ))}
      </ProductCards>
    </Wrapper>
  );
};

export default Product;
