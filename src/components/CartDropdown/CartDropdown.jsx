import "./CartDropdown.scss";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/Cart";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cartDropdownContainer">
      <div className="cartItems">
        {cartItems.map((item) => {
          return <CartItem cartItem={item} key={item.id} />;
        })}
      </div>
      <Button>
        <Link to="checkout">GO TO CHECKOUT</Link>
      </Button>
    </div>
  );
};
export default CartDropdown;
