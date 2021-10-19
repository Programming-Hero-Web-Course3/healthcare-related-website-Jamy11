import firebaseInitialize from "../Firebase/firebase.init"
import {useState,useEffect} from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged , signOut} from "firebase/auth";

firebaseInitialize()
const useFirebase = () => {
    
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user)
          }).catch((error) => {
            console.log(error)
          });
        
    }

    const logOut =() =>{
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
    
    
    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase
