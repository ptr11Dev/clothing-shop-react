import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./ProductCard.styles";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};
