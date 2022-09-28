import { signInWithGooglePopup, getUserFromAuth } from "../../utils/firebase.utils";

const SignIn = () => {
  const signIn = async () => {
    const responese = await signInWithGooglePopup();
    const user = getUserFromAuth(responese);
    console.log(user);
  };
  return (
    <div>
      Sign In page
      <button onClick={signIn}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
