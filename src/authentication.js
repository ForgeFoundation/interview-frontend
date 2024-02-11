import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInUser } from "./utils";

// const firebaseConfig = {
//     apiKey: "AIzaSyAOonudCmYXaeuKvJ3BYhiHH2Q6986s7yU",
//     authDomain: "ghw23-85c04.firebaseapp.com",
//     projectId: "ghw23-85c04",
//     storageBucket: "ghw23-85c04.appspot.com",
//     messagingSenderId: "72534743572",
//     appId: "1:72534743572:web:71440b2fc58cbb8397e501"
// };

// Firebase configuration


// project-6011918544
const firebaseConfig = {
    apiKey: "AIzaSyDgfXavSMlq26anOKjn87I4Vs6VWFhbMZo",
    authDomain: "descartable-server.firebaseapp.com",
    databaseURL: "https://descartable-server-default-rtdb.firebaseio.com",
    projectId: "descartable-server",
    storageBucket: "descartable-server.appspot.com",
    messagingSenderId: "6011918544",
    appId: "1:6011918544:web:5a95545cc91a22e23526d5"
  };

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const signInWithGoogle = (navigate) => {
    signInWithPopup(auth, provider)
        .then((result) => {

            const user = result.user;
            sessionStorage.setItem('user', user.displayName);

            sessionStorage.setItem('user_fid', user.uid);
            
            signInUser(user.displayName, user.uid, user.email);

            
            // Redirect to a different route
            //   Reload the page
            window.location.reload();
            navigate("/dashboard");
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const signOut = (navigate) => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('user_fid');

    auth.signOut();

    // Redirect to a different route
    navigate("/");
}