import { Link, NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/usercontext";
import crownSvg from "../../assets/crown.svg";
import "./navigation.scss";
import { signOutUSer } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cartcontext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isDropDownOpen } = useContext(CartContext);
  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <img src={crownSvg} alt="a crown logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUSer}>
              SIGNOUT
            </span>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGNIN
            </NavLink>
          )}
          <CartIcon />
        </div>
        {isDropDownOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
