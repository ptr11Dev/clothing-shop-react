import { AnyAction } from "redux";
import { setCartItems, setIsCartVisible } from "./cart.action";
import { CartItem } from "./cart.types";

export type CartState = {
  readonly isCartVisible: boolean;
  readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
  isCartVisible: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartVisible.match(action)) {
    return {
      ...state,
      isCartVisible: action.payload,
    };
  } else if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  } else {
    return state;
  }
};
