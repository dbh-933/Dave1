const Product = () => {
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
};

export default Product;
