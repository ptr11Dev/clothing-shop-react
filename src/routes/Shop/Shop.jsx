import "./Shop.scss";

import { useContext } from "react";

import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductsContext } from "../../contexts/Products";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="productsContainer">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
