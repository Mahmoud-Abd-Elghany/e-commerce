import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"; //for Database
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";  //for Authentication

const Config = {
    apiKey: "AIzaSyCNC2LguzAoqhMdJedFDdfGe3Ic0jPoJN0",
    authDomain: "e-commerce-eebe2.firebaseapp.com",
    projectId: "e-commerce-eebe2",
    storageBucket: "e-commerce-eebe2.appspot.com",
    messagingSenderId: "399225721922",
    appId: "1:399225721922:web:dedb3a3c16ebe8962b89db",
    measurementId: "G-WMNYYWDKVD"
};

initializeApp(Config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
  });

export const signInWithGoogle = () =>{ signInWithPopup(auth, provider)
                                        .catch((error) => {
                                            // Handle Errors here.
                                            const errorCode = error.code;
                                            const errorMessage = error.message;
                                            console.log(errorMessage);
                                        })
                                    }