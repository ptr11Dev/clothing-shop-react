import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
  SET_CART_COUNT = "cart/SET_CART_COUNT",
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  SET_CART_TOTAL = "cart/SET_CART_TOTAL",
  SET_IS_CART_VISIBLE = "cart/SET_IS_CART_VISIBLE",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
