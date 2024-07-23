import PropTypes from "prop-types";
import "./formInput.scss";
const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="form-group">
      <input onChange={handleChange} {...otherProps} className="form-input" />
      <label
        htmlFor={otherProps.id}
        className={`${otherProps.value.length ? "shrink" : ""} form-label`}
      >
        {label}
      </label>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  handleChange: PropTypes.func,
};
export default FormInput;
