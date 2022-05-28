import "./Authentication.scss";

import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const Authentication = () => {
  return (
    <div className="authenticationContainer">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
