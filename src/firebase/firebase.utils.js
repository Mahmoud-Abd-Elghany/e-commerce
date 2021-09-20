import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDoc, doc, setDoc, writeBatch } from "firebase/firestore"; //for Database
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
export const db = getFirestore();


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = doc(db, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);
    if(!snapShot.exists()){ //Checking Duplicate before Creating new User
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(err){
            console.log(err)
        }
    }
    return userRef;
}

export const addingCollectionAndDocuments = async (collectionKey, dataArray) => {
 const collectionRef = collection(db, collectionKey);
 const batch = writeBatch(db); // batching all set operations
 dataArray.forEach( obj => {
     batch.set(doc(collectionRef, `${obj.title}`),{
         title: obj.title,
         items: obj.items,
    })
 })
 return await batch.commit()
}


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