import React from 'react';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import HomePage from './views/pages/HomePage/HomePage';

import LoginPage from './views/pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Route exact  path="/">
        <LoginPage />
      </Route>
      <Route exact  path="/home">
        <HomePage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
