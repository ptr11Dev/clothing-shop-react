import { Outlet } from "react-router-dom";

import CategoriesList from "../../components/CategoriesList/CategoriesList";

const Homepage = () => {
  return (
    <>
      <CategoriesList />
      <Outlet />
    </>
  );
};

export default Homepage;
