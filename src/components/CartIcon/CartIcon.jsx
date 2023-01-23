import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconContainer,
} from "./CartIcon.styles";

const CartIcon = () => {
  const { isCartVisible, setIsCartVisible, currentCartCount } =
    useContext(CartContext);

  const toggleCart = () => setIsCartVisible(!isCartVisible);

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIconContainer />
      <ItemCount>{currentCartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
