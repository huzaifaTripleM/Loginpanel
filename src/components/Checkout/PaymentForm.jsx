import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPaymentIntent  } from '../../redux/actions/paymentActions';

import { showNotification } from '../../utils/notification';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const history =  useNavigate();
  const { cart, totalAmount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setProcessing(true);
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      setProcessing(false);
      showNotification('error', error.message);
    } else {
      const order = {
        userId: user.uid,
        items: cart,
        amount: totalAmount,
        paymentId: paymentMethod.id,
      };
      dispatch(createPaymentIntent (order)).then(() => {
      
        setProcessing(false);
        showNotification('success', 'Payment successful!');
        history.push('/dashboard/payment-history');
      }).catch((err) => {
        setProcessing(false);
        showNotification('error', err.message);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="card-element">Card details</label>
        <CardElement id="card-element" />
      </div>
      <button type="submit" className="btn btn-primary" disabled={!stripe || processing}>
        {processing ? 'Processing...' : `Pay $${totalAmount}`}
      </button>
    </form>
  );
};

export default PaymentForm;
