import "./SignUpForm.scss";

import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords aren't the same.");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log(err);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="signUpContainer">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSumbit}>
        <FormInput
          required
          labelInput="Display Name"
          name="displayName"
          onChange={handleChange}
          type="text"
          value={displayName}
        />
        <FormInput
          required
          labelInput="Email"
          name="email"
          onChange={handleChange}
          type="email"
          value={email}
        />
        <FormInput
          required
          labelInput="Password"
          name="password"
          onChange={handleChange}
          type="password"
          value={password}
        />
        <FormInput
          required
          labelInput="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          type="password"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
