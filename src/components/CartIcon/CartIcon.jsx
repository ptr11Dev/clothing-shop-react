import { useDispatch, useSelector } from "react-redux";

import { setIsCartVisible } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartVisible,
} from "../../store/cart/cart.selector";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconContainer,
} from "./CartIcon.styles";

const CartIcon = () => {
  const isCartVisible = useSelector(selectIsCartVisible);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const toggleCart = () => dispatch(setIsCartVisible(!isCartVisible));

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIconContainer />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
