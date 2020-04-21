import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_rcSXy7O_rtOReLEkTsEm78hhKArWuNo",
    authDomain: "crwn-db-f4a68.firebaseapp.com",
    databaseURL: "https://crwn-db-f4a68.firebaseio.com",
    projectId: "crwn-db-f4a68",
    storageBucket: "crwn-db-f4a68.appspot.com",
    messagingSenderId: "262733681546",
    appId: "1:262733681546:web:4adc832d1ac64dcb37ae73",
    measurementId: "G-R6FL17G9FK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;