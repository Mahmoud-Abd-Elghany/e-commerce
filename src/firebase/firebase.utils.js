import { initializeApp } from "firebase/app"
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore"; //for Database
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";  //for Authentication

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

//Checking and Creating new user in firestore
export const createUserProfileDocument = async (userAuth, additionalData) =>
{
    if(!userAuth) return; //check if there is data in userAuth
    const userRef = doc(db, `users/${userAuth.uid}`);
    const Snapshot = await getDoc(userRef);
     //Checking Duplicate before Creating new User
    if(!Snapshot.exists()){
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

// export const addingCollectionAndDocuments = async (collectionKey, dataArray) => {
//  const collectionRef = collection(db, collectionKey);
//  const batch = writeBatch(db); // batching all set operations
//  dataArray.forEach( obj => {
//      batch.set(doc(collectionRef),{
//          title: obj.title,
//          items: obj.items,
//     })
//  })
//  return await batch.commit()
// } // Changing Shop Data from Obj to Array to Add to Firestore
// Already Added Data to Firestore

export const convertDocsArrToObj = async (snapShot) => {
    const transformedArr = [];
    snapShot.forEach((obj, index) => {
        const {title, items} = obj.data();
        transformedArr.push({
            title,
            items,
            id: obj.id,
            routeUrl: `${title.toLowerCase()}`
        })
    })
    return transformedArr.reduce((accu, obj) => {
        accu[obj.title.toLowerCase()] = obj;
        return accu
    },{}); //Changing Array to Object (Data Normalization)
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
        unsubscribe();
        resolve(userAuth);
    }, reject)
})
}

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    'prompt': 'select_account'
  });
