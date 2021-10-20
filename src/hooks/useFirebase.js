import firebaseInitialize from "../Firebase/firebase.init"
import { useState, useEffect } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

firebaseInitialize()
const useFirebase = () => {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
    // .then((result) => {
    //     setUser(result.user)
    //   }).catch((error) => {
    //     console.log(error)
    //   });

  }

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {

    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
  }, [])


  // Email and password
  const createUserUsingPassowrd = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      // .then((userCredential) => {
      //   setUser(userCredential.user)
      // })
      // .catch((error) => {
      //   console.log(error)
      // });
  }

  const signUserUsingPassowrd = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      // .then((userCredential) => {
      //   console.log(userCredential)
      //   setUser(userCredential.user)
      // })
      // .catch((error) => {
      //   console.log(error)
      // });
  }




  return {
    user,
    signInUsingGoogle,
    logOut,
    createUserUsingPassowrd,
    signUserUsingPassowrd,
    isLoading,
    setIsLoading
  }
}

export default useFirebase
