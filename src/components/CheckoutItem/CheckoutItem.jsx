import "./CheckoutItem.scss";

const CheckoutItem = (props) => {
  const { item, addItem, removeItem, clearItem } = props;

  const addItemHandler = () => addItem(item);
  const removeItemHandler = () => removeItem(item);
  const clearItemHandler = () => clearItem(item);

  return (
    <div className="checkoutItemContainer">
      <div className="imageContainer">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <span className="name">{item.name}</span>
      <div className="quantity">
        <span className="arrow" onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className="value">{item.quantity}</span>
        <span className="arrow" onClick={addItemHandler}>
          &#10095;
        </span>
      </div>
      <span className="price">{item.price}</span>
      <div className="removeButton" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
