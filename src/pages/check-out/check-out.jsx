import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
import "./check-out.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item";
const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const headersBlock = [
    "Product",
    "Description",
    "Quantity",
    "Price",
    "Remove",
  ];
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headersBlock.map((block) => (
          <div key={block} className="header-block">
            {block}
          </div>
        ))}
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total:${cartTotal}</span>
    </div>
  );
};

export default CheckOut;
