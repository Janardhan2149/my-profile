import React from 'react';
import Home from '../containers/Home/Home';
import { InputProvider } from '../contexts/InputContext';

const HomePage: React.FC = () => {
  return (
  <InputProvider>
    <Home />
  </InputProvider>);
};

export default HomePage;