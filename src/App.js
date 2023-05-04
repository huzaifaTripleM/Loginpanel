import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
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
import { firebaseConfig } from './services/firebase';
import AppFooter from './components/Layout/AppFooter';
import MainLayout from './components/Layout/MainLayout';
import './App.css';
// const stripePromise = loadStripe("");

function App() {
  return (
 
    <Provider store={store}>
    <firebaseConfig >
      <BrowserRouter>
        <div className="App">
          
          <Routes>
          <Route exact path="/" element={<AppHeader />} />
            <Route exact path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/user-profile" element={<PrivateRoute> <UserProfile/> </PrivateRoute>}></Route>
            <Route path="/payment-form" element={<PrivateRoute> <PaymentForm/> </PrivateRoute>} />
            <Route path="/review" element={<PrivateRoute> <Review/> </PrivateRoute>} />
            <Route path="/payment-history" element={<PrivateRoute> <PaymentHistory/> </PrivateRoute>} />
            <Route path="/dashboard-user-profile" element={<PrivateRoute> <DashboardUserProfile/> </PrivateRoute>} />
 
          </Routes>
          <AppFooter />
        </div>
      </BrowserRouter>
    </firebaseConfig >
  </Provider>
  );
}

export default App;
