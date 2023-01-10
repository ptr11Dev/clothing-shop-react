import "./CategoriesList.scss";

import DirectoryItem from "../DirectoryItem/DirectoryItem";

const CategoriesList = ({ categories }) => {
  return (
    <div className="categoriesContainer">
      {categories.map((category) => {
        return <DirectoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default CategoriesList;
