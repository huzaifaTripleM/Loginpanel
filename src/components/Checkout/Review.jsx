import React from 'react';
import { useSelector } from 'react-redux';
import {  useNavigate} from 'react-router-dom';
import { Card, CardHeader, CardContent, Typography, Button } from '@material-ui/core';

const Review = () => {
  const { cartItems, paymentMethod } = useSelector((state) => state.cart);
  const { shippingAddress } = useSelector((state) => state.user);

  const history =  useNavigate();

  // Calculate total price of items in cart
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Calculate shipping price based on total price
  const shippingPrice = itemsPrice > 100 ? 0 : 10;

  // Calculate tax price based on total price
  const taxPrice = itemsPrice * 0.1;

  // Calculate total price including shipping and tax
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const handlePlaceOrder = () => {
    // Place order logic here
    history.push('/dashboard/payment-history');
  };

  return (
    <Card>
      <CardHeader title="Order Summary" />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Shipping Address
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`${shippingAddress.firstName} ${shippingAddress.lastName}`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`${shippingAddress.addressLine1}, ${shippingAddress.addressLine2}`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.zip}`}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Payment Method
        </Typography>
        <Typography variant="body1" gutterBottom>
          {paymentMethod}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Order Items
        </Typography>
        {cartItems.map((item) => (
          <div key={item.id}>
            <Typography variant="body1" gutterBottom>
              {`${item.quantity} x ${item.name} - $${item.price}`}
            </Typography>
          </div>
        ))}
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Items Price: $${itemsPrice.toFixed(2)}`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Shipping Price: $${shippingPrice.toFixed(2)}`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Tax Price: $${taxPrice.toFixed(2)}`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Total Price: $${totalPrice.toFixed(2)}`}
        </Typography>
        <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
          Place Order
        </Button>
      </CardContent>
    </Card>
  );
};

export default Review;
