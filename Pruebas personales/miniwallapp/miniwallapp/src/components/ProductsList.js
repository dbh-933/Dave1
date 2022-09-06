const ProductsList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => {
        const { id, name, price, description, sold, picture } = product;
        return;
      })}
    </ul>
  );
};

export default ProductsList;
