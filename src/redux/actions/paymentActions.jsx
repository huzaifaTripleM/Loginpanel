import { auth, firebaseConfig, firestore } from '../../services/firebase';
import { showNotification } from '../../utils/notification';
import { CREATE_PAYMENT_INTENT, FETCH_PAYMENT_HISTORY } from '../type';
import stripe from '../../services/stripe';

export const createPaymentIntent = (order) => async (dispatch) => {
  try {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order }),
    });
    const { clientSecret } = await response.json();
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
       // card: elements.getElement(CardElement),
        billing_details: {
          name: order.card.name,
          email: order.email,
          address: {
            line1: order.shippingAddress.address,
            city: order.shippingAddress.city,
            state: order.shippingAddress.state,
            country: order.shippingAddress.country,
            postal_code: order.shippingAddress.postalCode,
          },
        },
      },
    });
    if (result.error) {
      showNotification('error', result.error.message);
    } else {
      // Payment was successful, update the order in Firebase
      const orderRef = firestore.collection('orders').doc(order.paymentId);
      await orderRef.update({
        status: 'paid',
        amount: result.paymentIntent.amount,
        currency: result.paymentIntent.currency,
        payment_method: result.paymentIntent.payment_method,
        payment_intent: result.paymentIntent.id,
        payment_status: result.paymentIntent.status,
        created: result.paymentIntent.created,
      });
      // Dispatch an action to update the payment history in Redux state
      dispatch(fetchPaymentHistory());
    }
  } catch (error) {
    showNotification('error', error.message);
    throw error;
  }
};

export const fetchPaymentHistory = () => async (dispatch, getState) => {
  try {
    const { uid } = getState().auth.user;
    const snapshot = await firestore.collection('orders')
      .where('userId', '==', uid)
      .orderBy('created', 'desc')
      .get();
    const paymentHistory = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch({
      type: FETCH_PAYMENT_HISTORY,
      payload: paymentHistory,
    });
  } catch (error) {
    showNotification('error', error.message);
    throw error;
  }
};
