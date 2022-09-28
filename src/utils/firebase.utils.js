import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnWsy-psf__KUwL6wwmaKJvVHIMzr2egM",
  authDomain: "crwn-clothing-db-58d9e.firebaseapp.com",
  projectId: "crwn-clothing-db-58d9e",
  storageBucket: "crwn-clothing-db-58d9e.appspot.com",
  messagingSenderId: "913611300175",
  appId: "1:913611300175:web:512869566dae539a06f93a",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const getUserFromAuth = async ({user}) => {
  const userDocRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userDocRef);
  const { displayName, email } = user;
  const createAt = Date();
  if (!userDoc.exists()) {
    await setDoc(userDocRef, {
      displayName,
      email,
      createAt,
    });
  }
  return userDocRef;
};
