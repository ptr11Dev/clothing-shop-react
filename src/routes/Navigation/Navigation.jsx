import "./Navigation.scss";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logoContainer" to="/">
          <CrownLogo className="logo"></CrownLogo>
        </Link>
        <div className="navLinksContainer">
          <Link className="navLink" to="/shop">
            SHOP
          </Link>
          <Link className="navLink" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
