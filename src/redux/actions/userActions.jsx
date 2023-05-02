import { SET_CURRENT_USER } from "../type";
import { auth, firebaseConfig, firestore } from "../../services/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const signInWithEmail = (email, password) => async (dispatch) => {
  try {
    const response = await auth.signInWithEmailAndPassword(email, password);
    dispatch(setCurrentUser(response.user));
  } catch (error) {
    console.log(error);
  }
};

export const signUpWithEmail = (email, password) => async (dispatch) => {
  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    dispatch(setCurrentUser(response.user));
  } catch (error) {
    console.log(error);
  }
};

export const signOut = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch(setCurrentUser(null));
  } catch (error) {
    console.log(error);
  }
};

// export const signInWithGoogle = () => async (dispatch) => {
//   try {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     const response = await firebase.auth().signInWithPopup(provider);
//     dispatch(setCurrentUser(response.user));
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getUserDetails= () =>{
  
}

// export const updateUserProfile = (displayName, photoURL) => async (
//   dispatch,
//   getState
// ) => {
//   try {
//     const currentUser = getState().auth.currentUser;
//     if (currentUser) {
//       await currentUser.updateProfile({
//         displayName,
       
//       });
//       dispatch(setCurrentUser(currentUser));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };