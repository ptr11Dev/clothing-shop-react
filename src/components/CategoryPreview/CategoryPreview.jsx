import "./CategoryPreview.scss";

import { ProductCard } from "../../components/ProductCard/ProductCard";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="categoryPreviewContainer">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
