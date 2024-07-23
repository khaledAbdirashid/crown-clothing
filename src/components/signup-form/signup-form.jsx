import FormInput from "../common/formInput/formInput";
import "./signup-form.scss";
import { useState } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocument,
} from "../../utils/firebase.utils";
import Button from "../common/button/button";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords are not equal");
      return;
    }
    try {
      const result = await createUserAuthWithEmailAndPassword(email, password);
      await createUserDocument(result.user, { displayName });
      navigate("/shop");
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          name="displayName"
          value={displayName}
          type="text"
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          name="email"
          value={email}
          type="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          name="password"
          value={password}
          type="password"
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          handleChange={handleChange}
          required
        />
        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
};

export default SignupForm;
