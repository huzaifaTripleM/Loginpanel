import { loadStripe } from '@stripe/stripe-js';
import StripeCheckout from 'react-stripe-checkout'

const stripe = loadStripe("pk_test_51N3DVJDglHnbIRAQO304ufr8UMmdL5mdZlE4gjBx6wUnald5NAhMCi65U02LcCLdlqz524wIWvrDgkfk9sqOMcw500e1AI85DK");

export default stripe;
