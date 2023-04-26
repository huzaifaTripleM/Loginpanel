import { auth, db } from '../firebase';
import * as types from '../constants/actionTypes';

export const signUp = (email, password, fullName, phone) => async (dispatch) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await db.collection('users').doc(user.uid).set({ fullName, phone });
    dispatch({ type: types.SIGN_UP_SUCCESS });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.SIGN_UP_FAILURE, payload: error.message });
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    dispatch({ type: types.SIGN_IN_SUCCESS });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.SIGN_IN_FAILURE, payload: error.message });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch({ type: types.SIGN_OUT_SUCCESS });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.SIGN_OUT_FAILURE, payload: error.message });
  }
};

export const resetPassword = (email) => async (dispatch) => {
  try {
    await auth.sendPasswordResetEmail(email);
    dispatch({ type: types.RESET_PASSWORD_SUCCESS });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.RESET_PASSWORD_FAILURE, payload: error.message });
  }
};

export const clearAuthError = () => ({
  type: types.CLEAR_AUTH_ERROR,
});
