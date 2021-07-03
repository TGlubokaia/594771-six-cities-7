import React from 'react';
import MainScreen from '../main/main-screen';

function App(props) {
  const {aptCount} = props;
  return <MainScreen aptCount={aptCount} />;
}

export default App;
