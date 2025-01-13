import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBEnmKTko3TCa1raD-PWWgFETgSPvw5NLM",
  authDomain: "netflix-clone-cb48d.firebaseapp.com",
  projectId: "netflix-clone-cb48d",
  storageBucket: "netflix-clone-cb48d.firebasestorage.app",
  messagingSenderId: "313009321215",
  appId: "1:313009321215:web:1e2897b11a9dcd723448ca"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app);

const signup = async (name, email, password)=>{
    try{
        
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid : user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);

    }
}

const login = async (email, password) => {
    try{
         await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);

    }
}

const logout =()=> {
    signOut(auth);
}

export {auth, db, login, signup, logout};