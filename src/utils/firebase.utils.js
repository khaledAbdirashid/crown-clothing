import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5xjSV5kJOs9OYk4CFCOXKejX0HLIYBaw",
  authDomain: "crown-clothing-ecf7e.firebaseapp.com",
  projectId: "crown-clothing-ecf7e",
  storageBucket: "crown-clothing-ecf7e.appspot.com",
  messagingSenderId: "386935293823",
  appId: "1:386935293823:web:a1c00e38a3f10a73f7fc4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
export const db = getFirestore(app);

export const createUserDocument = async (userAuth, additionalInfo) => {
  const docRef = doc(db, "users", userAuth.uid);
  const docSnapShot = await getDoc(docRef);
  if (!docSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return docRef;
};
export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUSer = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (
  collectionKey,
  documentsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  documentsToAdd.forEach((documentObj) => {
    const docRef = doc(collectionRef, documentObj.title.toLowerCase());
    batch.set(docRef, documentObj);
  });

  await batch.commit();
};

export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
