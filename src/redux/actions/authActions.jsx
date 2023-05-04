import {  firestore as db } from '../../services/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import * as types from '../type'

export const signUp = (email, password, fullName, phone) => async (dispatch) => {
  console.log('in dispatch')
  try {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(auth,email, password);
    await db.collection('users').doc(user.uid).set({ fullName, phone });
    dispatch({ type: types.SIGN_UP_SUCCESS });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.SIGN_UP_FAILURE, payload: error.message });
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
  //  await auth.signInWithEmailAndPassword(email, password);
    dispatch({ type: types.SIGN_IN_SUCCESS });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.SIGN_IN_FAILURE, payload: error.message });
  }
};

export const signOut = () => async (dispatch) => {
  try {
 //   await auth.signOut();
    dispatch({ type: types.LOGOUT_SUCCESS });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.LOGOUT_FAILURE, payload: error.message });
  }
};

// export const resetPassword = (email) => async (dispatch) => {
//   try {
//     await auth.sendPasswordResetEmail(email);
//     dispatch({ type: types.RESET_PASSWORD_SUCCESS });
//   } catch (error) {
//     console.error(error);
//     dispatch({ type: types.RESET_PASSWORD_FAILURE, payload: error.message });
//   }
// };

export const clearAuthError = () => ({
  type: types.CLEAR_AUTH_ERROR,
});
