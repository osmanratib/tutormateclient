import { createContext, useEffect, useState } from 'react';
import {
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 signOut,
 updateProfile,
 onAuthStateChanged,
 getAuth,
 GoogleAuthProvider,
 signInWithPopup
} from 'firebase/auth';
import app from '../Firebase/FirebaseConfig';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 const createUser = async (email, password, name) => {
  setLoading(true);
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(result.user, { displayName: name });
  setUser(result.user);
  setLoading(false);
  return result;
 };

 const signInUser = async (email, password) => {
  setLoading(true);
  const result = await signInWithEmailAndPassword(auth, email, password);
  setUser(result.user);
  setLoading(false);
  return result;
 };

 // ✅ GOOGLE SIGN UP / SIGN IN
 const googleSignIn = async () => {
  setLoading(true);
  const result = await signInWithPopup(auth, googleProvider);
  setUser(result.user);
  setLoading(false);
  return result;
 };

 const logOut = async () => {
  setLoading(true);
  await signOut(auth);
  setUser(null);
  setLoading(false);
 };

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
   setUser(currentUser);
   setLoading(false);
  });
  return () => unsubscribe();
 }, []);

 const authInfo = {
  user,
  loading,
  createUser,
  signInUser,
  googleSignIn,
  logOut
 };

 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;
