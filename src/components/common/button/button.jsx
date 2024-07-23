import "./button.scss";
import PropTypes from "prop-types";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${BUTTON_TYPE_CLASSES[buttonType]} button-container`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(Object.keys(BUTTON_TYPE_CLASSES)),
};
export default Button;
