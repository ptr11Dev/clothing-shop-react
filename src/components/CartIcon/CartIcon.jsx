import "./CartIcon.scss";

import { useState } from "react";
import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import { CartContext } from "../../contexts/Cart";

const CartIcon = () => {
  const [currentCount, setCurrentCount] = useState(0);

  const { isCartVisible, setIsCartVisible } = useContext(CartContext);

  const toggleCart = () => setIsCartVisible(!isCartVisible);

  return (
    <div className="cartIconContainer" onClick={toggleCart}>
      <ShoppingIcon className="shoppingIcon" />
      <span className="itemCount">{currentCount}</span>
    </div>
  );
};
export default CartIcon;
