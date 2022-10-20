import "./Navigation.scss";

import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import CartIcon from "../../components/CartIcon/CartIcon";
import { CartContext } from "../../contexts/Cart";
import { UserContext } from "../../contexts/User";
import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartVisible } = useContext(CartContext);

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
          {currentUser ? (
            <span className="navLink" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="navLink" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartVisible && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
