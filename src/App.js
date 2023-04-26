import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadStripe } from '@stripe/react-stripe-js';
import { FirebaseProvider } from './services/firebase';
import { Elements } from '@stripe/react-stripe-js';
import PrivateRoute from './components/Auth/privateRoute';
import Login from './components/Auth/login';
import Register from './components/Auth/Register'
import UserProfile from './components/Auth/UserProfile';
import PaymentForm from './components/Checkout/PaymentForm';
import Review from './components/Checkout/Review';
import PaymentHistory from './components/Dashboard/PaymentHistory';
import DashboardUserProfile from './components/Dashboard/UserProfile';
import AppHeader from './components/Layout/AppHeader';
import AppFooter from './components/Layout/AppFooter';
import MainLayout from './components/Layout/MainLayout';
import './App.css';
// const stripePromise = loadStripe("");

function App() {
  return (
    <Provider store={store}>
    <FirebaseProvider>
      {/* <Elements stripe={stripePromise}> */}
        <Router>
          <div className="App">
            <AppHeader />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/user-profile" component={UserProfile} />
              <PrivateRoute path="/payment-form" component={PaymentForm} />
              <PrivateRoute path="/review" component={Review} />
              <PrivateRoute path="/payment-history" component={PaymentHistory} />
              <PrivateRoute path="/dashboard-user-profile" component={DashboardUserProfile} />
            </Switch>
            <AppFooter />
          </div>
        </Router>
      {/* </Elements> */}
    </FirebaseProvider>
  </Provider>
  );
}

export default App;
