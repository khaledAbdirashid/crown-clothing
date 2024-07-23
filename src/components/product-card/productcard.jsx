import PropTypes from "prop-types";
import "./productcard.scss";
import Button from "../common/button/button";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";

const Productcard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const handleAddItemToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <Button buttonType="inverted" onClick={handleAddItemToCart}>
        ADD TO CART
      </Button>
      <div className="footer">
        <span className="name">{name}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};

Productcard.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Productcard;
