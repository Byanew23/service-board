import React from 'react';
import './App.css';
import { Header, Footer, LandingPage } from './components';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

