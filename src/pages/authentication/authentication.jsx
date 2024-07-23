import SigninForm from "../../components/signin-form/signin-form";
import SignupForm from "../../components/signup-form/signup-form";
import "./authentication.scss";
const Authentication = () => {
  return (
    <div className="auth-container">
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default Authentication;
