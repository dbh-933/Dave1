import { useState, useEffect } from "react";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:4000/products");
        const body = res.json();
        if (!res.ok) {
          throw new Error(
            "Unexpected error fetching API, Please contact with support"
          );
        }
        setProducts(body.data);
      } catch (error) {
        console.error(error.message);
        setErrorMessage(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <section>
      <h2>Products</h2>
      {products.length > 0 && (
        <ul>
          {products.map((product) => {
            const { id, name, price, description, sold, picture } = product;
            return (
              <li key={id}>
                <article>
                  <h3> {name} </h3>
                  <p> {description} </p>
                  <p> {price}€ </p>
                  {sold === 1 && <span>Vendido</span>}
                </article>
              </li>
            );
          })}
        </ul>
      )}
      ;{errorMessage && <p className="error-message"> {errorMessage} </p>}
    </section>
  );
};

export default ProductsPage;
