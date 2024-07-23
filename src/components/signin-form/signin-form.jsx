import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../utils/firebase.utils";

import "./signin-form.scss";
import { useState } from "react";
import FormInput from "../common/formInput/formInput";
import Button from "../common/button/button";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};
const SigninForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
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
    try {
      await signInUserWithEmailAndPassword(email, password);
      navigate("/shop");
      console.log("signin successfull");
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("incorrect email or password");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGooglePopUp();
      navigate("/shop");
      console.log("signin successfull");
      resetFormFields();
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="btn-container">
          <Button buttonType="inverted">SignIn</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={handleGoogleSignIn}
          >
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
