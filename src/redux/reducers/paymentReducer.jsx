import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  GET_PAYMENTS_REQUEST,
  GET_PAYMENTS_SUCCESS,
  GET_PAYMENTS_FAILURE,
} from "../type";

const initialState = {
    paymentIntent: null,
    error: null,
    isLoading: false,
    isConfirmed: false
}

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_PAYMENT_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case CREATE_PAYMENT_SUCCESS:
        return {
          ...state,
          paymentIntent: action.payload,
          error: null,
          isLoading: false
        };
      case CREATE_PAYMENT_FAILURE:
        return {
          ...state,
          paymentIntent: null,
          error: action.payload,
          isLoading: false
        };
      case GET_PAYMENTS_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case GET_PAYMENTS_SUCCESS:
        return {
          ...state,
          isConfirmed: true,
          error: null,
          isLoading: false
        };
      case GET_PAYMENTS_FAILURE:
        return {
          ...state,
          isConfirmed: false,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  };
  
  export default paymentReducer;