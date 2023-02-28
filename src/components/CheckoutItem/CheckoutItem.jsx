import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./CheckoutItem.styles";

const CheckoutItem = (props) => {
  const cartItems = useSelector(selectCartItems);
  const { item, addItem, removeItem, clearItem } = props;
  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItem(cartItems, item));
  const removeItemHandler = () => dispatch(removeItem(cartItems, item));
  const clearItemHandler = () => dispatch(clearItem(cartItems, item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={item.imageUrl} alt={item.name} />
      </ImageContainer>
      <BaseSpan>{item.name}</BaseSpan>
      <Quantity as="div">
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{item.quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{item.price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
