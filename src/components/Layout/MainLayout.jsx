import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const MainLayout = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(matchProps) => (
    <div>
      <AppHeader />
      <div className="main-container">
        <Component {...matchProps} />
      </div>
      <AppFooter />
    </div>
  )} />
);

MainLayout.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default MainLayout;
