import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, db, provider } from "../../../FireBase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const SignInAct = (data) => {
    return {
        type: "SIGNIN",
        payload: data
    };
};

const SignUpAct = () => {
    return {
        type: "SIGNUP"
    };
};

const SignOutAct = () => {
    return {
        type: "SIGNOUT",
    };
};

const LoginUserGateAct = (data) => {
    return {
        type: "LOGINUSERGATE",
        payload: data
    };
};

export const SignUpBackAct = () => {
    return {
        type: "SIGNUPBACK",
    };
}

const LoadingAct = () => {
    return {
        type: "LOADING",
    };
}


//Thunk

// Sign Up
export const SignUpThunk = (data) => async dispatch => {
    try {
        dispatch(LoadingAct());
        const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const userData = {
            uid: res.user.uid,
            email: res.user.email,
            displayName: res.user.displayName || data.name
        };
        await addDoc(collection(db, "admins"), userData);
        dispatch(SignUpAct());
    } catch (error) {
        console.log(error);
    }
}

// Sign In
export const SignInThunk = (data) => async dispatch => {
    try {
        dispatch(LoadingAct());
        const res = await signInWithEmailAndPassword(auth, data.email, data.password);
        localStorage.setItem('uid', JSON.stringify(res.user.uid));
       const userdata = {
           displayName: res.user.displayName,
           uid: res.user.uid,
           email: res.user.email
       }
        dispatch(SignInAct(userdata));
        console.log("signIn", userdata);
    } catch (err) {
        console.log("Error code", err.code);
        console.log("Error message", err.message);
    }
}

// google Sign In 
export const SignInPoPup = () => async dispatch => {
    try {
        const res = await signInWithPopup(auth, provider);
        const userData = {
            uid: res.user.uid,
            email: res.user.email,
            displayName: res.user.displayName,
            photoURL: res.user.photoURL
        }
        await addDoc(collection(db, "admins"), userData);
        localStorage.setItem("uid", JSON.stringify(res.user.uid));
        dispatch(SignInAct(userData));
    } catch (error) {
        console.error("Sign in error:", error);
    }
}

// logOut(Admin)
export const AdminLogOutThink = () => async dispatch => {
    try {
        await signOut(auth);
        localStorage.removeItem("uid");
        dispatch(SignOutAct());
        return true;
    } catch (error) {
        console.error("Sign out error:", error);
        return false;
    }
};

//Get Admins
export const loginAdminThunk = () => async dispatch => {
    try {
        const recs = (await getDocs(collection(db, "admins"))).docs.map(doc => ({ ...doc.data(), id: doc.id }));
        dispatch(LoginUserGateAct(recs));
    } catch (err) {
        console.error("Error get recipes:", err);
    }
}

// signIn Home Page Validation
export const HomeNavigateThunk = () => async dispatch => {
    try {
        const uid = JSON.parse(localStorage.getItem("uid"));
        const res = await getDocs(collection(db, "admins"));
        const userget = res.docs.find(doc => doc.data().uid === uid);
        if (userget) {
            const userData = userget.data();
            console.log("validation", userData);
            dispatch(SignInAct(userData));
        }
    } catch (err) {
        console.error("Error get recipes:", err);
    }
}