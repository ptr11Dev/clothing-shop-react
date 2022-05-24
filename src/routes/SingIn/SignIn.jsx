import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sing in with Google Popup</button>
    </div>
  );
};

export default SignIn;
