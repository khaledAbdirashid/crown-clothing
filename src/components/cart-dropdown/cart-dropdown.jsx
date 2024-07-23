import "./cart-dropdown.scss";
import Button from "../common/button/button";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
import CartItem from "../cart-item/cart-item";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, isDropDownOpen, setIsDropDownOpen } =
    useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckOut = () => {
    navigate("/check-out");
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
