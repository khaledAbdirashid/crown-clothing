import "./cart-icon.scss";
import shoppingBagSvg from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
const CartIcon = () => {
  const { isDropDownOpen, setIsDropDownOpen } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);
  const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);
  return (
    <div className="cart-icon-container" onClick={toggleDropDown}>
      <img
        className="shopping-icon"
        src={shoppingBagSvg}
        alt="shopping bag svg icon"
      />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
