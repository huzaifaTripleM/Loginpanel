import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT_SUCCESS } from '../type';


const initialState = {

    userInfo: null,
    error: null,
}

const userReducer = (state = initialState , action ) => {

    switch (action.type) {

       case USER_LOGIN_SUCCESS : 
         return {
        ...state,
        userInfo: action.payload,
        error: null,
      };

      case USER_LOGIN_FAILURE :
        return {
            ...state , 
            userInfo :null,
            error : action.payload
        }

        case USER_LOGOUT_SUCCESS : 
        return {
            ...state, 
            userInfo:null,
            error:null
        }

      default :
      return state
    }



}

export default userReducer