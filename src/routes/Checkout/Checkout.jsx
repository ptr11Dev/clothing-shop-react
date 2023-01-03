import "./Checkout.scss";

import { useContext } from "react";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../contexts/Cart";

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    totalPrice,
  } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div className="checkoutContainer">
      <nav className="checkoutHeader">
        <div className="headerBlock">
          <span>Product</span>
        </div>
        <div className="headerBlock">
          <span>Description</span>
        </div>
        <div className="headerBlock">
          <span>Quantity</span>
        </div>
        <div className="headerBlock">
          <span>Price</span>
        </div>
        <div className="headerBlock">
          <span>Remove</span>
        </div>
      </nav>

      {cartItems.map((item) => (
        <CheckoutItem
          item={item}
          key={item.id}
          addItem={addItemToCart}
          removeItem={removeItemFromCart}
          clearItem={clearItemFromCart}
        />
      ))}

      <h2 className="total">TOTAL: ${totalPrice}</h2>
    </div>
  );
};

export default Checkout;
