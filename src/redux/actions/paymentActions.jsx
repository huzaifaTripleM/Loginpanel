import { CREATE_PAYMENT_INTENT } from '../types/paymentTypes';
import { setLoading } from './appActions';
import axios from 'axios';
import { stripe } from '../utils/stripe';

export const createPaymentIntent = (amount) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post('/api/payment/create-payment-intent', { amount });

    const { client_secret } = response.data;

    const paymentMethod = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: stripe.elements.getElement('card'),
        billing_details: {
          name: 'John Doe',
        },
      },
    });

    if (paymentMethod.error) {
      console.log(paymentMethod.error.message);
    } else {
      console.log('Payment succeeded:', paymentMethod);
    }

    dispatch({
      type: CREATE_PAYMENT_INTENT,
      payload: { client_secret },
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};
