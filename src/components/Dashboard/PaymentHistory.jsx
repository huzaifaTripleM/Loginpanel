import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPaymentHistory } from '../../redux/actions/paymentActions';

const PaymentHistory = () => {
  const dispatch = useDispatch();
  const paymentHistory = useSelector(state => state.payment.paymentHistory);

  useEffect(() => {
    dispatch(fetchPaymentHistory());
  }, [dispatch]);

  return (
    <div>
      <h2>Payment History</h2>
      {paymentHistory.length ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map(payment => (
              <tr key={payment.id}>
                <td>{payment.date}</td>
                <td>{payment.amount}</td>
                <td>{payment.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No payment history available.</p>
      )}
    </div>
  );
};

export default PaymentHistory;
