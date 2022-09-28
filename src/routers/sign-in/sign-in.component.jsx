import { async } from "@firebase/util";
import { useEffect } from "react";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  getUserFromAuth,
  auth,
} from "../../utils/firebase.utils";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  useEffect(() => {
    const getResponse = async () => {
      const responese = await getRedirectResult(auth);
      if (responese) {
        const user = await getUserFromAuth(responese);
      }
    };
    getResponse();
  }, []);

  const signIn = async () => {
    const responese = await signInWithGooglePopup();
    const user = await getUserFromAuth(responese);
  };
  return (
    <div>
      Sign In page
      <button onClick={signIn}>Sign In With Google PopUp</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
