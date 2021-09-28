import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute (props) {
  const { render, exact, path, redirectPath, authStatusRequired, authorizationStatus } = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={(componentProps) => (
        authorizationStatus === authStatusRequired ? render(componentProps) : <Redirect to={redirectPath} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  redirectPath: PropTypes.string.isRequired,
  authStatusRequired: PropTypes.string.isRequired,
};

export default PrivateRoute;
