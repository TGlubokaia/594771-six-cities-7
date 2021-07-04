import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';

function App(props) {
  const {aptCount} = props;
  return <MainScreen aptCount={aptCount} />;
}

App.propTypes = {
  aptCount: PropTypes.number.isRequired,
};

export default App;
