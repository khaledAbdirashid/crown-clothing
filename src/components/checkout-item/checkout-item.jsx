import { useContext } from "react";
import "./checkout-item.scss";
import PropTypes from "prop-types";
import { CartContext } from "../../context/cartcontext";
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const handleAddItemToCart = () => addItemToCart(cartItem);
  const handleRemoveItemFromCart = () => removeItemFromCart(cartItem);
  const handleClearItemFromCart = () => clearItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={handleRemoveItemFromCart}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={handleAddItemToCart}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItemFromCart}>
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default CheckoutItem;
