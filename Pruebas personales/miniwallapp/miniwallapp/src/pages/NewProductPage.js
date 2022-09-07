import { useState } from "react";

const NewProductPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  return (
    <section>
      <h2>New Product Form</h2>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const NewProduct = [name, price, description];
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></input>
      </form>
    </section>
  );
};

export default NewProductPage;
