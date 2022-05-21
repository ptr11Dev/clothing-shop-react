import "./CategoriesList.scss";

import CategoryItem from "../CategoryItem/CategoryItem";

const CategoriesList = ({ categories }) => {
  return (
    <div className="categoriesContainer">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default CategoriesList;
