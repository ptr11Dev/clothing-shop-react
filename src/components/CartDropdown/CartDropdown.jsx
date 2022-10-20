import "./CartDropdown.scss";

import Button from "../Button/Button";

const CartDropdown = () => {
  return (
    <div className="cartDropdownContainer">
      <div className="cartItems"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
