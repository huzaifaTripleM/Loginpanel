import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
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
    <firebaseConfig>
      <Router>
        <div className="App">
          <AppHeader />
          <Switch>
            <Route exact path="/" element={Login} />
            <Route path="/register" element={Register} />

              <Route path="/user-profile" element={<PrivateRoute> <UserProfile/> </PrivateRoute>}></Route>
              <Route path="/payment-form" element={<PrivateRoute> <PaymentForm/> </PrivateRoute>} />
              <Route path="/review" element={<PrivateRoute> <Review/> </PrivateRoute>} />
              <Route path="/payment-history" element={<PrivateRoute> <PaymentHistory/> </PrivateRoute>} />
              <Route path="/dashboard-user-profile" element={<PrivateRoute> <DashboardUserProfile/> </PrivateRoute>} />
 
          </Switch>
          <AppFooter />
        </div>
      </Router>
    </firebaseConfig>
  </Provider>
  );
}

export default App;
