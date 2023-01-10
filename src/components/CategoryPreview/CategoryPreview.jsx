import "./CategoryPreview.scss";

import { Link } from "react-router-dom";

import { ProductCard } from "../../components/ProductCard/ProductCard";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="categoryPreviewContainer">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
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
