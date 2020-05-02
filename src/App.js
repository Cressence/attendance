import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/login';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
    </Router>
  );
}

export default App;
