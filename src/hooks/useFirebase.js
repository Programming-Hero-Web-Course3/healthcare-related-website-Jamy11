import firebaseInitialize from "../Firebase/firebase.init"
import { useState, useEffect } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

firebaseInitialize()
const useFirebase = () => {

  const [user, setUser] = useState({})
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
    });
  }, [])


  // Email and password
  const createUserUsingPassowrd = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const signUserUsingPassowrd = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch((error) => {
        console.log(error)
      });
  }




  return {
    user,
    signInUsingGoogle,
    logOut,
    createUserUsingPassowrd,
    signUserUsingPassowrd
  }
}

export default useFirebase
